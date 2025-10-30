"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Answer {
  id: string
  label: string
  text: string
}

export default function PracticePage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const answers: Answer[] = [
    { id: "A", label: "A", text: "Cancel the plan to have lunch together." },
    { id: "B", label: "B", text: "Ask where the friend typically likes to eat." },
    { id: "C", label: "C", text: "State a preference about where to eat." },
    { id: "D", label: "D", text: "Change the subject to talk about something else." },
  ]

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId)
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              SAT Math AI
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm text-neutral-600 hover:text-neutral-900">
                Dashboard
              </Link>
              <Link href="/chat" className="text-sm text-neutral-600 hover:text-neutral-900">
                AI Tutor
              </Link>
              <Link href="/progress" className="text-sm text-neutral-600 hover:text-neutral-900">
                Progress
              </Link>
              <Button
                variant="outline"
                className="rounded-full border-neutral-300 text-sm hover:bg-neutral-50"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8">
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="outline" className="border-neutral-300 text-neutral-700">
                English
              </Badge>
              <Badge variant="outline" className="border-neutral-300 text-neutral-700">
                Easy
              </Badge>
              <Badge variant="outline" className="border-neutral-300 text-neutral-700">
                Score Band: 3
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="font-medium">Question ID:</span>
                <Link href="#" className="text-blue-600 hover:underline">
                  eb89dcc8
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>00:22</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="border-neutral-300">
            Mark for Review
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-sm font-medium text-neutral-900">Text 1</h2>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                <span className="underline decoration-neutral-400 decoration-2 underline-offset-4">
                  Imagine you and your friend are trying to decide where to eat lunch.
                </span>{" "}
                When people try to make joint decisions like this, they often don't reveal their true preferences. Instead, they say they would be happy with all options because they think this response will help them appear more easygoing and likable to the other person.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-sm font-medium text-neutral-900">Text 2</h2>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Research shows that people who don't state their preferences when making a decision with others aren't more likable in the eyes of others. In fact, stating that you have no preference actually makes the decision more difficult for other people. It can also cause them to feel less happy with their ultimate decision and with you.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h2 className="mb-6 text-[15px] font-medium leading-relaxed text-neutral-900">
                Based on the texts, what response would the author of Text 2 most likely suggest for someone in the situation described in the underlined sentence in Text 1?
              </h2>

              <div className="space-y-3">
                {answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswerSelect(answer.id)}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                      selectedAnswer === answer.id
                        ? "border-neutral-900 bg-neutral-50"
                        : "border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium ${
                          selectedAnswer === answer.id
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-400 text-neutral-700"
                        }`}
                      >
                        {answer.label}
                      </div>
                      <p className="pt-0.5 text-[15px] leading-relaxed text-neutral-900">
                        {answer.text}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={handleShowExplanation}
                  disabled={!selectedAnswer}
                  className="flex-1 rounded-lg bg-pink-600 py-6 text-base hover:bg-pink-700 disabled:opacity-50"
                >
                  Check Answer
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-neutral-300 px-6 py-6"
                >
                  Skip
                </Button>
              </div>
            </div>

            {showExplanation && (
              <div className="rounded-lg border border-pink-200 bg-pink-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white">
                    Explanation
                  </div>
                  {selectedAnswer === "C" ? (
                    <span className="text-sm font-medium text-green-700">Correct!</span>
                  ) : (
                    <span className="text-sm font-medium text-red-700">
                      Incorrect. The correct answer is C.
                    </span>
                  )}
                </div>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Based on Text 2, the author would most likely suggest stating a preference about where to eat. The text explains that research shows people who state their preferences make decisions easier for others and lead to better outcomes for everyone involved. This directly addresses the situation in Text 1 where people avoid stating preferences.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" className="rounded-lg border-neutral-300">
            Previous Question
          </Button>
          <Button className="rounded-lg bg-neutral-900 hover:bg-neutral-800">
            Next Question
          </Button>
        </div>
      </main>
    </div>
  )
}
