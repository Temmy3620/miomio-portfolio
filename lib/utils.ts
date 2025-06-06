import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: (string | number | boolean | null | undefined | Record<string, boolean>)[]) {
  return twMerge(clsx(...inputs))
}
