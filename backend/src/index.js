require("dotenv").config()

const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const schoolRoutes = require("./routes/schools")
const studentRoutes = require("./routes/students")
const teacherRoutes = require("./routes/teachers")
const classRoutes = require("./routes/classes")
const attendanceRoutes = require("./routes/attendance")
const resultRoutes = require("./routes/results")
const feeRoutes = require("./routes/fees")
const parentRoutes = require("./routes/parents")
const aiRoutes = require("./routes/ai")

const { errorHandler } = require("./middleware/errors")

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}))
app.use(express.json())

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/schools", schoolRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/teachers", teacherRoutes)
app.use("/api/classes", classRoutes)
app.use("/api/attendance", attendanceRoutes)
app.use("/api/results", resultRoutes)
app.use("/api/fees", feeRoutes)
app.use("/api/parents", parentRoutes)
app.use("/api/ai", aiRoutes)

// Error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`EduCore AI Backend running on http://localhost:${PORT}`)
})
