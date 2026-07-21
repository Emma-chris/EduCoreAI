"use client"

import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import type { UserRole } from "@/types"

interface AppShellProps {
  children: ReactNode
  role?: UserRole
  userName?: string
  userAvatar?: string
  userRoleLabel?: string
}

export function AppShell({
  children,
  role = "school_admin",
  userName = "Dr. Chidi Okoro",
  userAvatar,
  userRoleLabel = "School Owner",
}: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} userName={userName} userAvatar={userAvatar} userRole={userRoleLabel} />
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto bg-surface">
        {children}
      </main>
    </div>
  )
}
