"use client"

import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate with backend API
    console.log("Login", { email, password })
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-margin-mobile py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-headline-md font-display font-black text-primary">EduCore AI</h1>
          <p className="text-on-surface-variant font-label-md mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant space-y-stack-md">
          <div>
            <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
              placeholder="admin@school.com"
              required
            />
          </div>
          <div>
            <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-body-md text-on-surface-variant">
              <input type="checkbox" className="rounded border-outline-variant text-secondary focus:ring-secondary" />
              Remember me
            </label>
            <a href="#" className="text-label-sm text-secondary hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 transition-all active:scale-[0.98]">
            Sign In
          </button>
          <p className="text-center text-body-md text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-secondary font-bold hover:underline">Get Started</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
