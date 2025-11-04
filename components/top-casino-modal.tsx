"use client"

import { useState, useEffect } from "react"
import { sportsbooks } from "@/data/sportsbooks"
import { StarRating } from "@/components/star-rating"
import Image from "next/image"
import Link from "next/link"

export default function TopCasinoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const topCasino = sportsbooks[0]

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className="bg-gray-900 rounded-lg w-full max-w-md relative shadow-2xl border-4"
        style={{ borderColor: "#FFD700" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold border-2 border-gray-600 z-10"
        >
          ×
        </button>

        <div className="rounded-t-lg py-3 px-4 text-center" style={{ backgroundColor: "#FFD700" }}>
          <h2 className="text-black font-bold text-lg">Best Choice</h2>
        </div>

        <div className="p-5 space-y-4">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={topCasino.logo || "/placeholder.svg"}
              alt={`${topCasino.name} logo`}
              width={140}
              height={70}
              className="rounded"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold" style={{ color: "#FFD700" }}>
                {topCasino.rating}
              </span>
              <StarRating rating={topCasino.rating} />
            </div>
            <span className="text-sm text-gray-400">({topCasino.votes.toLocaleString()} reviews)</span>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 text-center border-2" style={{ borderColor: "#FFD700" }}>
            <div className="text-xs text-gray-400 uppercase mb-1">Welcome Bonus</div>
            <div className="text-2xl font-bold mb-1" style={{ color: "#FFD700" }}>
              {topCasino.bonus}
            </div>
            <div className="text-xl font-bold mb-1" style={{ color: "#FFD700" }}>{topCasino.welcomeOffer}</div>
          </div>

          <Link href={topCasino.url} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full hover:opacity-90 text-black font-bold py-3 px-6 rounded-lg transition-opacity text-base mt-4"
              style={{ backgroundColor: "#FFD700" }}
            >
              Claim Bonus
            </button>
          </Link>

          <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-800">{topCasino.terms}</div>
        </div>
      </div>
    </div>
  )
}
