"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-casino-gold/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Cookie Notice</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
              clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <Link href="/cookie-policy" className="text-casino-gold hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-casino-gold hover:underline">
                Privacy Policy
              </Link>{" "}
              for more information.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 md:flex-none px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2.5 bg-casino-gold hover:bg-casino-gold/90 text-black rounded-lg transition-colors text-sm font-medium"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
