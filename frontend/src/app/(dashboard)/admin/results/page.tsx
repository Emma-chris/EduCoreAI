"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { DataTable, type Column } from "@/components/shared/DataTable"
import { FilterBar } from "@/components/shared/FilterBar"
import { calculateGrade } from "@/lib/utils"

interface ResultRow {
  id: string
  studentName: string
  admissionNo: string
  subject: string
  score: number
  total: number
  grade: string
  remark: string
}

const mockResults: ResultRow[] = [
  { id: "1", studentName: "Kofi Owusu", admissionNo: "CCA-2024-001", subject: "Mathematics", score: 85, total: 100, grade: "A", remark: "Excellent" },
  { id: "2", studentName: "Amara Okafor", admissionNo: "CCA-2024-002", subject: "Mathematics", score: 72, total: 100, grade: "B+", remark: "Very Good" },
  { id: "3", studentName: "Chidi Nwosu", admissionNo: "CCA-2024-003", subject: "Mathematics", score: 58, total: 100, grade: "C", remark: "Credit" },
  { id: "4", studentName: "Fatima Bello", admissionNo: "CCA-2024-004", subject: "Mathematics", score: 91, total: 100, grade: "A", remark: "Excellent" },
  { id: "5", studentName: "Emeka Obi", admissionNo: "CCA-2023-012", subject: "Mathematics", score: 45, total: 100, grade: "F", remark: "Fail" },
]

export default function ResultsPage() {
  const [classFilter, setClassFilter] = useState("JSS 1-A")
  const [termFilter, setTermFilter] = useState("First Term")
  const [subjectFilter, setSubjectFilter] = useState("Mathematics")

  const columns: Column<ResultRow>[] = [
    {
      key: "studentName",
      label: "Student",
      sortable: true,
      render: (r) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
            {r.studentName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <span className="font-medium">{r.studentName}</span>
            <p className="text-label-sm text-on-surface-variant">{r.admissionNo}</p>
          </div>
        </div>
      ),
    },
    { key: "subject", label: "Subject", sortable: true },
    {
      key: "score",
      label: "Score",
      sortable: true,
      render: (r) => (
        <span className={`font-bold ${r.score >= 75 ? "text-secondary" : r.score >= 50 ? "text-on-tertiary-container" : "text-error"}`}>
          {r.score}/{r.total}
        </span>
      ),
    },
    {
      key: "grade",
      label: "Grade",
      render: (r) => (
        <span className={`font-bold ${r.grade === "A" ? "text-secondary" : r.grade === "F" ? "text-error" : "text-on-surface"}`}>
          {r.grade}
        </span>
      ),
    },
    { key: "remark", label: "Remark" },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="flex gap-2">
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">edit</span></button>
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">description</span></button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Results" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg font-display text-primary">Student Results Management</h2>
            <p className="text-body-md text-on-surface-variant">Enter, manage, and analyze student performance for the current term.</p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            Generate All Reports
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div>
              <p className="text-label-md text-on-surface-variant">Average Class Score</p>
              <h3 className="text-headline-md font-bold text-secondary">74.5%</h3>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-label-md text-on-surface-variant">Pass Rate</p>
              <h3 className="text-headline-md font-bold text-on-tertiary-container">88%</h3>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-stack-md rounded-2xl border border-outline-variant flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">stars</span>
            </div>
            <div>
              <p className="text-label-md text-on-surface-variant">Top Performer</p>
              <h3 className="text-headline-md font-bold text-primary">Fatima Bello</h3>
            </div>
          </div>
        </div>

        <FilterBar
          filters={[
            { key: "class", label: "Select Class", options: [{ label: "JSS 1-A", value: "JSS 1-A" }, { label: "JSS 1-B", value: "JSS 1-B" }, { label: "JSS 2-A", value: "JSS 2-A" }], value: classFilter, onChange: setClassFilter },
            { key: "term", label: "Select Term", options: [{ label: "First Term", value: "First Term" }, { label: "Second Term", value: "Second Term" }, { label: "Third Term", value: "Third Term" }], value: termFilter, onChange: setTermFilter },
            { key: "subject", label: "Select Subject", options: [{ label: "Mathematics", value: "Mathematics" }, { label: "English", value: "English" }, { label: "Science", value: "Science" }], value: subjectFilter, onChange: setSubjectFilter },
          ]}
        />

        <DataTable
          columns={columns}
          data={mockResults}
          searchPlaceholder="Search student or admission #..."
        />
      </div>
    </div>
  )
}
