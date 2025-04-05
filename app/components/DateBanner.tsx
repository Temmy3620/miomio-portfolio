interface DateBannerProps {
  date?: Date
  className?: string
}

export function DateBanner({ date = new Date(), className = "" }: DateBannerProps) {
  // Format the date as "Month Day, Year"
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="bg-zinc-800/90 text-zinc-200 py-1 pl-3 pr-7 shadow-lg backdrop-blur border-t border-b border-white/5 relative">
        {formattedDate}
        <div className="absolute top-0 right-0 h-full w-6 overflow-hidden">
          <div className="absolute rotate-45 bg-zinc-900 h-8 w-8 -right-6 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  )
}
