"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { StatusBadge } from "@/components/shared/StatusBadge"

const mockStudents = [
  { id: "1", name: "Kofi Owusu", admissionNo: "CCA-2024-001" },
  { id: "2", name: "Amara Okafor", admissionNo: "CCA-2024-002" },
  { id: "3", name: "Chidi Nwosu", admissionNo: "CCA-2024-003" },
  { id: "4", name: "Fatima Bello", admissionNo: "CCA-2024-004" },
  { id: "5", name: "Emeka Obi", admissionNo: "CCA-2023-012" },
  { id: "6", name: "Aisha Mohammed", admissionNo: "CCA-2024-005" },
]

type AttendanceStatus = "present" | "late" | "absent"

export default function AttendancePage() {
  const [records, setRecords] = useState<Record<string, AttendanceStatus>>({})
  const [selectedClass, setSelectedClass] = useState("JSS 1-A")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const setStatus = (studentId: string, status: AttendanceStatus) => {
    setRecords((prev) => ({ ...prev, [studentId]: status }))
  }

  const stats = {
    present: Object.values(records).filter((s) => s === "present").length,
    late: Object.values(records).filter((s) => s === "late").length,
    absent: Object.values(records).filter((s) => s === "absent").length,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Attendance" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Mark Attendance</h2>
            <p className="text-body-md text-on-surface-variant">Record daily attendance for {selectedClass}.</p>
          </div>
          <div className="flex gap-4 items-center">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-surface border border-outline-variant rounded-lg text-body-md py-2 px-3 focus:ring-2 focus:ring-secondary outline-none"
            >
              <option>JSS 1-A</option>
              <option>JSS 1-B</option>
              <option>JSS 2-A</option>
              <option>JSS 2-B</option>
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-surface border border-outline-variant rounded-lg text-body-md py-2 px-3 focus:ring-2 focus:ring-secondary outline-none"
            />
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all">
              Save Attendance
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Present</p>
            <p className="text-headline-md font-bold text-secondary">{stats.present}</p>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Late</p>
            <p className="text-headline-md font-bold text-on-tertiary-container">{stats.late}</p>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Absent</p>
            <p className="text-headline-md font-bold text-error">{stats.absent}</p>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="divide-y divide-outline-variant/50">
            {mockStudents.map((student) => {
              const status = records[student.id] || "present"
              return (
                <div key={student.id} className="flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                      {student.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-on-surface">{student.name}</p>
                      <p className="text-label-sm text-on-surface-variant">{student.admissionNo}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {(["present", "late", "absent"] as AttendanceStatus[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStatus(student.id, s)}
                        className={`px-4 py-1.5 rounded-lg text-label-sm font-bold transition-all ${
                          status === s
                            ? s === "present" ? "bg-secondary-container text-on-secondary-container ring-2 ring-secondary"
                            : s === "late" ? "bg-tertiary-fixed text-on-tertiary-fixed-variant ring-2 ring-tertiary"
                            : "bg-error-container text-on-error-container ring-2 ring-error"
                            : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container"
                        }`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Weekly Trend Placeholder */}
        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
          <h3 className="font-headline-md text-headline-md text-primary mb-4">Weekly Trend</h3>
          <div className="flex items-end gap-3 h-32">
            {[85, 92, 78, 95, 88].map((pct, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-secondary-container rounded-t-lg" style={{ height: `${pct}%` }} />
                <span className="text-label-sm text-on-surface-variant">Day {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
