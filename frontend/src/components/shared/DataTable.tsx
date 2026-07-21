"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export interface Column<T> {
  key: string
  label: string
  render?: (item: T) => React.ReactNode
  sortable?: boolean
  className?: string
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  keyField?: string
  onRowClick?: (item: T) => void
  searchable?: boolean
  searchPlaceholder?: string
  className?: string
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyField = "id",
  onRowClick,
  searchable = true,
  searchPlaceholder = "Search...",
  className,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("")
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const filtered = data.filter((item) =>
    search
      ? Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      : true
  )

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0
    const aVal = String(a[sortKey] ?? "")
    const bVal = String(b[sortKey] ?? "")
    return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
  })

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortDir("asc")
    }
  }

  return (
    <div className={cn("bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden", className)}>
      {searchable && (
        <div className="p-4 border-b border-outline-variant">
          <div className="relative max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-label-md focus:ring-2 focus:ring-secondary placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
      )}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-outline-variant">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "text-left px-4 py-3 text-label-sm font-label text-on-surface-variant uppercase tracking-wider",
                    col.sortable && "cursor-pointer select-none hover:text-on-surface",
                    col.className
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && sortKey === col.key && (
                      <span className="material-symbols-outlined text-[16px]">
                        {sortDir === "asc" ? "arrow_upward" : "arrow_downward"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-12 text-on-surface-variant">
                  No results found
                </td>
              </tr>
            ) : (
              sorted.map((item, idx) => (
                <tr
                  key={String(item[keyField] ?? idx)}
                  className={cn(
                    "border-b border-outline-variant/50 transition-colors",
                    onRowClick && "cursor-pointer hover:bg-surface-container-low"
                  )}
                  onClick={() => onRowClick?.(item)}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={cn("px-4 py-3 text-body-md", col.className)}>
                      {col.render ? col.render(item) : String(item[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
