const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

router.get("/", async (req, res, next) => {
  try {
    const { department, search } = req.query
    let query = sql`SELECT * FROM teachers WHERE school_id = ${req.user.schoolId}`

    if (department) query = sql`${query} AND department = ${department}`
    if (search) query = sql`${query} AND name ILIKE ${`%${search}%`}`

    query = sql`${query} ORDER BY name ASC`
    const teachers = await query
    res.json(teachers)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const [teacher] = await sql`SELECT * FROM teachers WHERE id = ${req.params.id} AND school_id = ${req.user.schoolId}`
    if (!teacher) return res.status(404).json({ message: "Teacher not found" })
    res.json(teacher)
  } catch (err) {
    next(err)
  }
})

router.post("/", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { name, department, subjects, qualifications, phone, email } = req.body
    const [teacher] = await sql`
      INSERT INTO teachers (school_id, name, department, subjects, qualifications, phone, email)
      VALUES (${req.user.schoolId}, ${name}, ${department || null}, ${subjects || []}, ${qualifications || null}, ${phone || null}, ${email || null})
      RETURNING *
    `
    res.status(201).json(teacher)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { name, department, subjects, qualifications, phone, email } = req.body
    const [teacher] = await sql`
      UPDATE teachers
      SET name = COALESCE(${name}, name),
          department = COALESCE(${department}, department),
          subjects = COALESCE(${subjects}, subjects),
          qualifications = COALESCE(${qualifications}, qualifications),
          phone = COALESCE(${phone}, phone),
          email = COALESCE(${email}, email)
      WHERE id = ${req.params.id} AND school_id = ${req.user.schoolId}
      RETURNING *
    `
    if (!teacher) return res.status(404).json({ message: "Teacher not found" })
    res.json(teacher)
  } catch (err) {
    next(err)
  }
})

module.exports = router
