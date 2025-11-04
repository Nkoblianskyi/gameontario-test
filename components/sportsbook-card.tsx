"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"
import { StarRating } from "./star-rating"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-900" : "bg-gray-800"

  const isFirstCard = rank === 1
  const borderColor = isFirstCard ? "border-german-gold border-[3px]" : "border-gray-700 border-[3px]"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 215 : 350
    const shouldShow = site.terms.length > limit

    setShowReadMore(shouldShow)
  }, [site.terms, site.name, isMobile])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 3 || rank === 6
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP CASINO"
    if (rank === 2) return "EXCLUSIVE OFFER"
    if (rank === 3) return "POPULAR"
    if (rank === 6) return "RISING STAR"
    return ""
  }

  return (
    <div className="block">
      {rank === 1 && (
        <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
          <div className="h-[40px] flex items-center px-6">
            <div className="flex-[0_0_30%] text-center pr-2">
              <span className="text-xs font-bold">CASINO</span>
            </div>
            <div className="flex-[0_0_25%] text-center px-2">
              <span className="text-xs font-bold">BONUS OFFER</span>
            </div>
            <div className="flex-[0_0_20%] text-center px-2">
              <span className="text-xs font-bold">USER RATING</span>
            </div>
            <div className="flex-[0_0_12%] text-center px-2">
              <span className="text-xs font-bold">SCORE</span>
            </div>
            <div className="flex-[0_0_13%] text-center pl-2">
              <span className="text-xs font-bold">VISIT SITE</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div
        className={`hidden lg:block ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-visible cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {shouldShowSpecialBadge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-german-gold text-black px-4 py-1 rounded-md rounded-br-md text-sm font-bold z-10">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="h-[130px] flex items-center p-6">
            <div className="flex-[0_0_30%] flex justify-center items-center h-full pr-2">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[170px] xl:w-[200px] h-[100px] xl:h-[120px] object-contain mt-4"
              />
            </div>
            <div className="flex-[0_0_35%] text-center flex flex-col justify-center h-full px-2">
              <p className="text-sm text-gray-300">Bonus</p>
              <div className="text-lg xl:text-xl font-bold text-white mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              <div className="text-sm xl:text-lg font-bold text-white leading-tight break-words text-nowrap">
                {site.welcomeOffer}
              </div>
            </div>
            <div className="flex-[0_0_10%] text-center flex flex-col justify-center items-center h-full px-2 gap-1">
              <div className="text-[44px] xl:text-[56px] font-bold leading-none text-german-gold">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs text-gray-400">({formatVotes(site.votes)} reviews)</div>
              <div className="flex justify-center">
                <StarRating rating={site.rating} size="md" />
              </div>
            </div>
            <div className="flex-[0_0_12%] text-center px-1">{/* This column is now empty */}</div>
            <div className="flex-[0_0_13%] text-center flex flex-col justify-center items-center h-full pl-1">
              <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-1 xl:px-2 py-2 rounded-md text-xs xl:text-sm w-full max-w-[120px] h-[38px] xl:h-[45px] mb-1 transition-colors">
                CLAIM BONUS
              </Button>
              <div className="text-xs text-gray-400 underline">Visit {site.name}</div>
            </div>
          </div>
        </Link>
        <div className="bg-black text-[8px] text-gray-400 px-6 py-2" ref={termsContainerRef}>
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-400 hover:text-german-gold underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`hidden md:block lg:hidden ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-visible cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-german-gold text-black px-3 py-1 rounded-bl-md rounded-br-md text-xs font-bold z-10">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="p-4 pt-8 min-h-[140px]">
            <div className="flex items-center mb-3">
              <div className="flex-[0_0_30%] flex justify-center items-center h-full pr-2">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[70px] object-contain flex-shrink-0"
                />
              </div>
              <div className="flex-[0_0_25%] text-center px-2">
                <div className="text-base font-bold text-white mb-0.5 leading-tight break-words">{site.bonus}</div>
                <div className="text-base font-bold text-white leading-tight break-words text-nowrap">
                  {site.welcomeOffer}
                </div>
              </div>
              <div className="flex-[0_0_20%] text-center flex flex-col justify-center items-center px-2 gap-1">
                <div className="text-[40px] font-bold leading-none text-german-gold">{site.rating.toFixed(1)}</div>
                <div className="text-xs text-gray-400">({formatVotes(site.votes)})</div>
                <div className="flex justify-center">
                  <StarRating rating={site.rating} size="sm" />
                </div>
              </div>
              <div className="flex-[0_0_12%] text-center px-1">{/* This column is now empty */}</div>
              <div className="flex-[0_0_13%] text-center pl-1">
                <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-2 py-2 rounded-md text-xs w-full max-w-[100px] mx-auto transition-colors">
                  CLAIM BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
        <div className="border-t border-gray-700 text-gray-400 text-[7px] px-4 py-3 bg-black">
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-400 hover:text-german-gold underline mt-1 text-[8px] font-medium"
              >
                {isTermsExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden ${cardBgColor} rounded-md ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-visible cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-german-gold text-black px-2 py-0.5 rounded-bl-md rounded-br-md text-[10px] font-bold z-20">
              {getSpecialBadgeText()}
            </div>
          )}
          <div className="p-4 pt-6">
            <div className="grid grid-cols-[38%_60%] gap-4 items-center mb-4">
              {/* Logo Column - 45% */}
              <div className="flex items-center justify-center">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
              </div>

              {/* Bonus Column - 55% */}
              <div className="text-center">
                <div className="text-xs font-bold text-gray-400 mb-0.5 leading-tight">Bonus</div>
                <div className="text-sm font-bold text-white leading-tight">{site.bonus}</div>
                <div className="text-sm font-bold text-white leading-tight">{site.welcomeOffer}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 items-center">
              {/* Column 1: Rating */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold leading-none text-german-gold">{site.rating.toFixed(1)}</div>
              </div>

              {/* Column 2: Stars and Reviews */}
              <div className="flex flex-col items-center justify-center gap-1">
                <StarRating rating={site.rating} size="sm" />
                <div className="text-[9px] text-gray-400 text-center leading-tight">({formatVotes(site.votes)})</div>
              </div>

              {/* Column 3: Button */}
              <div className="flex items-center justify-center">
                <Button className="bg-german-gold hover:bg-yellow-600 text-black font-bold px-2 py-2 rounded-md text-xs transition-colors w-full">
                  CLAIM
                </Button>
              </div>
            </div>
          </div>
        </Link>
        <div className="border-t border-gray-700 bg-black px-2 py-2">
          <div className="text-center">
            <div
              className={`text-gray-400 text-[8px] leading-[1.4] transition-all duration-300 ${
                !isTermsExpanded ? "line-clamp-2" : ""
              }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-400 hover:text-german-gold underline text-[9px] font-medium"
              >
                {isTermsExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
