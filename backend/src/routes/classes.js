const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

router.get("/", async (req, res, next) => {
  try {
    const classes = await sql`SELECT * FROM classes WHERE school_id = ${req.user.schoolId} ORDER BY name ASC`
    res.json(classes)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { name, department } = req.body
    const [cls] = await sql`
      INSERT INTO classes (school_id, name, department)
      VALUES (${req.user.schoolId}, ${name}, ${department || null})
      RETURNING *
    `
    res.status(201).json(cls)
  } catch (err) {
    next(err)
  }
})

module.exports = router
