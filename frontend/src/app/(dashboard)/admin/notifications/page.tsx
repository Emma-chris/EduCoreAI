"use client"

import { Topbar } from "@/components/layout/Topbar"

const notifications = [
  { icon: "person_add", title: "New Student Enrolled", detail: "Amara Okafor — JSS 1A", time: "2 hours ago", unread: true },
  { icon: "payments", title: "Payment Received", detail: "₦50,000 from Kofi Owusu", time: "3 hours ago", unread: true },
  { icon: "checklist", title: "Attendance Complete", detail: "JSS 2A — 32/35 present", time: "5 hours ago", unread: false },
  { icon: "auto_awesome", title: "Lesson Plan Generated", detail: "Mathematics Week 4 — Dr. Mensah", time: "1 day ago", unread: false },
  { icon: "warning", title: "Fee Reminder", detail: "15 students have outstanding balances", time: "2 days ago", unread: false },
]

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Notifications" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Notifications</h2>
            <p className="text-body-md text-on-surface-variant">Stay updated with school activities.</p>
          </div>
          <button className="text-label-sm text-secondary hover:underline">Mark all as read</button>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant divide-y divide-outline-variant/50">
          {notifications.map((n, i) => (
            <div key={i} className={`flex items-start gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors ${n.unread ? "bg-secondary-container/10" : ""}`}>
              {n.unread && <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />}
              {!n.unread && <div className="w-2 h-2 shrink-0" />}
              <div className="h-10 w-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant">{n.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-body-md ${n.unread ? "font-bold" : ""} text-on-surface`}>{n.title}</p>
                <p className="text-label-sm text-on-surface-variant">{n.detail}</p>
              </div>
              <span className="text-label-sm text-on-surface-variant shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
