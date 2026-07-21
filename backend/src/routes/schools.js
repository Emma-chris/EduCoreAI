const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

// GET /api/schools/:id
router.get("/:id", async (req, res, next) => {
  try {
    const [school] = await sql`SELECT * FROM schools WHERE id = ${req.params.id}`
    if (!school) return res.status(404).json({ message: "School not found" })
    res.json(school)
  } catch (err) {
    next(err)
  }
})

// PUT /api/schools/:id
router.put("/:id", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { name, logo, address, phone, email, session, term } = req.body
    const [school] = await sql`
      UPDATE schools
      SET name = COALESCE(${name}, name),
          logo = COALESCE(${logo}, logo),
          address = COALESCE(${address}, address),
          phone = COALESCE(${phone}, phone),
          email = COALESCE(${email}, email),
          session = COALESCE(${session}, session),
          term = COALESCE(${term}, term)
      WHERE id = ${req.params.id}
      RETURNING *
    `
    res.json(school)
  } catch (err) {
    next(err)
  }
})

module.exports = router
