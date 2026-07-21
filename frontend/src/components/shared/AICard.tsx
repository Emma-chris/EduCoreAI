import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AICardProps {
  children: ReactNode
  className?: string
  badge?: string
}

export function AICard({ children, className, badge = "AI Powered" }: AICardProps) {
  return (
    <div className={cn("ai-gradient-border rounded-2xl", className)}>
      {badge && (
        <div className="flex items-center gap-1 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label absolute -top-2.5 right-4 z-10">
          <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
          {badge}
        </div>
      )}
      <div className="p-stack-lg ai-gradient-content rounded-2xl">
        {children}
      </div>
    </div>
  )
}
