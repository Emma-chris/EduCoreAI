"use client"

import { useState } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { AICard } from "@/components/shared/AICard"

export default function AIReportCommentPage() {
  const [average, setAverage] = useState("")
  const [behavior, setBehavior] = useState("")
  const [comment, setComment] = useState("")
  const [generating, setGenerating] = useState(false)

  const handleGenerate = async () => {
    setGenerating(true)
    // TODO: call backend AI endpoint
    setTimeout(() => {
      setComment(
        `Kofi has demonstrated a solid performance this term with an average score of ${average}%. ${behavior === "Excellent" ? "His conduct in class has been exemplary — he is attentive, participates actively, and shows great leadership potential." : behavior === "Good" ? "His behavior has been satisfactory. He follows instructions and completes assignments on time." : "He is encouraged to improve his focus and classroom conduct to match his academic potential."} He should continue to work hard and seek help when needed. Keep it up!`
      )
      setGenerating(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar title="AI Report Comment" />
      <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
        <div>
          <h2 className="text-headline-lg font-display text-primary">AI Report Comment Generator</h2>
          <p className="text-body-md text-on-surface-variant">Generate personalized report comments in seconds.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <AICard badge="AI Powered">
            <div className="space-y-stack-md">
              <div>
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Student</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none">
                  <option>Kofi Owusu</option>
                  <option>Amara Okafor</option>
                  <option>Chidi Nwosu</option>
                </select>
              </div>
              <div>
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Average Score (%)</label>
                <input
                  type="number"
                  value={average}
                  onChange={(e) => setAverage(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="e.g., 72"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-label-sm text-on-surface-variant mb-1 ml-1">Behavior Rating</label>
                <select
                  value={behavior}
                  onChange={(e) => setBehavior(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-lg text-body-md py-2.5 px-3 focus:ring-2 focus:ring-secondary outline-none"
                >
                  <option value="">Select...</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Needs Improvement">Needs Improvement</option>
                </select>
              </div>
              <button
                onClick={handleGenerate}
                disabled={!average || !behavior || generating}
                className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Generating...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Generate Comment
                  </>
                )}
              </button>
            </div>
          </AICard>

          <div className="bg-surface-container-lowest p-stack-lg rounded-2xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Generated Comment</h3>
            {comment ? (
              <div className="space-y-4">
                <div className="bg-surface-container-low p-4 rounded-xl min-h-[200px]">
                  <p className="text-body-md text-on-surface leading-relaxed">{comment}</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-xl font-bold hover:opacity-90">
                    <span className="material-symbols-outlined">save</span>
                    Save to Report
                  </button>
                  <button className="flex items-center gap-2 border border-outline-variant text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-surface-container">
                    <span className="material-symbols-outlined">content_copy</span>
                    Copy
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[200px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] mb-3">auto_awesome</span>
                <p className="text-body-md">Fill in the details and generate a comment</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
