import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "GamesOntario - Best Licensed Ontario Online Casinos 2025",
  description:
    "Discover Ontario's top-rated licensed online casinos. Expert reviews, exclusive bonuses, and safe gaming with AGCO-licensed operators. 19+ only.",
  keywords:
    "Ontario online casino, Ontario casino, AGCO licensed, iGaming Ontario, online casino Ontario, casino bonuses Ontario, online gaming, GamesOntario",
  authors: [{ name: "GamesOntario" }],
  creator: "GamesOntario",
  publisher: "GamesOntario",
  robots: "index, follow",
  openGraph: {
    title: "GamesOntario - Best Licensed Ontario Online Casinos 2025",
    description:
      "Discover Ontario's top-rated licensed online casinos. Expert reviews, exclusive bonuses, and safe gaming with AGCO-licensed operators.",
    url: "https://gamesontario.com",
    siteName: "GamesOntario",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GamesOntario - Best Licensed Ontario Online Casinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GamesOntario - Best Licensed Ontario Online Casinos 2025",
    description:
      "Discover Ontario's top-rated licensed online casinos. Expert reviews, exclusive bonuses, and safe gaming.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d4af37",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="pt-12 md:pt-16">
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
