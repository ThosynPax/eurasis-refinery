import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Eurasia Energy - Leading Oil & Gas Refining Solutions",
  description:
    "Eurasia Energy provides world-class oil and gas refining services with cutting-edge technology and sustainable practices.",
    icons: {
      icon: "/favicon.png", // path relative to /public
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${manrope.variable} antialiased`}>
      <meta  name="simpledcver"  content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJldXJhc2lhZW5lcmd5LWt6LmNvbSIsImV4cCI6MTc1NzQ2MjQwMH0.e0bkJ5GMO0OZ3OUGFXlU6lddMvq49bjCSnKwk1i4oNw"></meta>
      <body>{children}</body>
    </html>
  )
}
