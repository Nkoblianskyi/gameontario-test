import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[hsl(var(--casino-dark))] to-[hsl(var(--casino-darker))] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--casino-gold))] via-yellow-400 to-[hsl(var(--casino-gold))] bg-clip-text text-transparent">
                GamesOntario
              </h3>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Your trusted source for Ontario's best licensed online casinos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-[hsl(var(--casino-gold))] font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-[hsl(var(--casino-gold))] transition-colors">
                Home
              </Link>
              <Link href="#rankings" className="hover:text-[hsl(var(--casino-gold))] transition-colors">
                Casino Rankings
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[hsl(var(--casino-gold))] font-bold mb-4">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-[hsl(var(--casino-gold))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-[hsl(var(--casino-gold))] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[hsl(var(--casino-gold))] font-bold mb-4">Responsible Gaming</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://connexontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--casino-gold))] transition-colors"
              >
                ConnexOntario.ca
              </a>
              <p className="text-muted-foreground">1-866-531-2600</p>
              <div className="text-[hsl(var(--casino-red))]">
                <span className="font-bold">19+ Only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-[hsl(var(--casino-dark)_/_0.5)] border border-[hsl(var(--casino-gold)_/_0.2)] p-6 md:p-8 rounded-lg">
            <h4 className="text-center text-[hsl(var(--casino-gold))] font-bold mb-6">Licensed & Regulated</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center mb-6">
              <a
                href="https://igamingontario.ca/en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
              >
                <img src="/igamingontario.svg" alt="iGaming Ontario" className="max-h-full max-w-full object-contain" />
              </a>
              <a
                href="https://gamblingtherapy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
              >
                <img src="/gordon.png" alt="Gambling Therapy" className="max-h-full max-w-full object-contain" />
              </a>
              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
              >
                <img src="/gamble.webp" alt="GambleAware" className="max-h-full max-w-full object-contain" />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
              >
                <img src="/gamecare.svg" alt="GamCare" className="max-h-full max-w-full object-contain" />
              </a>
              <a
                href="https://www.agco.ca/en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
              >
                <img src="/agco.png" alt="AGCO" className="max-h-full max-w-full object-contain" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-center">
              <span>AGCO Licensed</span>
              <span>Secure & Fair Gaming</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--casino-gold)_/_0.2)] pt-8">
          <div className="text-xs md:text-sm text-muted-foreground space-y-4 text-center">
            <p>
              All online casinos listed on GamesOntario.com are regulated by the Alcohol and Gaming Commission of
              Ontario (AGCO) and operate under agreements with{" "}
              <a
                href="https://igamingontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--casino-gold))] hover:underline"
              >
                iGaming Ontario
              </a>
              .
            </p>
            <p>
              GamesOntario.com operates in compliance with Ontario law and follows all AGCO and iGaming Ontario
              regulations.
            </p>
            <p className="text-[hsl(var(--casino-red))] font-medium">
              Gambling can be addictive. Please play responsibly. 19+ only.
            </p>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--casino-gold)_/_0.2)] pt-6 mt-6">
          <p className="text-center text-sm text-muted-foreground">© 2025 GamesOntario.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
