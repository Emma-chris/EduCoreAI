"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatCard } from "@/components/shared/StatCard"
import { DataTable, type Column } from "@/components/shared/DataTable"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { formatCurrency } from "@/lib/utils"

interface PaymentRow {
  id: string
  studentName: string
  admissionNo: string
  feeType: string
  amount: number
  status: "paid" | "pending" | "overdue" | "partial"
  dueDate: string
}

const mockPayments: PaymentRow[] = [
  { id: "1", studentName: "Kofi Owusu", admissionNo: "CCA-2024-001", feeType: "Tuition Fee", amount: 150000, status: "paid", dueDate: "15 Jan 2025" },
  { id: "2", studentName: "Amara Okafor", admissionNo: "CCA-2024-002", feeType: "Tuition Fee", amount: 150000, status: "pending", dueDate: "15 Jan 2025" },
  { id: "3", studentName: "Chidi Nwosu", admissionNo: "CCA-2024-003", feeType: "Tuition Fee", amount: 150000, status: "overdue", dueDate: "15 Jan 2025" },
  { id: "4", studentName: "Fatima Bello", admissionNo: "CCA-2024-004", feeType: "Development Levy", amount: 50000, status: "partial", dueDate: "30 Jan 2025" },
  { id: "5", studentName: "Emeka Obi", admissionNo: "CCA-2023-012", feeType: "Tuition Fee", amount: 150000, status: "paid", dueDate: "15 Jan 2025" },
]

export default function FeesPage() {
  const totalCollected = mockPayments.filter((p) => p.status === "paid").reduce((s, p) => s + p.amount, 0)
  const totalOutstanding = mockPayments.filter((p) => p.status !== "paid").reduce((s, p) => s + p.amount, 0)

  const columns: Column<PaymentRow>[] = [
    {
      key: "studentName",
      label: "Student",
      sortable: true,
      render: (p) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
            {p.studentName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <span className="font-medium">{p.studentName}</span>
            <p className="text-label-sm text-on-surface-variant">{p.admissionNo}</p>
          </div>
        </div>
      ),
    },
    { key: "feeType", label: "Fee Type", sortable: true },
    {
      key: "amount",
      label: "Amount",
      sortable: true,
      render: (p) => <span className="font-bold">{formatCurrency(p.amount)}</span>,
    },
    {
      key: "status",
      label: "Status",
      render: (p) => <StatusBadge status={p.status} />,
    },
    { key: "dueDate", label: "Due Date", sortable: true },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="flex gap-2">
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">receipt</span></button>
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Finance" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Fee Management</h2>
            <p className="text-body-md text-on-surface-variant">Track fee collections, outstanding balances, and payment history.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined">receipt_long</span>
              Create Fee
            </button>
            <button className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all">
              <span className="material-symbols-outlined">download</span>
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <StatCard icon="payments" label="Total Collected" value={formatCurrency(totalCollected)} iconBg="bg-secondary-container" />
          <StatCard icon="warning" label="Outstanding" value={formatCurrency(totalOutstanding)} iconBg="bg-error-container" />
          <StatCard icon="trending_up" label="Collection Rate" value="72%" iconBg="bg-tertiary-fixed" />
          <StatCard icon="group" label="Students with Balance" value="3" iconBg="bg-surface-container-high" />
        </div>

        <DataTable columns={columns} data={mockPayments} searchPlaceholder="Search by student name or admission..." />
      </div>
    </div>
  )
}
