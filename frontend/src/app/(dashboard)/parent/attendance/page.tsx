"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatusBadge } from "@/components/shared/StatusBadge"

const attendanceData = [
  { date: "15 Jul 2025", status: "present" as const },
  { date: "14 Jul 2025", status: "present" as const },
  { date: "11 Jul 2025", status: "late" as const },
  { date: "10 Jul 2025", status: "present" as const },
  { date: "09 Jul 2025", status: "present" as const },
  { date: "08 Jul 2025", status: "absent" as const },
  { date: "07 Jul 2025", status: "present" as const },
]

export default function ParentAttendancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Attendance Record" subtitle="Kofi Owusu" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Present</p>
            <p className="text-headline-md font-bold text-secondary">5</p>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Late</p>
            <p className="text-headline-md font-bold text-on-tertiary-container">1</p>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant text-center">
            <p className="text-label-sm text-on-surface-variant">Absent</p>
            <p className="text-headline-md font-bold text-error">1</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary">Daily Record</h3>
          </div>
          <div className="divide-y divide-outline-variant/50">
            {attendanceData.map((entry) => (
              <div key={entry.date} className="flex items-center justify-between px-6 py-4">
                <span className="text-body-md text-on-surface">{entry.date}</span>
                <StatusBadge status={entry.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
