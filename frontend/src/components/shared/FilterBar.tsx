"use client"

interface FilterOption {
  label: string
  value: string
}

interface FilterBarProps {
  filters: {
    key: string
    label: string
    options: FilterOption[]
    value: string
    onChange: (value: string) => void
  }[]
  onApply?: () => void
}

export function FilterBar({ filters, onApply }: FilterBarProps) {
  return (
    <div className="bg-surface-container-low p-stack-md rounded-2xl border border-outline-variant flex flex-wrap gap-4 items-end">
      {filters.map((filter) => (
        <div key={filter.key} className="flex-1 min-w-[180px]">
          <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">
            {filter.label}
          </label>
          <select
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2 px-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
          >
            {filter.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      {onApply && (
        <button
          onClick={onApply}
          className="self-end px-6 py-2.5 h-[42px] border border-outline text-on-surface rounded-lg font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Apply Filters
        </button>
      )}
    </div>
  )
}
