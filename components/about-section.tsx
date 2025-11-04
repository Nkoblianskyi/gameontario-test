"use client"

export function AboutSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-[hsl(var(--casino-darker))] to-[hsl(var(--casino-dark))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-foreground">About </span>
              <span className="text-[hsl(var(--casino-gold))]">GamesOntario</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Your trusted source for comprehensive reviews and rankings of Ontario's licensed online casinos. We help
              players make informed decisions by providing expert analysis, up-to-date information, and transparent
              comparisons of the best gaming platforms available in Ontario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                title: "Expert Reviews",
                description:
                  "Our team thoroughly tests and evaluates every casino, examining game selection, bonuses, payment methods, and customer support quality.",
              },
              {
                title: "Regular Updates",
                description:
                  "We continuously monitor the Ontario casino market to ensure our rankings reflect the latest offerings, promotions, and industry changes.",
              },
              {
                title: "Player Protection",
                description:
                  "We only feature AGCO-licensed casinos that meet strict standards for security, fairness, and responsible gaming practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-5 hover:border-[hsl(var(--casino-gold)_/_0.3)] transition-colors duration-200"
              >
                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-foreground">Safe & </span>
              <span className="text-[hsl(var(--casino-gold))]">Regulated Gaming</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              All casinos in our rankings hold official AGCO licenses and adhere to the highest safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: "AGCO License",
                description:
                  "All listed casinos have valid AGCO licenses and operate under strict regulatory oversight",
              },
              {
                title: "Independent Audits",
                description: "Regular security and fairness checks from independent auditing companies like eCOGRA",
              },
              {
                title: "Responsible Gaming",
                description: "Mandatory responsible gaming tools and support resources for all players",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-5 hover:border-[hsl(var(--casino-gold)_/_0.3)] transition-colors duration-200"
              >
                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-center mb-4 text-foreground">Trusted Organizations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "ConnexOntario", url: "https://connexontario.ca/" },
                { name: "GambleAware", url: "https://www.gambleaware.org/" },
                { name: "iGaming Ontario", url: "https://igamingontario.ca/en/operator/operators" },
                { name: "GPWA", url: "https://www.gpwa.org/" },
                { name: "eCOGRA", url: "https://ecogra.org/" },
              ].map((org, index) => (
                <a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--casino-gold))] hover:text-[hsl(var(--casino-gold)_/_0.8)] transition-colors duration-200 text-sm font-medium"
                >
                  {org.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-foreground">How to Find the Best </span>
              <span className="text-[hsl(var(--casino-gold))]">Online Casino</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Navigating Ontario's online casino landscape requires understanding key elements that define a quality
              gaming experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Popular Casino Games",
                items: [
                  "Slots with progressive jackpots and bonus features",
                  "Live dealer blackjack, roulette, and baccarat",
                  "Video poker and specialty games",
                  "Exclusive Ontario casino game titles",
                ],
              },
              {
                title: "Key Selection Factors",
                items: [
                  "Fast and secure payment methods",
                  "24/7 customer support availability",
                  "Game variety from top software providers",
                  "Mobile-optimized platform performance",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-[hsl(var(--casino-gold))] mt-0.5 flex-shrink-0 text-sm">•</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-foreground">AGCO Regulation and Player Protection</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The Alcohol and Gaming Commission of Ontario (AGCO) oversees all licensed online casino operations,
                ensuring operators meet strict standards for fairness, security, and responsible gaming.
              </p>
              <p className="text-sm text-muted-foreground">
                This regulatory framework protects players through mandatory security protocols, game fairness audits,
                and comprehensive responsible gaming tools available at every licensed casino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
