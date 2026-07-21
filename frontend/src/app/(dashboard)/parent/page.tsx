"use client"

import { Topbar } from "@/components/layout/Topbar"
import { StatCard } from "@/components/shared/StatCard"
import Link from "next/link"

export default function ParentDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="Parent Portal" showSearch={false} />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">Welcome, Mr. Owusu</h2>
          <p className="text-body-md text-on-surface-variant">Here is an overview of Kofi&apos;s performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <StatCard icon="analytics" label="Average Score" value="78.5%" iconBg="bg-secondary-container" />
          <StatCard icon="calendar_month" label="Attendance" value="96%" iconBg="bg-tertiary-fixed" />
          <StatCard icon="payments" label="Fee Balance" value="₦25,000" iconBg="bg-error-container" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <Link href="/parent/results/1" className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all block">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Academic Report</h3>
                <p className="text-body-md text-on-surface-variant">View term results and performance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold">
              <span>View Report</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>

          <Link href="/parent/attendance" className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all block">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Attendance Record</h3>
                <p className="text-body-md text-on-surface-variant">Track daily attendance and punctuality</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold">
              <span>View Attendance</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>

        <Link href="/parent/fees" className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant hover:border-secondary transition-all block">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md text-primary">Fee Payment</h3>
              <p className="text-body-md text-on-surface-variant">Outstanding balance: ₦25,000</p>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold">
              <span>Pay Now</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
