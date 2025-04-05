"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingOverlayProps {
  /**
   * Whether the loading overlay is visible
   */
  isLoading?: boolean
  /**
   * Optional message to display below the spinner
   */
  message?: string
  /**
   * Optional class name to apply to the overlay
   */
  className?: string
  /**
   * Optional z-index for the overlay (default: 50)
   */
  zIndex?: number
}

export function LoadingOverlay({ isLoading = true, message, className, zIndex = 50 }: LoadingOverlayProps) {
  const [mounted, setMounted] = useState(false)

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm",
            className,
          )}
          style={{ zIndex }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            {message && <p className="text-center text-sm text-muted-foreground">{message}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
