"use client"

import Image from "next/image"

export function HeroSection() {
  const scrollToRankings = () => {
    document.getElementById("rankings")?.scrollIntoView({ behavior: "smooth" })
  }

  const currentDate = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="relative h-[200px] md:h-[300px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/luxury-casino-interior-with-poker-tables-and-slot-.jpg"
          alt="Casino background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-[hsl(var(--casino-red)_/_0.4)]" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,.03) 35px, rgba(255,215,0,.03) 70px)`,
          }}
        />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[hsl(var(--casino-gold)_/_0.1)] rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(var(--casino-red)_/_0.1)] rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance flex flex-row items-center justify-center gap-3 md:gap-4">
            <span className="text-foreground">Best </span>
            <span className="text-[hsl(var(--casino-gold))] inline-block animate-shimmer">Ontario Casinos</span>
          </h1>

          <p className="hidden sm:block text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Expert reviews of licensed Ontario online casinos with the best bonuses and game selections.
            <br />
            All operators are AGCO-licensed and regulated by iGaming Ontario.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[hsl(var(--casino-gold))]">
            <span>Rankings updated: {currentDate}</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 pt-2 text-xs md:text-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">19+ Only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">Secure Transactions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">AGCO Licensed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
