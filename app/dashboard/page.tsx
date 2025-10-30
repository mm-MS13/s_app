"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BarChart3, MessageSquare, Target } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              SAT Math AI
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm text-neutral-900">
                Dashboard
              </Link>
              <Link href="/practice" className="text-sm text-neutral-600 hover:text-neutral-900">
                Practice
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
        <div className="mb-12">
          <h1 className="text-3xl font-medium text-neutral-900">Welcome back</h1>
          <p className="mt-2 text-neutral-600">Ready to continue your SAT Math practice?</p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <Card className="border-neutral-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Questions Practiced</p>
                <p className="mt-2 text-3xl font-medium text-neutral-900">0</p>
              </div>
              <div className="rounded-full bg-neutral-100 p-3">
                <Target className="h-5 w-5 text-neutral-600" />
              </div>
            </div>
          </Card>

          <Card className="border-neutral-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Average Accuracy</p>
                <p className="mt-2 text-3xl font-medium text-neutral-900">--</p>
              </div>
              <div className="rounded-full bg-neutral-100 p-3">
                <BarChart3 className="h-5 w-5 text-neutral-600" />
              </div>
            </div>
          </Card>

          <Card className="border-neutral-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Topics Practiced</p>
                <p className="mt-2 text-3xl font-medium text-neutral-900">0</p>
              </div>
              <div className="rounded-full bg-neutral-100 p-3">
                <MessageSquare className="h-5 w-5 text-neutral-600" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-neutral-200 bg-white p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-medium text-neutral-900">Start Practicing</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Choose a topic or let AI recommend what to practice based on your goals
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <Link href="/practice" className="block">
                <Button className="h-11 w-full justify-between rounded-full bg-neutral-900 text-sm hover:bg-neutral-800">
                  <span>Start Practice Question</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="h-11 w-full justify-between rounded-full border-neutral-300 text-sm hover:bg-neutral-50"
              >
                <span>Browse Topics</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="border-neutral-200 bg-white p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-medium text-neutral-900">AI Tutor</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Describe what you're struggling with and get personalized practice recommendations
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/chat" className="block">
                <Button className="h-11 w-full justify-between rounded-full bg-neutral-900 text-sm hover:bg-neutral-800">
                  <span>Chat with AI Tutor</span>
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <Card className="mt-6 border-neutral-200 bg-white p-8">
          <h2 className="text-xl font-medium text-neutral-900">Recent Activity</h2>
          <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-neutral-100 p-4">
              <BarChart3 className="h-8 w-8 text-neutral-400" />
            </div>
            <p className="mt-4 text-sm text-neutral-600">No practice sessions yet</p>
            <p className="mt-1 text-xs text-neutral-500">
              Start practicing to see your activity here
            </p>
          </div>
        </Card>

        <Card className="mt-6 border-neutral-200 bg-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-neutral-900">Recommended Topics</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Based on common SAT Math challenge areas
              </p>
            </div>
            <Link href="/progress" className="text-sm text-neutral-900 hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="font-medium text-neutral-900">Linear Equations</h3>
              <p className="mt-1 text-xs text-neutral-600">Algebra</p>
              <Link href="/practice">
                <Button
                  variant="outline"
                  className="mt-4 h-9 w-full rounded-full border-neutral-300 text-xs hover:bg-neutral-50"
                >
                  Start Practice
                </Button>
              </Link>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="font-medium text-neutral-900">Quadratic Functions</h3>
              <p className="mt-1 text-xs text-neutral-600">Algebra</p>
              <Link href="/practice">
                <Button
                  variant="outline"
                  className="mt-4 h-9 w-full rounded-full border-neutral-300 text-xs hover:bg-neutral-50"
                >
                  Start Practice
                </Button>
              </Link>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <h3 className="font-medium text-neutral-900">Right Triangles</h3>
              <p className="mt-1 text-xs text-neutral-600">Geometry</p>
              <Link href="/practice">
                <Button
                  variant="outline"
                  className="mt-4 h-9 w-full rounded-full border-neutral-300 text-xs hover:bg-neutral-50"
                >
                  Start Practice
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
