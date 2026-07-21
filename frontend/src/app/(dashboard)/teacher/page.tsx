"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatCard } from "@/components/shared/StatCard"
import Link from "next/link"

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Teacher Dashboard" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">Welcome, Dr. Mensah</h2>
          <p className="text-body-md text-on-surface-variant">Mathematics & Physics Department</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <StatCard icon="group" label="My Students" value="125" iconBg="bg-secondary-container" />
          <StatCard icon="calendar_month" label="Today's Classes" value="4" iconBg="bg-tertiary-fixed" />
          <StatCard icon="analytics" label="Class Average" value="74.5%" iconBg="bg-secondary-container" />
          <StatCard icon="checklist" label="Pending Tasks" value="3" iconBg="bg-error-container" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link href="/teacher/attendance" className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
            <span className="material-symbols-outlined text-secondary text-[32px] mb-3">calendar_month</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-1">Mark Attendance</h3>
            <p className="text-body-md text-on-surface-variant">Record today&apos;s attendance</p>
          </Link>
          <Link href="/teacher/results" className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all">
            <span className="material-symbols-outlined text-secondary text-[32px] mb-3">analytics</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-1">Enter Scores</h3>
            <p className="text-body-md text-on-surface-variant">Manage student results</p>
          </Link>
          <Link href="/teacher/ai/lesson-planner" className="ai-gradient-border rounded-2xl p-stack-lg">
            <span className="material-symbols-outlined text-secondary text-[32px] mb-3">psychology</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-1">AI Lesson Planner</h3>
            <p className="text-body-md text-on-surface-variant">Generate lesson plans with AI</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
