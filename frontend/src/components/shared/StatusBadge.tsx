import { cn } from "@/lib/utils"

type StatusType = "paid" | "pending" | "overdue" | "partial" | "present" | "late" | "absent" | "active" | "archived"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

const statusStyles: Record<StatusType, string> = {
  paid: "bg-secondary-container text-on-secondary-container",
  pending: "bg-tertiary-fixed text-on-tertiary-fixed",
  overdue: "bg-error-container text-on-error-container",
  partial: "bg-surface-container-high text-on-surface-variant",
  present: "bg-secondary-container text-on-secondary-container",
  late: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  absent: "bg-error-container text-on-error-container",
  active: "bg-secondary-container text-secondary",
  archived: "bg-surface-container-high text-on-surface-variant",
}

const statusLabels: Record<StatusType, string> = {
  paid: "Paid",
  pending: "Pending",
  overdue: "Overdue",
  partial: "Partial",
  present: "Present",
  late: "Late",
  absent: "Absent",
  active: "Active",
  archived: "Archived",
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm font-label", statusStyles[status], className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {statusLabels[status]}
    </span>
  )
}
