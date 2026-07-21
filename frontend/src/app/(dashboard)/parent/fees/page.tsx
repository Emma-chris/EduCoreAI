"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { formatCurrency } from "@/lib/utils"

const payments = [
  { fee: "Tuition Fee (First Term)", amount: 150000, status: "paid" as const, date: "10 Jan 2025", receipt: "#RCT-001" },
  { fee: "Development Levy", amount: 50000, status: "partial" as const, date: "15 Jan 2025", receipt: "#RCT-002" },
  { fee: "Sports Fee", amount: 15000, status: "pending" as const, date: "30 Jan 2025", receipt: "-" },
  { fee: "ICT Lab Fee", amount: 20000, status: "overdue" as const, date: "01 Feb 2025", receipt: "-" },
]

export default function ParentFeesPage() {
  const totalPaid = payments.filter((p) => p.status === "paid").reduce((s, p) => s + p.amount, 0)
  const totalPending = payments.filter((p) => p.status !== "paid").reduce((s, p) => s + p.amount, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Fees" subtitle="Kofi Owusu" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="text-label-sm text-on-surface-variant">Total Paid</p>
              <h3 className="text-headline-md font-bold text-secondary">{formatCurrency(totalPaid)}</h3>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-error-container flex items-center justify-center text-on-error-container">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <p className="text-label-sm text-on-surface-variant">Outstanding</p>
              <h3 className="text-headline-md font-bold text-error">{formatCurrency(totalPending)}</h3>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined">receipt</span>
            </div>
            <div>
              <p className="text-label-sm text-on-surface-variant">Receipts</p>
              <h3 className="text-headline-md font-bold text-primary">{payments.filter((p) => p.receipt !== "-").length}</h3>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-primary">Payment History</h3>
            <button className="bg-secondary text-on-secondary px-5 py-2.5 rounded-xl font-bold hover:opacity-90 flex items-center gap-2">
              <span className="material-symbols-outlined">payments</span>
              Pay Now
            </button>
          </div>
          <div className="divide-y divide-outline-variant/50">
            {payments.map((p, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors">
                <div className="flex-1">
                  <p className="text-body-md font-medium text-on-surface">{p.fee}</p>
                  <p className="text-label-sm text-on-surface-variant">Due: {p.date} · Receipt: {p.receipt}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bold text-body-md">{formatCurrency(p.amount)}</span>
                  <StatusBadge status={p.status} />
                  {p.receipt !== "-" && (
                    <button className="p-1.5 text-on-surface-variant hover:text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
