"use client"

import { Topbar } from "@/components/layout/Topbar"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Settings" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">School Settings</h2>
          <p className="text-body-md text-on-surface-variant">Manage your school profile and preferences.</p>
        </div>

        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant space-y-stack-md">
          <h3 className="font-headline-md text-headline-md text-primary">School Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "School Name", value: "Career Code Academy" },
              { label: "Email", value: "info@careercode.edu" },
              { label: "Phone", value: "+233 30 000 0000" },
              { label: "Address", value: "12 Independence Ave, Accra" },
              { label: "Current Session", value: "2023/2024" },
              { label: "Current Term", value: "First Term" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">{field.label}</label>
                <input
                  defaultValue={field.value}
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">Save Changes</button>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant space-y-stack-md">
          <h3 className="font-headline-md text-headline-md text-primary">Session Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Academic Year</label>
              <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                <option>2023/2024</option>
                <option>2024/2025</option>
                <option>2025/2026</option>
              </select>
            </div>
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Term</label>
              <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                <option>First Term</option>
                <option>Second Term</option>
                <option>Third Term</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold hover:opacity-90 w-full">Activate Term</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
