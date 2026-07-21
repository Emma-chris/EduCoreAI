const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate } = require("../middleware/auth")

const router = Router()

router.use(authenticate)

// GET /api/attendance?classId=xxx&date=2025-01-15
router.get("/", async (req, res, next) => {
  try {
    const { classId, date, startDate, endDate } = req.query
    let query = sql`SELECT * FROM attendance WHERE class_id = ${classId}`

    if (date) query = sql`${query} AND date = ${date}`
    if (startDate && endDate) query = sql`${query} AND date >= ${startDate} AND date <= ${endDate}`

    query = sql`${query} ORDER BY date DESC`
    const records = await query
    res.json(records)
  } catch (err) {
    next(err)
  }
})

// POST /api/attendance
router.post("/", async (req, res, next) => {
  try {
    const { classId, date, records } = req.body

    const [existing] = await sql`
      SELECT id FROM attendance WHERE class_id = ${classId} AND date = ${date}
    `
    if (existing) {
      const [updated] = await sql`
        UPDATE attendance SET records = ${JSON.stringify(records)}
        WHERE id = ${existing.id}
        RETURNING *
      `
      return res.json(updated)
    }

    const [record] = await sql`
      INSERT INTO attendance (class_id, date, records)
      VALUES (${classId}, ${date}, ${JSON.stringify(records)})
      RETURNING *
    `
    res.status(201).json(record)
  } catch (err) {
    next(err)
  }
})

// GET /api/attendance/stats?classId=xxx&startDate=...&endDate=...
router.get("/stats", async (req, res, next) => {
  try {
    const { classId, startDate, endDate } = req.query
    const records = await sql`
      SELECT date, records FROM attendance
      WHERE class_id = ${classId}
      AND date >= ${startDate} AND date <= ${endDate}
      ORDER BY date ASC
    `

    const stats = records.map((r) => {
      const recs = typeof r.records === "string" ? JSON.parse(r.records) : r.records
      const total = recs.length
      const present = recs.filter((s) => s.status === "present").length
      const late = recs.filter((s) => s.status === "late").length
      const absent = recs.filter((s) => s.status === "absent").length
      return { date: r.date, present, late, absent, total, rate: total > 0 ? ((present + late) / total) * 100 : 0 }
    })

    res.json(stats)
  } catch (err) {
    next(err)
  }
})

module.exports = router
