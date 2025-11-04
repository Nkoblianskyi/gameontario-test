"use client"

export function InfoSection() {
  return (
    <section className="py-12 lg:py-16 bg-[hsl(var(--casino-dark))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-foreground">How We Choose </span>
              <span className="text-[hsl(var(--casino-gold))]">Online Casinos</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our evaluation methodology is based on strict criteria and independent analysis of Ontario's best gaming
              sites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: "AGCO Licensing",
                description:
                  "We verify official licensing and compliance with Ontario regulatory requirements for safe gaming",
              },
              {
                title: "Game Selection",
                description: "We analyze the variety and quality of slots, table games, and live dealer experiences",
              },
              {
                title: "Bonuses & Promotions",
                description:
                  "We evaluate fairness of bonus terms and real value of welcome offers and ongoing promotions",
              },
              {
                title: "Customer Support",
                description: "We test quality and response time of customer service across multiple channels",
              },
              {
                title: "Reputation",
                description: "We study player reviews and the casino's track record in the Ontario market",
              },
              {
                title: "Payment Security",
                description: "We verify payment methods, withdrawal speed, and data protection standards",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-4 hover:border-[hsl(var(--casino-gold)_/_0.3)] transition-colors duration-200"
              >
                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-foreground">Editorial Independence</h3>
              <p className="text-sm text-muted-foreground mb-2">
                No casino pays for placement in our rankings. Our reviews are based exclusively on expert analysis and
                user experience.
              </p>
              <p className="text-sm text-muted-foreground">
                We maintain complete editorial independence to provide you with honest and unbiased recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
