"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// 移除原本報錯的那行 import { type ThemeProviderProps } ...

export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}