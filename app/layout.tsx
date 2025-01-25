import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata = {
  title: "Mohammed Mohsin - Web Developer Portfolio",
  description: "Premium portfolio of Mohammed Mohsin, an expert web developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}

