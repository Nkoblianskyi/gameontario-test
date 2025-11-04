"use client"

import { Card } from "@/components/sportsbook-card"
import { sportsbooks } from "@/data/sportsbooks"

export function RankingsSection() {
  const bettingSites = sportsbooks.map((sb) => ({
    id: sb.id,
    name: sb.name,
    link: sb.url,
    bonus: sb.bonus,
    welcomeOffer: sb.welcomeOffer,
    rating: sb.rating,
    votes: sb.votes,
    logo: sb.logo,
    terms: sb.terms,
  }))

  return (
    <section
      id="rankings"
      className="py-8 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Rankings list */}
        <div className="space-y-6">
          {bettingSites.map((site, index) => (
            <div key={site.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card site={site} rank={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
