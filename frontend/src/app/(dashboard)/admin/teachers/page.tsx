"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { DataTable, type Column } from "@/components/shared/DataTable"
import { FilterBar } from "@/components/shared/FilterBar"
import type { Teacher } from "@/types"

const mockTeachers: Teacher[] = [
  { id: "1", schoolId: "1", name: "Dr. Sarah Mensah", department: "Science", subjects: ["Mathematics", "Physics"], qualifications: "PhD Physics", phone: "+233 20 000 0001", email: "sarah.mensah@school.com" },
  { id: "2", schoolId: "1", name: "Mr. John Asante", department: "Arts", subjects: ["English", "Literature"], qualifications: "MA English", phone: "+233 20 000 0002", email: "john.asante@school.com" },
  { id: "3", schoolId: "1", name: "Mrs. Grace Osei", department: "Science", subjects: ["Biology", "Chemistry"], qualifications: "MSc Biology", phone: "+233 20 000 0003", email: "grace.osei@school.com" },
  { id: "4", schoolId: "1", name: "Mr. Kwame Addo", department: "Vocational", subjects: ["ICT", "Robotics"], qualifications: "BSc Computer Science", phone: "+233 20 000 0004", email: "kwame.addo@school.com" },
]

export default function TeachersPage() {
  const [deptFilter, setDeptFilter] = useState("all")

  const filtered = mockTeachers.filter((t) => deptFilter === "all" || t.department === deptFilter)

  const columns: Column<Teacher>[] = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (t) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
            {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <span className="font-medium">{t.name}</span>
            <p className="text-label-sm text-on-surface-variant">{t.email}</p>
          </div>
        </div>
      ),
    },
    { key: "department", label: "Department", sortable: true },
    {
      key: "subjects",
      label: "Subjects",
      render: (t) => t.subjects.join(", "),
    },
    { key: "qualifications", label: "Qualifications" },
    { key: "phone", label: "Phone" },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="flex gap-2">
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">edit</span></button>
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">schedule</span></button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Teachers" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Teacher Management</h2>
            <p className="text-body-md text-on-surface-variant">Manage teaching staff, departments, and assignments.</p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            Add Teacher
          </button>
        </div>

        <FilterBar
          filters={[{
            key: "dept",
            label: "Department",
            options: [
              { label: "All Departments", value: "all" },
              { label: "Science", value: "Science" },
              { label: "Arts", value: "Arts" },
              { label: "Vocational", value: "Vocational" },
            ],
            value: deptFilter,
            onChange: setDeptFilter,
          }]}
        />

        <DataTable columns={columns} data={filtered} searchPlaceholder="Search teachers..." />
      </div>
    </div>
  )
}
