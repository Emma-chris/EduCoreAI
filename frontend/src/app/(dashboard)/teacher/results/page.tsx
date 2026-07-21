"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"

const students = [
  { id: "1", name: "Kofi Owusu", admissionNo: "CCA-2024-001" },
  { id: "2", name: "Amara Okafor", admissionNo: "CCA-2024-002" },
  { id: "3", name: "Chidi Nwosu", admissionNo: "CCA-2024-003" },
  { id: "4", name: "Fatima Bello", admissionNo: "CCA-2024-004" },
  { id: "5", name: "Emeka Obi", admissionNo: "CCA-2023-012" },
]

export default function TeacherResultsPage() {
  const [scores, setScores] = useState<Record<string, string>>({})

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Results" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Enter Scores</h2>
            <p className="text-body-md text-on-surface-variant">JSS 1-A · Mathematics · First Term 2024/2025</p>
          </div>
          <div className="flex gap-3">
            <select className="bg-surface border border-outline-variant rounded-lg text-body-md py-2 px-3 outline-none">
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
            </select>
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">
              Save All Scores
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low">
                <th className="text-left px-6 py-3 text-label-sm font-label text-on-surface-variant uppercase">Student</th>
                <th className="text-left px-6 py-3 text-label-sm font-label text-on-surface-variant uppercase">Admission No.</th>
                <th className="text-center px-6 py-3 text-label-sm font-label text-on-surface-variant uppercase">Score (out of 100)</th>
                <th className="text-center px-6 py-3 text-label-sm font-label text-on-surface-variant uppercase">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/50">
              {students.map((s) => {
                const score = parseFloat(scores[s.id] || "0")
                const grade = score >= 75 ? "A" : score >= 70 ? "B+" : score >= 65 ? "B" : score >= 60 ? "C+" : score >= 55 ? "C" : score >= 50 ? "D" : "F"
                return (
                  <tr key={s.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                          {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <span className="font-medium">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-on-surface-variant">{s.admissionNo}</td>
                    <td className="px-6 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={scores[s.id] || ""}
                        onChange={(e) => setScores((prev) => ({ ...prev, [s.id]: e.target.value }))}
                        className="w-24 text-center bg-surface border border-outline-variant rounded-lg py-2 px-3 focus:ring-2 focus:ring-secondary outline-none"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-6 py-3 text-center">
                      {scores[s.id] && (
                        <span className={`font-bold text-headline-md ${grade === "A" ? "text-secondary" : grade === "F" ? "text-error" : "text-on-surface"}`}>
                          {grade}
                        </span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
