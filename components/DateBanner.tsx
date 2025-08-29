interface DateBannerProps {
  date?: Date
  className?: string
}

export function DateBanner({ date = new Date(), className = "" }: DateBannerProps) {
  // Format the date as "Month Day, Year" in a deterministic timezone to avoid hydration mismatch
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="bg-white/90 text-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-200 py-1 pl-3 pr-7 shadow-lg backdrop-blur border-t border-b border-zinc-900/10 dark:border-white/5 relative">
        {formattedDate}
        <div className="absolute top-0 right-0 h-full w-6 overflow-hidden">
          <div className="absolute rotate-45 bg-zinc-200 dark:bg-zinc-900 h-8 w-8 -right-6 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  )
}
