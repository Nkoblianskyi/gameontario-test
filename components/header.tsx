"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-2 md:px-4 text-center text-white py-2 md:py-3">
        <Link
          href="/"
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <h1 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              GamesOntario
            </h1>
          </div>
        </Link>
      </div>
    </header>
  )
}
