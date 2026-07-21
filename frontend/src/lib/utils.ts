import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = "₦"): string {
  return `${currency}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  }).format(new Date(date))
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function calculateGrade(score: number, total = 100): { grade: string; remark: string } {
  const percentage = (score / total) * 100
  if (percentage >= 75) return { grade: "A", remark: "Excellent" }
  if (percentage >= 70) return { grade: "B+", remark: "Very Good" }
  if (percentage >= 65) return { grade: "B", remark: "Good" }
  if (percentage >= 60) return { grade: "C+", remark: "Credit" }
  if (percentage >= 55) return { grade: "C", remark: "Credit" }
  if (percentage >= 50) return { grade: "D", remark: "Pass" }
  return { grade: "F", remark: "Fail" }
}
