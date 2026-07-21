"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { AICard } from "@/components/shared/AICard"

export default function AILessonPlannerPage() {
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const [plan, setPlan] = useState<{
    objectives: string[]
    materials: string[]
    activities: string[]
    assessment: string
  } | null>(null)

  const handleGenerate = async () => {
    setGenerating(true)
    // TODO: call backend AI endpoint
    setTimeout(() => {
      setPlan({
        objectives: ["Understand the concept of linear equations", "Solve simple linear equations in one variable", "Apply linear equations to real-world problems"],
        materials: ["Whiteboard and markers", "Textbook: Mathematics for JSS 1", "Worksheets", "Algebra tiles"],
        activities: ["Introduction (10min): Review of algebraic expressions", "Guided Practice (20min): Solve 2x + 3 = 7 together", "Group Work (15min): Students solve in pairs", "Independent Practice (10min): Worksheet exercises"],
        assessment: "Exit ticket: Solve 3x - 5 = 10. Students must show working and submit before leaving.",
      })
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="AI Lesson Planner" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">AI Lesson Plan Generator</h2>
          <p className="text-body-md text-on-surface-variant">Generate comprehensive lesson plans with AI in seconds.</p>
        </div>

        <AICard badge="AI Powered">
          <div className="space-y-stack-md">
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Describe the lesson you need</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none min-h-[120px] resize-y"
                placeholder="e.g., Week 4 Mathematics JSS1 - Introduction to Linear Equations"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Class</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                  <option>JSS 1-A</option>
                  <option>JSS 1-B</option>
                  <option>JSS 2-A</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Subject</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                  <option>Mathematics</option>
                  <option>English Language</option>
                  <option>Integrated Science</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Week</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                  <option>Week 1</option>
                  <option>Week 2</option>
                  <option>Week 3</option>
                  <option>Week 4</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={!prompt || generating}
              className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {generating ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Generating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Generate Lesson Plan
                </>
              )}
            </button>
          </div>
        </AICard>

        {plan && (
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-primary">Lesson Plan Generated</h3>
            </div>

            <div className="space-y-stack-lg">
              <Section title="Learning Objectives">
                <ul className="list-disc pl-5 space-y-1">
                  {plan.objectives.map((o, i) => <li key={i} className="text-body-md text-on-surface">{o}</li>)}
                </ul>
              </Section>

              <Section title="Materials & Resources">
                <ul className="list-disc pl-5 space-y-1">
                  {plan.materials.map((m, i) => <li key={i} className="text-body-md text-on-surface">{m}</li>)}
                </ul>
              </Section>

              <Section title="Lesson Activities">
                <ul className="space-y-2">
                  {plan.activities.map((a, i) => <li key={i} className="text-body-md text-on-surface flex gap-2"><span className="font-bold text-secondary shrink-0">{i + 1}.</span>{a}</li>)}
                </ul>
              </Section>

              <Section title="Assessment">
                <p className="text-body-md text-on-surface bg-surface-container-low p-4 rounded-xl">{plan.assessment}</p>
              </Section>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-outline-variant">
              <button className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">
                <span className="material-symbols-outlined">save</span>
                Save Plan
              </button>
              <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-6 py-2.5 rounded-xl font-bold hover:bg-surface-container">
                <span className="material-symbols-outlined">download</span>
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-label-md font-bold text-on-surface-variant uppercase tracking-wider mb-2">{title}</h4>
      {children}
    </div>
  )
}
