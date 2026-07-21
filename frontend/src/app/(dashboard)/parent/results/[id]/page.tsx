"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatusBadge } from "@/components/shared/StatusBadge"

const mockSubjects = [
  { name: "Mathematics", score: 85, total: 100, grade: "A", remark: "Excellent" },
  { name: "English Language", score: 72, total: 100, grade: "B+", remark: "Very Good" },
  { name: "Integrated Science", score: 78, total: 100, grade: "A", remark: "Excellent" },
  { name: "Social Studies", score: 68, total: 100, grade: "B", remark: "Good" },
  { name: "ICT", score: 92, total: 100, grade: "A", remark: "Excellent" },
]

export default function ParentResultDetailPage() {
  const totalScore = mockSubjects.reduce((s, sub) => s + sub.score, 0)
  const totalPossible = mockSubjects.length * 100
  const average = ((totalScore / totalPossible) * 100).toFixed(1)

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Academic Report" subtitle="Kofi Owusu — First Term 2024/2025" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        {/* Student Header */}
        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant flex flex-col md:flex-row gap-stack-lg items-start">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shrink-0">
            <span className="text-headline-md font-bold text-on-primary-container">KO</span>
          </div>
          <div className="flex-1">
            <h2 className="text-headline-md font-display text-primary">Kofi Owusu</h2>
            <p className="text-body-md text-on-surface-variant">Class: JSS 1-A · Admission: CCA-2024-001</p>
          </div>
          <div className="text-right">
            <p className="text-label-sm text-on-surface-variant">Average Score</p>
            <p className="text-display-lg font-bold text-secondary">{average}%</p>
          </div>
        </div>

        {/* Subject Results */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary">Term Results</h3>
          </div>
          <div className="divide-y divide-outline-variant/50">
            {mockSubjects.map((sub) => (
              <div key={sub.name} className="flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors">
                <div className="flex-1">
                  <p className="text-body-md font-medium text-on-surface">{sub.name}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-label-sm text-on-surface-variant">Score</p>
                    <p className="text-body-md font-bold">{sub.score}/{sub.total}</p>
                  </div>
                  <div className="w-16 text-center">
                    <span className={`font-bold text-headline-md ${sub.grade === "A" ? "text-secondary" : sub.grade === "F" ? "text-error" : "text-on-surface"}`}>
                      {sub.grade}
                    </span>
                  </div>
                  <div className="w-24">
                    <span className="text-label-sm text-on-surface-variant">{sub.remark}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Comment */}
        <div className="ai-gradient-border rounded-2xl p-stack-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-secondary">auto_awesome</span>
            <h3 className="font-label-md font-bold text-on-surface">AI-Generated Report Comment</h3>
          </div>
          <p className="text-body-md text-on-surface leading-relaxed">
            Kofi has demonstrated excellent performance this term, particularly in ICT and Mathematics. 
            He is an attentive and diligent student who consistently submits high-quality work. 
            To further improve, he should focus on reading comprehension in English Language. 
            Overall, Kofi is on track for outstanding academic success. Keep up the great work!
          </p>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-xl font-bold hover:opacity-90">
            <span className="material-symbols-outlined">download</span>
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  )
}
