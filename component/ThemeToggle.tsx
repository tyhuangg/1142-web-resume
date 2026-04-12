"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // 避免 SSR 出錯，確保組件已掛載
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-6 right-8 z-50 flex items-center gap-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-blue-400 transition-all duration-300"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      {/* 這裡先留一個位置給之後的語言切換按鈕 */}
      <button className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
        EN / 中
      </button>
    </div>
  )
}