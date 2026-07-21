"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { UserRole } from "@/types"

interface NavItem {
  label: string
  icon: string
  href: string
  roles: UserRole[]
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: "dashboard", href: "/admin", roles: ["super_admin", "school_admin"] },
  { label: "Students", icon: "group", href: "/admin/students", roles: ["super_admin", "school_admin"] },
  { label: "Teachers", icon: "school", href: "/admin/teachers", roles: ["super_admin", "school_admin"] },
  { label: "Attendance", icon: "calendar_month", href: "/admin/attendance", roles: ["super_admin", "school_admin"] },
  { label: "Results", icon: "analytics", href: "/admin/results", roles: ["super_admin", "school_admin"] },
  { label: "Finance", icon: "payments", href: "/admin/fees", roles: ["super_admin", "school_admin"] },
  { label: "AI Lesson Planner", icon: "psychology", href: "/admin/ai/lesson-planner", roles: ["super_admin", "school_admin"] },
  { label: "AI Report Comment", icon: "auto_awesome", href: "/admin/ai/report-comment", roles: ["super_admin", "school_admin"] },
  { label: "Settings", icon: "settings", href: "/admin/settings", roles: ["super_admin", "school_admin"] },
]

const teacherNav: NavItem[] = [
  { label: "Dashboard", icon: "dashboard", href: "/teacher", roles: ["teacher"] },
  { label: "Attendance", icon: "calendar_month", href: "/teacher/attendance", roles: ["teacher"] },
  { label: "Results", icon: "analytics", href: "/teacher/results", roles: ["teacher"] },
  { label: "AI Lesson Planner", icon: "psychology", href: "/teacher/ai/lesson-planner", roles: ["teacher"] },
]

const parentNav: NavItem[] = [
  { label: "Dashboard", icon: "dashboard", href: "/parent", roles: ["parent"] },
  { label: "Results", icon: "analytics", href: "/parent/results", roles: ["parent"] },
  { label: "Attendance", icon: "calendar_month", href: "/parent/attendance", roles: ["parent"] },
  { label: "Fees", icon: "payments", href: "/parent/fees", roles: ["parent"] },
]

interface SidebarProps {
  role: UserRole
  userName?: string
  userAvatar?: string
  userRole?: string
}

export function Sidebar({ role, userName = "Admin", userAvatar, userRole = "Admin" }: SidebarProps) {
  const pathname = usePathname()

  const items =
    role === "teacher" ? teacherNav : role === "parent" ? parentNav : navItems

  return (
    <aside className="flex flex-col h-screen p-stack-md fixed left-0 top-0 w-64 bg-surface-container-low border-r border-outline-variant z-50 hidden md:flex">
      <div className="mb-stack-lg px-2">
        <Link href={role === "teacher" ? "/teacher" : role === "parent" ? "/parent" : "/admin"}>
          <h1 className="text-headline-md font-display font-black text-primary tracking-tight">EduCore AI</h1>
        </Link>
        <p className="text-label-sm font-label text-on-surface-variant uppercase tracking-widest opacity-70">
          {role === "teacher" ? "Teacher Terminal" : role === "parent" ? "Parent Portal" : "Admin Terminal"}
        </p>
      </div>

      <nav className="flex-1 space-y-1 custom-scrollbar overflow-y-auto">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-label-md text-label-md",
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-stack-md border-t border-outline-variant">
        <button className="w-full mb-stack-md py-3 px-4 bg-secondary text-on-secondary rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
          <span className="material-symbols-outlined">add_circle</span>
          Generate Plan
        </button>
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
            ) : (
              <span className="material-symbols-outlined text-on-surface-variant">person</span>
            )}
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-sm truncate text-on-surface">{userName}</p>
            <p className="text-xs text-on-surface-variant truncate">{userRole}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
