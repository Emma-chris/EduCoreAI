const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

// GET /api/students
router.get("/", async (req, res, next) => {
  try {
    const { classId, status, search } = req.query
    let query = sql`
      SELECT s.*, c.name as class_name
      FROM students s
      LEFT JOIN classes c ON c.id = s.class_id
      WHERE s.school_id = ${req.user.schoolId}
    `

    if (classId) query = sql`${query} AND s.class_id = ${classId}`
    if (status) query = sql`${query} AND s.status = ${status}`
    if (search) query = sql`${query} AND (s.name ILIKE ${`%${search}%`} OR s.admission_no ILIKE ${`%${search}%`})`

    query = sql`${query} ORDER BY s.name ASC`

    const students = await query
    res.json(students)
  } catch (err) {
    next(err)
  }
})

// GET /api/students/:id
router.get("/:id", async (req, res, next) => {
  try {
    const [student] = await sql`
      SELECT s.*, c.name as class_name
      FROM students s
      LEFT JOIN classes c ON c.id = s.class_id
      WHERE s.id = ${req.params.id} AND s.school_id = ${req.user.schoolId}
    `
    if (!student) return res.status(404).json({ message: "Student not found" })
    res.json(student)
  } catch (err) {
    next(err)
  }
})

// POST /api/students
router.post("/", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { admissionNo, name, dob, gender, classId, parentName, parentPhone, parentEmail, address, medicalNotes } = req.body
    const [student] = await sql`
      INSERT INTO students (school_id, admission_no, name, dob, gender, class_id, parent_name, parent_phone, parent_email, address, medical_notes)
      VALUES (${req.user.schoolId}, ${admissionNo}, ${name}, ${dob || null}, ${gender || null}, ${classId || null}, ${parentName || null}, ${parentPhone || null}, ${parentEmail || null}, ${address || null}, ${medicalNotes || null})
      RETURNING *
    `
    res.status(201).json(student)
  } catch (err) {
    next(err)
  }
})

// PUT /api/students/:id
router.put("/:id", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { name, dob, gender, classId, parentName, parentPhone, parentEmail, address, medicalNotes, status } = req.body
    const [student] = await sql`
      UPDATE students
      SET name = COALESCE(${name}, name),
          dob = COALESCE(${dob}, dob),
          gender = COALESCE(${gender}, gender),
          class_id = COALESCE(${classId}, class_id),
          parent_name = COALESCE(${parentName}, parent_name),
          parent_phone = COALESCE(${parentPhone}, parent_phone),
          parent_email = COALESCE(${parentEmail}, parent_email),
          address = COALESCE(${address}, address),
          medical_notes = COALESCE(${medicalNotes}, medical_notes),
          status = COALESCE(${status}, status)
      WHERE id = ${req.params.id} AND school_id = ${req.user.schoolId}
      RETURNING *
    `
    if (!student) return res.status(404).json({ message: "Student not found" })
    res.json(student)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/students/:id (archive)
router.delete("/:id", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const [student] = await sql`
      UPDATE students SET status = 'archived'
      WHERE id = ${req.params.id} AND school_id = ${req.user.schoolId}
      RETURNING *
    `
    res.json(student)
  } catch (err) {
    next(err)
  }
})

module.exports = router
