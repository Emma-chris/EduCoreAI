"use client"

import { useParams } from "next/navigation"
import { Topbar } from "@/components/layout/Topbar"
import { StatCard } from "@/components/shared/StatCard"

const student = {
  id: "1",
  name: "Kofi Owusu",
  admissionNo: "CCA-2024-001",
  class: "JSS 1-A",
  gender: "Male",
  dob: "12 March 2012",
  parent: "Mr. Kwame Owusu",
  parentPhone: "+233 50 000 0000",
  parentEmail: "kwame.owusu@email.com",
  address: "12 Independence Ave, Accra",
  medicalNotes: "Asthma — inhaler in office",
  status: "active",
  avatar: null,
}

export default function StudentProfilePage() {
  const params = useParams()

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Students" subtitle={student.name} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        {/* Profile Header */}
        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant flex flex-col md:flex-row gap-stack-lg items-start">
          <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center shrink-0">
            <span className="text-headline-md font-bold text-on-primary-container">
              {student.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-headline-md font-display text-primary">{student.name}</h2>
              <span className="bg-secondary-container text-on-secondary-container text-label-sm font-label px-2.5 py-0.5 rounded-full">Active</span>
            </div>
            <p className="text-body-md text-on-surface-variant">Admission No: {student.admissionNo} · {student.class}</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-bold text-label-sm hover:opacity-90 transition-all">Edit Profile</button>
            <button className="px-5 py-2.5 border border-outline-variant text-on-surface rounded-xl font-bold text-label-sm hover:bg-surface-container transition-all">Archive</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <StatCard icon="analytics" label="Average Score" value="78.5%" iconBg="bg-secondary-container" />
          <StatCard icon="calendar_month" label="Attendance" value="96%" iconBg="bg-tertiary-fixed" />
          <StatCard icon="payments" label="Fee Balance" value="₦25,000" iconBg="bg-error-container" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Personal Information</h3>
            <dl className="space-y-3">
              {[
                ["Full Name", student.name],
                ["Date of Birth", student.dob],
                ["Gender", student.gender],
                ["Address", student.address],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <dt className="text-label-sm text-on-surface-variant">{label}</dt>
                  <dd className="text-body-md text-on-surface text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Parent / Guardian</h3>
            <dl className="space-y-3">
              {[
                ["Name", student.parent],
                ["Phone", student.parentPhone],
                ["Email", student.parentEmail],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <dt className="text-label-sm text-on-surface-variant">{label}</dt>
                  <dd className="text-body-md text-on-surface text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Medical Notes */}
        {student.medicalNotes && (
          <div className="bg-error-container/30 p-stack-md rounded-2xl border border-error-container">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-error">medical_services</span>
              <div>
                <p className="font-bold text-on-surface">Medical Notes</p>
                <p className="text-body-md text-on-surface-variant">{student.medicalNotes}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
