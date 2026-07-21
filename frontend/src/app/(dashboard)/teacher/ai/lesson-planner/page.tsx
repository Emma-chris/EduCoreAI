"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { AICard } from "@/components/shared/AICard"

export default function TeacherLessonPlannerPage() {
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const [plan, setPlan] = useState<{ objectives: string[]; materials: string[]; activities: string[]; assessment: string } | null>(null)

  const handleGenerate = async () => {
    setGenerating(true)
    setTimeout(() => {
      setPlan({
        objectives: ["Understand linear equations", "Solve simple equations", "Apply to real-world problems"],
        materials: ["Whiteboard", "Textbook", "Worksheets"],
        activities: ["Review (10min)", "Guided Practice (20min)", "Group Work (15min)"],
        assessment: "Exit ticket: Solve 3x - 5 = 10",
      })
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="AI Lesson Planner" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">AI Lesson Plan Generator</h2>
          <p className="text-body-md text-on-surface-variant">Create lesson plans in seconds.</p>
        </div>

        <AICard badge="AI Powered">
          <div className="space-y-stack-md">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none min-h-[100px]"
              placeholder="e.g., Week 4 Mathematics JSS1 - Linear Equations"
            />
            <button
              onClick={handleGenerate}
              disabled={!prompt || generating}
              className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {generating ? (
                <><span className="material-symbols-outlined animate-spin">progress_activity</span> Generating...</>
              ) : (
                <><span className="material-symbols-outlined">auto_awesome</span> Generate Lesson Plan</>
              )}
            </button>
          </div>
        </AICard>

        {plan && (
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant animate-fade-in">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Generated Plan</h3>
            <div className="space-y-4">
              <div><h4 className="font-label-sm font-bold text-on-surface-variant uppercase mb-1">Objectives</h4><ul className="list-disc pl-5"> {plan.objectives.map((o, i) => <li key={i} className="text-body-md">{o}</li>)}</ul></div>
              <div><h4 className="font-label-sm font-bold text-on-surface-variant uppercase mb-1">Materials</h4><ul className="list-disc pl-5"> {plan.materials.map((m, i) => <li key={i} className="text-body-md">{m}</li>)}</ul></div>
              <div><h4 className="font-label-sm font-bold text-on-surface-variant uppercase mb-1">Activities</h4><ul className="list-disc pl-5"> {plan.activities.map((a, i) => <li key={i} className="text-body-md">{a}</li>)}</ul></div>
              <div><h4 className="font-label-sm font-bold text-on-surface-variant uppercase mb-1">Assessment</h4><p className="text-body-md bg-surface-container-low p-3 rounded-lg">{plan.assessment}</p></div>
            </div>
            <button className="mt-4 bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90 flex items-center gap-2">
              <span className="material-symbols-outlined">save</span> Save Plan
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
