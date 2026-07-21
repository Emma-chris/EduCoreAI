const { Router } = require("express")
const { sql } = require("../db/pool")
const { authenticate, authorize } = require("../middleware/auth")

const router = Router()

router.use(authenticate)
router.use(authorize("super_admin", "school_admin", "teacher"))

// POST /api/ai/lesson-plan
router.post("/lesson-plan", async (req, res, next) => {
  try {
    const { prompt, classId, subject, week } = req.body

    // TODO: Integrate OpenAI API
    const mockResponse = {
      objectives: [
        `Understand the key concepts of ${subject}`,
        "Apply knowledge to solve practical problems",
        "Demonstrate understanding through assessment",
      ],
      materials: [
        "Whiteboard and markers",
        "Textbook and worksheets",
        "Visual aids and handouts",
      ],
      activities: [
        "Introduction (10min): Review previous knowledge",
        "Guided Practice (20min): Work through examples together",
        "Group Work (15min): Collaborative problem solving",
        "Independent Practice (10min): Individual exercises",
      ],
      assessment: "Students will complete an exit ticket with 3 key questions before leaving class.",
    }

    const [plan] = await sql`
      INSERT INTO lesson_plans (teacher_id, class_id, subject, week, prompt, ai_response)
      VALUES (${req.user.id}, ${classId}, ${subject}, ${week}, ${prompt}, ${JSON.stringify(mockResponse)})
      RETURNING *
    `

    res.status(201).json({ ...plan, aiResponse: mockResponse })
  } catch (err) {
    next(err)
  }
})

// POST /api/ai/report-comment
router.post("/report-comment", async (req, res, next) => {
  try {
    const { studentId, average, behavior } = req.body

    // TODO: Integrate OpenAI API
    const comment = `${req.user.name} has demonstrated ${average >= 70 ? "excellent" : average >= 50 ? "satisfactory" : "needs improvement in"} performance this term with an average score of ${average}%. ${behavior === "Excellent" ? "Their conduct in class has been exemplary." : behavior === "Good" ? "Their behavior has been satisfactory." : "They are encouraged to improve their conduct."} Keep up the good work!`

    const [record] = await sql`
      INSERT INTO report_comments (student_id, average, behavior, ai_comment)
      VALUES (${studentId}, ${average}, ${behavior}, ${comment})
      RETURNING *
    `

    res.status(201).json(record)
  } catch (err) {
    next(err)
  }
})

module.exports = router
