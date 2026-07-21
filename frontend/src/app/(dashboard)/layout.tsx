import { AppShell } from "@/components/layout/AppShell"
import type { UserRole } from "@/types"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="school_admin" userName="Dr. Chidi Okoro" userRoleLabel="School Owner">
      {children}
    </AppShell>
  )
}
