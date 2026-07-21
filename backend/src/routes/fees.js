const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

// GET /api/fees
router.get("/", async (req, res, next) => {
  try {
    const fees = await sql`SELECT * FROM fees WHERE school_id = ${req.user.schoolId} ORDER BY due_date ASC`
    res.json(fees)
  } catch (err) {
    next(err)
  }
})

// POST /api/fees
router.post("/", authorize("super_admin", "school_admin"), async (req, res, next) => {
  try {
    const { name, amount, dueDate } = req.body
    const [fee] = await sql`
      INSERT INTO fees (school_id, name, amount, due_date)
      VALUES (${req.user.schoolId}, ${name}, ${amount}, ${dueDate})
      RETURNING *
    `
    res.status(201).json(fee)
  } catch (err) {
    next(err)
  }
})

// GET /api/fees/payments?studentId=xxx
router.get("/payments", async (req, res, next) => {
  try {
    const { studentId } = req.query
    let query = sql`
      SELECT p.*, f.name as fee_name, f.amount as fee_amount, f.due_date, s.name as student_name, s.admission_no
      FROM payments p
      JOIN fees f ON f.id = p.fee_id
      JOIN students s ON s.id = p.student_id
      WHERE f.school_id = ${req.user.schoolId}
    `
    if (studentId) query = sql`${query} AND p.student_id = ${studentId}`
    query = sql`${query} ORDER BY p.created_at DESC`

    const payments = await query
    res.json(payments)
  } catch (err) {
    next(err)
  }
})

// POST /api/fees/payments
router.post("/payments", async (req, res, next) => {
  try {
    const { feeId, studentId, amount, status = "paid", receiptUrl } = req.body
    const [payment] = await sql`
      INSERT INTO payments (fee_id, student_id, amount, status, receipt_url)
      VALUES (${feeId}, ${studentId}, ${amount}, ${status}, ${receiptUrl || null})
      RETURNING *
    `
    res.status(201).json(payment)
  } catch (err) {
    next(err)
  }
})

// GET /api/fees/dashboard
router.get("/dashboard", async (req, res, next) => {
  try {
    const [totals] = await sql`
      SELECT
        COALESCE(SUM(CASE WHEN p.status = 'paid' THEN p.amount ELSE 0 END), 0) as total_collected,
        COALESCE(SUM(CASE WHEN p.status IN ('pending', 'overdue') THEN p.amount ELSE 0 END), 0) as total_outstanding,
        COUNT(DISTINCT CASE WHEN p.status IN ('pending', 'overdue') THEN p.student_id END) as students_with_balance
      FROM payments p
      JOIN fees f ON f.id = p.fee_id
      WHERE f.school_id = ${req.user.schoolId}
    `
    res.json(totals)
  } catch (err) {
    next(err)
  }
})

module.exports = router
