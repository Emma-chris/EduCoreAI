export type UserRole = "super_admin" | "school_admin" | "teacher" | "student" | "parent"

export interface User {
  id: string
  schoolId: string
  role: UserRole
  email: string
  name: string
  avatar?: string
}

export interface School {
  id: string
  name: string
  logo?: string
  address?: string
  phone?: string
  email?: string
  session?: string
  term?: string
}

export interface Student {
  id: string
  schoolId: string
  admissionNo: string
  name: string
  passport?: string
  dob?: string
  gender?: string
  classId?: string
  className?: string
  parentName?: string
  parentPhone?: string
  parentEmail?: string
  address?: string
  medicalNotes?: string
  status: string
}

export interface Teacher {
  id: string
  schoolId: string
  name: string
  department?: string
  subjects: string[]
  qualifications?: string
  phone?: string
  email?: string
}

export interface Class {
  id: string
  schoolId: string
  name: string
  department?: string
}

export interface AttendanceRecord {
  id: string
  classId: string
  date: string
  records: { studentId: string; status: "present" | "late" | "absent" }[]
}

export interface Result {
  id: string
  studentId: string
  classId: string
  subject: string
  term: string
  session: string
  score: number
  total: number
  grade?: string
  remark?: string
}

export interface Fee {
  id: string
  schoolId: string
  name: string
  amount: number
  dueDate: string
}

export interface Payment {
  id: string
  feeId: string
  studentId: string
  amount: number
  status: "paid" | "pending" | "overdue" | "partial"
  receiptUrl?: string
}

export interface LessonPlan {
  id: string
  teacherId: string
  classId: string
  subject: string
  week: string
  prompt: string
  aiResponse: {
    objectives: string[]
    materials: string[]
    activities: string[]
    assessment: string
  }
}
