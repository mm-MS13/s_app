"use client"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ToastErrorProps {
  message: string
  onClose?: () => void
}

export function ToastError({ message, onClose }: ToastErrorProps) {
  return (
    <Alert className="border-red-200 bg-red-50 text-red-900">
      <AlertCircle className="h-4 w-4 text-red-600" />
      <AlertDescription className="ml-2 text-sm">{message}</AlertDescription>
    </Alert>
  )
}
