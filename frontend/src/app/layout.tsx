import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EduCore AI | The AI Operating System for African Schools",
  description: "Streamline administration, empower teachers with AI-driven lesson planning, and provide data-backed insights for student success.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="font-body text-body-md antialiased">{children}</body>
    </html>
  )
}
