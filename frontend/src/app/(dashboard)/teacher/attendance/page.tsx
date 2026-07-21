"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"

type Status = "present" | "late" | "absent"

const students = [
  { id: "1", name: "Kofi Owusu", admissionNo: "CCA-2024-001" },
  { id: "2", name: "Amara Okafor", admissionNo: "CCA-2024-002" },
  { id: "3", name: "Chidi Nwosu", admissionNo: "CCA-2024-003" },
  { id: "4", name: "Fatima Bello", admissionNo: "CCA-2024-004" },
  { id: "5", name: "Emeka Obi", admissionNo: "CCA-2023-012" },
]

export default function TeacherAttendancePage() {
  const [records, setRecords] = useState<Record<string, Status>>({})
  const [date] = useState(new Date().toISOString().split("T")[0])

  const setStatus = (id: string, status: Status) =>
    setRecords((prev) => ({ ...prev, [id]: status }))

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Attendance" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Mark Attendance</h2>
            <p className="text-body-md text-on-surface-variant">{date} · JSS 1-A Mathematics</p>
          </div>
          <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">
            Save Attendance
          </button>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant divide-y divide-outline-variant/50">
          {students.map((s) => {
            const status = records[s.id] || "present"
            return (
              <div key={s.id} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                    {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-body-md font-medium">{s.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{s.admissionNo}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(["present", "late", "absent"] as Status[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatus(s.id, st)}
                      className={`px-4 py-1.5 rounded-lg text-label-sm font-bold transition-all ${
                        status === st
                          ? st === "present" ? "bg-secondary-container text-on-secondary-container ring-2 ring-secondary"
                          : st === "late" ? "bg-tertiary-fixed text-on-tertiary-fixed-variant ring-2 ring-tertiary"
                          : "bg-error-container text-on-error-container ring-2 ring-error"
                          : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      {st.charAt(0).toUpperCase() + st.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
