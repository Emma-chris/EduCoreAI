"use client"

import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    schoolName: "",
    email: "",
    phone: "",
    password: "",
    fullName: "",
  })

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }))

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-margin-mobile py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-headline-md font-display font-black text-primary">EduCore AI</h1>
          <p className="text-on-surface-variant font-label-md mt-1">
            {step === 1 ? "Create your school account" : "Complete your profile"}
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold ${step >= 1 ? "bg-secondary text-on-secondary" : "bg-surface-container-high text-on-surface-variant"}`}>1</div>
          <div className="w-12 h-0.5 bg-outline-variant" />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold ${step >= 2 ? "bg-secondary text-on-secondary" : "bg-surface-container-high text-on-surface-variant"}`}>2</div>
        </div>

        {step === 1 ? (
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant space-y-stack-md">
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">School Name</label>
              <input
                value={form.schoolName}
                onChange={(e) => update("schoolName", e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                placeholder="Career Code Academy"
              />
            </div>
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Work Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                placeholder="admin@school.com"
              />
            </div>
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                placeholder="+234 800 000 0000"
              />
            </div>
            <button onClick={() => setStep(2)} className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Continue
            </button>
          </div>
        ) : (
          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant space-y-stack-md">
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Full Name</label>
              <input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                placeholder="Dr. Chidi Okoro"
              />
            </div>
            <div>
              <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Create Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                placeholder="Min. 8 characters"
              />
            </div>
            <button className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Create Account
            </button>
            <button onClick={() => setStep(1)} className="w-full text-body-md text-on-surface-variant hover:text-on-surface py-2">
              Back
            </button>
          </div>
        )}

        <p className="text-center text-body-md text-on-surface-variant mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-secondary font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
