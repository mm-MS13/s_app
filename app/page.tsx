"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-lg font-semibold">SAT Math AI</div>
            <div className="hidden items-center gap-8 md:flex">
              <Link href="#features" className="text-sm text-neutral-600 hover:text-neutral-900">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900">
                How it works
              </Link>
              <Link href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">
                Pricing
              </Link>
              <Link href="/signup">
                <Button className="rounded-full bg-neutral-900 px-5 text-sm hover:bg-neutral-800">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="mx-auto max-w-4xl px-6 pb-24 pt-32 text-center lg:px-8">
          <h1 className="mx-auto max-w-3xl text-5xl font-medium leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Master SAT Math with targeted practice
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            AI identifies your weak areas and creates personalized practice sets. Track progress and improve faster with data-driven insights.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button className="rounded-full bg-neutral-900 px-8 py-6 text-base hover:bg-neutral-800">
                Start practicing free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="rounded-full border-neutral-300 px-8 py-6 text-base hover:bg-neutral-50">
              View demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-neutral-500">No credit card required</p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-32 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-2">
            <div className="aspect-video w-full rounded-lg bg-white"></div>
          </div>
        </section>

        <section id="features" className="border-t border-neutral-200 bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                Everything you need to improve
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Practice smarter with AI-powered tools designed for SAT Math success
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-medium text-neutral-900">AI Tutor Chat</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Describe what you struggle with in plain English. Get instant topic recommendations and practice sets.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">Targeted Practice</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Focus on specific question types instead of full tests. Practice exactly what you need to improve.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">Progress Analytics</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Visual dashboards show accuracy by topic, improvement over time, and recommended next steps.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">Instant Feedback</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Get immediate results after each question with progressive hints and detailed explanations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">College Board Style</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  All questions match official SAT Math format and difficulty levels for authentic practice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">Unlimited Questions</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  AI generates fresh questions on demand so you never run out of practice material.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-neutral-200 bg-neutral-50 py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Three steps to mastering SAT Math
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl space-y-16">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium text-neutral-500">Step 1</div>
                  <h3 className="mt-2 text-2xl font-medium text-neutral-900">Identify weak areas</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Chat with the AI tutor about topics you find difficult, or manually browse practice topics. The system maps your needs to specific SAT question types.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                  <div className="aspect-[4/3] w-full bg-neutral-50"></div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="order-2 flex flex-col justify-center lg:order-1">
                  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                    <div className="aspect-[4/3] w-full bg-neutral-50"></div>
                  </div>
                </div>
                <div className="order-1 flex flex-col justify-center lg:order-2">
                  <div className="text-sm font-medium text-neutral-500">Step 2</div>
                  <h3 className="mt-2 text-2xl font-medium text-neutral-900">Practice focused sets</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Work through question sets tailored to your weak areas. Get instant feedback, progressive hints, and detailed solutions for every problem.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium text-neutral-500">Step 3</div>
                  <h3 className="mt-2 text-2xl font-medium text-neutral-900">Track your progress</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    View detailed analytics showing accuracy by topic, improvement trends, and AI-recommended areas to focus on next.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                  <div className="aspect-[4/3] w-full bg-neutral-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-neutral-200 bg-white py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Start free, upgrade when you need more
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-8">
                <h3 className="text-xl font-medium text-neutral-900">Free</h3>
                <p className="mt-2 text-sm text-neutral-600">Perfect for getting started</p>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-neutral-900">$0</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>20 practice questions per day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Basic progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>AI tutor chat (10 messages/day)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>All SAT Math topics</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="mt-8 w-full rounded-full border-neutral-300 py-6 hover:bg-neutral-50">
                    Start free
                  </Button>
                </Link>
              </div>

              <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-neutral-900">Pro</h3>
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                    Popular
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">Everything you need to excel</p>
                <div className="mt-6">
                  <span className="text-4xl font-medium text-neutral-900">$19</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Unlimited practice questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Unlimited AI tutor chat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>AI-generated practice questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="mt-8 w-full rounded-full bg-neutral-900 py-6 hover:bg-neutral-800">
                    Start 7-day free trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50 py-32">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Ready to improve your SAT Math score?
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Join students who are mastering SAT Math with targeted, AI-powered practice
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button className="rounded-full bg-neutral-900 px-8 py-6 text-base hover:bg-neutral-800">
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-lg font-semibold">SAT Math AI</div>
              <p className="mt-4 text-sm text-neutral-600">
                AI-powered SAT Math practice that actually works
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
            © 2025 SAT Math AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
