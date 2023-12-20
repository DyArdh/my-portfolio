'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

type providersProps = {
  children: React.ReactNode
}

const Providers: React.FC<providersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}

export default Providers
