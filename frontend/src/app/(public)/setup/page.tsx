"use client"

import { useState } from "react"

export default function SchoolSetupPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-margin-mobile py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-headline-md font-display font-black text-primary">Set Up Your School</h1>
          <p className="text-on-surface-variant font-label-md mt-1">Complete your school profile to get started.</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold ${step >= s ? "bg-secondary text-on-secondary" : "bg-surface-container-high text-on-surface-variant"}`}>{s}</div>
              {s < 3 && <div className="w-12 h-0.5 bg-outline-variant" />}
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
          {step === 1 && (
            <div className="space-y-stack-md">
              <h3 className="font-headline-md text-headline-md text-primary">School Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "School Name", placeholder: "Career Code Academy" },
                  { label: "Email", placeholder: "info@school.com", type: "email" },
                  { label: "Phone", placeholder: "+233 30 000 0000", type: "tel" },
                  { label: "Address", placeholder: "12 Independence Ave, Accra" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">{f.label}</label>
                    <input type={f.type || "text"} placeholder={f.placeholder} className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none" />
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={() => setStep(2)} className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">Continue</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-stack-md">
              <h3 className="font-headline-md text-headline-md text-primary">Classes & Departments</h3>
              <p className="text-body-md text-on-surface-variant">Set up your class structure for the current session.</p>
              {["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"].map((cls) => (
                <label key={cls} className="flex items-center gap-3 py-2">
                  <input type="checkbox" defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary" />
                  <span className="text-body-md text-on-surface">{cls}</span>
                </label>
              ))}
              <div className="flex justify-between pt-4">
                <button onClick={() => setStep(1)} className="text-body-md text-on-surface-variant hover:text-on-surface">Back</button>
                <button onClick={() => setStep(3)} className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold hover:opacity-90">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-stack-md text-center">
              <span className="material-symbols-outlined text-[64px] text-secondary">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-primary">All Set!</h3>
              <p className="text-body-md text-on-surface-variant">Your school is ready. You can now start managing students, teachers, and more.</p>
              <button className="bg-secondary text-on-secondary px-8 py-3 rounded-xl font-bold hover:opacity-90 mt-4">Go to Dashboard</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
