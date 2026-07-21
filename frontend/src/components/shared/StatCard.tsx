import { cn } from "@/lib/utils"

interface StatCardProps {
  icon: string
  label: string
  value: string
  trend?: string
  trendUp?: boolean
  iconBg?: string
  iconColor?: string
  className?: string
}

export function StatCard({ icon, label, value, trend, trendUp = true, iconBg, className }: StatCardProps) {
  return (
    <div className={cn("bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4", className)}>
      <div className={cn("h-12 w-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container", iconBg)}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-label-md text-on-surface-variant">{label}</p>
        <div className="flex items-center gap-2">
          <h3 className="text-headline-md font-bold text-on-surface">{value}</h3>
          {trend && (
            <span className={cn("text-label-sm flex items-center gap-0.5", trendUp ? "text-secondary" : "text-error")}>
              <span className="material-symbols-outlined text-[16px]">
                {trendUp ? "trending_up" : "trending_down"}
              </span>
              {trend}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
