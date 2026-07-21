"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { DataTable, type Column } from "@/components/shared/DataTable"
import { FilterBar } from "@/components/shared/FilterBar"
import { StatusBadge } from "@/components/shared/StatusBadge"
import type { Student } from "@/types"

const mockStudents: Student[] = [
  { id: "1", schoolId: "1", admissionNo: "CCA-2024-001", name: "Kofi Owusu", gender: "M", className: "JSS 1-A", parentName: "Mr. Owusu", status: "active" },
  { id: "2", schoolId: "1", admissionNo: "CCA-2024-002", name: "Amara Okafor", gender: "F", className: "JSS 1-A", parentName: "Dr. Okafor", status: "active" },
  { id: "3", schoolId: "1", admissionNo: "CCA-2024-003", name: "Chidi Nwosu", gender: "M", className: "JSS 2-B", parentName: "Mrs. Nwosu", status: "active" },
  { id: "4", schoolId: "1", admissionNo: "CCA-2024-004", name: "Fatima Bello", gender: "F", className: "SSS 1-A", parentName: "Alh. Bello", status: "active" },
  { id: "5", schoolId: "1", admissionNo: "CCA-2023-012", name: "Emeka Obi", gender: "M", className: "SSS 2-A", parentName: "Chief Obi", status: "archived" },
]

export default function StudentsPage() {
  const [classFilter, setClassFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = mockStudents.filter((s) => {
    if (classFilter !== "all" && s.className !== classFilter) return false
    if (statusFilter !== "all" && s.status !== statusFilter) return false
    return true
  })

  const columns: Column<Student>[] = [
    { key: "admissionNo", label: "Admission No", sortable: true },
    {
      key: "name",
      label: "Student Name",
      sortable: true,
      render: (s) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
            {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <span className="font-medium">{s.name}</span>
        </div>
      ),
    },
    { key: "className", label: "Class", sortable: true },
    { key: "gender", label: "Gender" },
    { key: "parentName", label: "Parent/Guardian" },
    {
      key: "status",
      label: "Status",
      render: (s) => <StatusBadge status={s.status as "active" | "archived"} />,
    },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="flex gap-2">
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
          <button className="p-1.5 text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">archive</span></button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Students" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Student Management</h2>
            <p className="text-body-md text-on-surface-variant">View and manage all students across your school.</p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            Add Student
          </button>
        </div>

        <FilterBar
          filters={[
            {
              key: "class",
              label: "Class",
              options: [
                { label: "All Classes", value: "all" },
                { label: "JSS 1-A", value: "JSS 1-A" },
                { label: "JSS 2-B", value: "JSS 2-B" },
                { label: "SSS 1-A", value: "SSS 1-A" },
                { label: "SSS 2-A", value: "SSS 2-A" },
              ],
              value: classFilter,
              onChange: setClassFilter,
            },
            {
              key: "status",
              label: "Status",
              options: [
                { label: "All Status", value: "all" },
                { label: "Active", value: "active" },
                { label: "Archived", value: "archived" },
              ],
              value: statusFilter,
              onChange: setStatusFilter,
            },
          ]}
        />

        <DataTable
          columns={columns}
          data={filtered}
          onRowClick={(s) => window.location.href = `/admin/students/${s.id}`}
          searchPlaceholder="Search by name or admission number..."
        />
      </div>
    </div>
  )
}
