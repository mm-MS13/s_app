"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Menu, Plus, Send, User, Sparkles, PanelLeftClose, PanelLeft } from "lucide-react"
import Link from "next/link"
import { FormEvent, useState, useRef, useEffect } from "react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface Conversation {
  id: string
  title: string
  lastMessage: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [conversations] = useState<Conversation[]>([
    { id: "1", title: "Quadratic equations help", lastMessage: new Date() },
    { id: "2", title: "Trigonometry basics", lastMessage: new Date(Date.now() - 86400000) },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    if (textareaRef.current) {
      textareaRef.current.style.height = "56px"
    }

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you're having trouble with quadratic equations. Let me help you with that. Quadratic equations are in the form ax² + bx + c = 0, and there are several methods to solve them including factoring, completing the square, and using the quadratic formula. Which aspect would you like to focus on?",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleNewChat = () => {
    setMessages([])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "56px"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }

  return (
    <div className="flex h-screen bg-white">
      {sidebarOpen && (
        <div className="w-64 flex-shrink-0 border-r border-neutral-200 bg-neutral-50">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-neutral-200 p-4">
              <Link href="/dashboard" className="text-sm font-medium text-neutral-900">
                SAT Math AI
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="h-8 w-8 p-0"
              >
                <PanelLeftClose className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-3">
              <Button
                onClick={handleNewChat}
                className="w-full justify-start gap-2 rounded-lg border border-neutral-300 bg-white text-sm hover:bg-neutral-100"
                variant="outline"
              >
                <Plus className="h-4 w-4" />
                New chat
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-3">
              <div className="space-y-1">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-200"
                  >
                    <div className="truncate">{conv.title}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-200 p-3">
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-neutral-200 px-4">
          <div className="flex items-center gap-2">
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="h-8 w-8 p-0"
              >
                <PanelLeft className="h-4 w-4" />
              </Button>
            )}
            <span className="text-sm font-medium text-neutral-900">AI Tutor</span>
          </div>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-sm">
              Dashboard
            </Button>
          </Link>
        </header>

        <main className="flex flex-1 flex-col overflow-hidden">
          {messages.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-3xl px-6 text-center">
                <div className="mb-8 inline-flex rounded-full bg-neutral-100 p-4">
                  <Sparkles className="h-8 w-8 text-neutral-700" />
                </div>
                <h1 className="mb-3 text-4xl font-medium text-neutral-900">
                  How can I help you with SAT Math today?
                </h1>
                <p className="text-lg text-neutral-600">
                  Ask me anything about SAT Math topics, practice strategies, or get personalized study recommendations.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-3xl">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`border-b border-neutral-100 px-6 py-8 ${
                      message.role === "assistant" ? "bg-neutral-50" : "bg-white"
                    }`}
                  >
                    <div className="mx-auto flex max-w-3xl gap-6">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className={message.role === "assistant" ? "bg-neutral-900 text-white" : "bg-neutral-200"}>
                          {message.role === "assistant" ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-4 pt-1">
                        <p className="text-[15px] leading-7 text-neutral-900">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="border-b border-neutral-100 bg-neutral-50 px-6 py-8">
                    <div className="mx-auto flex max-w-3xl gap-6">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="bg-neutral-900 text-white">
                          <Sparkles className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-neutral-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}

          <div className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-3xl px-6 py-6">
              <form onSubmit={handleSubmit} className="relative">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Message AI Tutor..."
                  className="w-full resize-none rounded-3xl border border-neutral-300 bg-white px-4 py-4 pr-12 text-[15px] leading-6 text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none focus:ring-0"
                  style={{ height: "56px", maxHeight: "200px" }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute bottom-3 right-3 h-8 w-8 rounded-full p-0 disabled:opacity-30"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
