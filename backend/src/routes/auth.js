const { Router } = require("express")
const { sql } = require("../db/pool")
const { hashPassword, comparePassword } = require("../utils/hash")
const { signToken } = require("../utils/jwt")
const { authenticate } = require("../middleware/auth")

const router = Router()

// POST /api/auth/register
router.post("/register", async (req, res, next) => {
  try {
    const { schoolName, email, password, fullName, phone } = req.body

    const existing = await sql`SELECT id FROM users WHERE email = ${email}`
    if (existing.length > 0) {
      return res.status(409).json({ message: "Email already registered" })
    }

    const [school] = await sql`
      INSERT INTO schools (name, phone, email)
      VALUES (${schoolName}, ${phone || null}, ${email})
      RETURNING id, name
    `

    const hashed = await hashPassword(password)
    const [user] = await sql`
      INSERT INTO users (school_id, role, email, password, name)
      VALUES (${school.id}, 'school_admin', ${email}, ${hashed}, ${fullName})
      RETURNING id, email, name, role
    `

    const token = signToken({ id: user.id, schoolId: school.id, role: user.role, email: user.email })

    res.status(201).json({ user, school, token })
  } catch (err) {
    next(err)
  }
})

// POST /api/auth/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body

    const [user] = await sql`
      SELECT u.id, u.email, u.password, u.name, u.role, u.school_id, s.name as school_name
      FROM users u
      JOIN schools s ON s.id = u.school_id
      WHERE u.email = ${email}
    `

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const valid = await comparePassword(password, user.password)
    if (!valid) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = signToken({ id: user.id, schoolId: user.school_id, role: user.role, email: user.email })

    res.json({
      user: { id: user.id, email: user.email, name: user.name, role: user.role, schoolId: user.school_id },
      school: { id: user.school_id, name: user.school_name },
      token,
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/auth/me
router.get("/me", authenticate, async (req, res, next) => {
  try {
    const [user] = await sql`
      SELECT u.id, u.email, u.name, u.role, u.school_id, s.name as school_name
      FROM users u
      JOIN schools s ON s.id = u.school_id
      WHERE u.id = ${req.user.id}
    `

    if (!user) return res.status(404).json({ message: "User not found" })

    res.json({
      user: { id: user.id, email: user.email, name: user.name, role: user.role, schoolId: user.school_id },
      school: { id: user.school_id, name: user.school_name },
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
