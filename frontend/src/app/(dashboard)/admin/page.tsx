"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatCard } from "@/components/shared/StatCard"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Dashboard" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        {/* Page Title */}
        <div>
          <h2 className="text-headline-lg font-display text-primary">School Overview</h2>
          <p className="text-body-md text-on-surface-variant">Welcome back, Dr. Okoro. Here is your school at a glance.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StatCard icon="group" label="Total Students" value="1,250" trend="+12%" trendUp iconBg="bg-secondary-container" />
          <StatCard icon="school" label="Teachers" value="48" trend="+3" trendUp iconBg="bg-tertiary-fixed" />
          <StatCard icon="payments" label="Revenue" value="₦12,450,000" trend="+8%" trendUp iconBg="bg-secondary-container" />
          <StatCard icon="calendar_month" label="Attendance" value="95%" trend="-2%" trendUp={false} iconBg="bg-error-container" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Outstanding Fees Card */}
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Outstanding Fees</h3>
              <span className="text-label-sm text-error font-bold">₦1,400,000</span>
            </div>
            <div className="space-y-3">
              {[
                { class: "JSS 1", amount: "₦450,000", pct: 65 },
                { class: "JSS 2", amount: "₦380,000", pct: 72 },
                { class: "SSS 1", amount: "₦320,000", pct: 55 },
                { class: "SSS 2", amount: "₦250,000", pct: 80 },
              ].map((item) => (
                <div key={item.class} className="flex items-center justify-between">
                  <span className="text-body-md text-on-surface">{item.class}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                    <span className="text-label-sm text-on-surface-variant w-20 text-right">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New student enrolled", detail: "Amara Okafor - JSS 1A", time: "2 hours ago" },
                { action: "Attendance marked", detail: "JSS 2A - 32/35 present", time: "3 hours ago" },
                { action: "Fee payment received", detail: "₦50,000 - Kofi Owusu", time: "5 hours ago" },
                { action: "Lesson plan generated", detail: "Mathematics - Week 4", time: "1 day ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-body-md text-on-surface truncate">{item.action}</p>
                    <p className="text-label-sm text-on-surface-variant">{item.detail}</p>
                  </div>
                  <span className="text-label-sm text-on-surface-variant shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Session Banner */}
        <div className="bg-primary-container px-6 py-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-label-sm text-on-primary-container">Current Session</p>
            <p className="text-headline-md font-bold text-on-primary">2023/2024 · First Term</p>
          </div>
          <button className="bg-surface-container-lowest text-primary px-4 py-2 rounded-lg font-bold text-label-sm hover:opacity-90 transition-all">
            Manage Session
          </button>
        </div>
      </div>
    </div>
  )
}
