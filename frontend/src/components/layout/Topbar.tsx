"use client"

import { cn } from "@/lib/utils"

interface TopbarProps {
  title: string
  subtitle?: string
  showSearch?: boolean
  className?: string
}

export function Topbar({ title, subtitle, showSearch = true, className }: TopbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 w-full z-40 flex justify-between items-center px-margin-desktop h-16 bg-surface border-b border-outline-variant",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-on-surface-variant text-label-md font-label">Dashboard</span>
        <span className="text-outline-variant">/</span>
        <span className="text-on-surface text-label-md font-bold">{title}</span>
        {subtitle && (
          <>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface-variant text-label-md">{subtitle}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-6">
        {showSearch && (
          <div className="relative flex items-center hidden md:block">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-label-md focus:ring-2 focus:ring-secondary w-64 placeholder:text-on-surface-variant/50"
              placeholder="Search..."
              type="text"
            />
          </div>
        )}
        <div className="flex gap-3">
          <button className="relative p-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="relative p-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </div>
    </header>
  )
}
