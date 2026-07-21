const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

// GET /api/parents/children
router.get("/children", async (req, res, next) => {
  try {
    const [user] = await sql`SELECT email FROM users WHERE id = ${req.user.id}`
    const children = await sql`
      SELECT id, name, admission_no, class_id, status
      FROM students
      WHERE parent_email = ${user.email}
    `
    res.json(children)
  } catch (err) {
    next(err)
  }
})

// GET /api/parents/:studentId/results
router.get("/:studentId/results", async (req, res, next) => {
  try {
    const results = await sql`
      SELECT r.*, c.name as class_name
      FROM results r
      JOIN classes c ON c.id = r.class_id
      WHERE r.student_id = ${req.params.studentId}
      ORDER BY r.session DESC, r.term DESC
    `
    res.json(results)
  } catch (err) {
    next(err)
  }
})

// GET /api/parents/:studentId/attendance
router.get("/:studentId/attendance", async (req, res, next) => {
  try {
    const [student] = await sql`SELECT class_id FROM students WHERE id = ${req.params.studentId}`
    if (!student) return res.status(404).json({ message: "Student not found" })

    const records = await sql`
      SELECT date, records FROM attendance
      WHERE class_id = ${student.class_id}
      ORDER BY date DESC
      LIMIT 30
    `

    const attendance = records.map((r) => {
      const recs = typeof r.records === "string" ? JSON.parse(r.records) : r.records
      const match = recs.find((s) => s.studentId === req.params.studentId)
      return { date: r.date, status: match ? match.status : "absent" }
    })

    res.json(attendance)
  } catch (err) {
    next(err)
  }
})

module.exports = router
