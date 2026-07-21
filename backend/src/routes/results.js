const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

function computeGrade(score, total = 100) {
  const pct = (score / total) * 100
  if (pct >= 75) return { grade: "A", remark: "Excellent" }
  if (pct >= 70) return { grade: "B+", remark: "Very Good" }
  if (pct >= 65) return { grade: "B", remark: "Good" }
  if (pct >= 60) return { grade: "C+", remark: "Credit" }
  if (pct >= 55) return { grade: "C", remark: "Credit" }
  if (pct >= 50) return { grade: "D", remark: "Pass" }
  return { grade: "F", remark: "Fail" }
}

// GET /api/results?classId=xxx&term=First Term&session=2023/2024&subject=Mathematics
router.get("/", async (req, res, next) => {
  try {
    const { classId, term, session, subject, studentId } = req.query
    let query = sql`
      SELECT r.*, s.name as student_name, s.admission_no
      FROM results r
      JOIN students s ON s.id = r.student_id
      WHERE 1=1
    `

    if (classId) query = sql`${query} AND r.class_id = ${classId}`
    if (term) query = sql`${query} AND r.term = ${term}`
    if (session) query = sql`${query} AND r.session = ${session}`
    if (subject) query = sql`${query} AND r.subject = ${subject}`
    if (studentId) query = sql`${query} AND r.student_id = ${studentId}`

    query = sql`${query} ORDER BY s.name ASC`
    const results = await query
    res.json(results)
  } catch (err) {
    next(err)
  }
})

// POST /api/results
router.post("/", authorize("super_admin", "school_admin", "teacher"), async (req, res, next) => {
  try {
    const { studentId, classId, subject, term, session, score, total = 100 } = req.body
    const { grade, remark } = computeGrade(score, total)

    const [existing] = await sql`
      SELECT id FROM results
      WHERE student_id = ${studentId} AND subject = ${subject} AND term = ${term} AND session = ${session}
    `
    if (existing) {
      const [result] = await sql`
        UPDATE results SET score = ${score}, total = ${total}, grade = ${grade}, remark = ${remark}
        WHERE id = ${existing.id}
        RETURNING *
      `
      return res.json(result)
    }

    const [result] = await sql`
      INSERT INTO results (student_id, class_id, subject, term, session, score, total, grade, remark)
      VALUES (${studentId}, ${classId}, ${subject}, ${term}, ${session}, ${score}, ${total}, ${grade}, ${remark})
      RETURNING *
    `
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/results/summary?classId=xxx&term=...&session=...
router.get("/summary", async (req, res, next) => {
  try {
    const { classId, term, session } = req.query
    const results = await sql`
      SELECT r.*, s.name as student_name, s.admission_no
      FROM results r
      JOIN students s ON s.id = r.student_id
      WHERE r.class_id = ${classId} AND r.term = ${term} AND r.session = ${session}
    `

    const subjects = [...new Set(results.map((r) => r.subject))]
    const byStudent = {}
    for (const r of results) {
      if (!byStudent[r.student_id]) byStudent[r.student_id] = { studentName: r.student_name, admissionNo: r.admission_no, subjects: [], total: 0, count: 0 }
      byStudent[r.student_id].subjects.push({ subject: r.subject, score: r.score, grade: r.grade })
      byStudent[r.student_id].total += r.score
      byStudent[r.student_id].count++
    }

    const summary = Object.entries(byStudent).map(([id, data]) => ({
      studentId: id,
      ...data,
      average: data.count > 0 ? (data.total / data.count).toFixed(1) : 0,
    }))

    res.json({ subjects, students: summary })
  } catch (err) {
    next(err)
  }
})

module.exports = router
