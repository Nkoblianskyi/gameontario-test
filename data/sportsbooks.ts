export interface Sportsbook {
  id: string
  name: string
  url: string
  bonus: string
  welcomeOffer: string
  rating: number
  votes: number
  logo: string
  terms: string
}

export const sportsbooks: Sportsbook[] = [
  {
    id: "bet365",
    name: "Bet365",
    url: "https://casino.on.bet365.ca/",
    bonus: "100% matched bonus",
    welcomeOffer: "up to $1,000",
    rating: 9.8,
    votes: 2741,
    logo: "/bet365.png",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs, time limits and exclusions apply.",
  },
  {
    id: "betano",
    name: "Betano",
    url: "https://www.betano.ca/",
    bonus: "Casino Welcome Deposit Match",
    welcomeOffer: "Up to $3,000",
    rating: 9.7,
    votes: 2591,
    logo: "/betano.svg",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs apply.",
  },
  {
    id: "betvictor",
    name: "Betvictor",
    url: "https://www.betvictor.com/en-on",
    bonus: "Wager $20",
    welcomeOffer: "Get 200 Spins",
    rating: 9.6,
    votes: 2594,
    logo: "/betvictor.png",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min wager $20. Wagering requirements apply. T&Cs apply.",
  },
  {
    id: "leovegas",
    name: "Leovegas",
    url: "https://www.leovegas.com/en-ca/on/",
    bonus: "Cash & Bonus Spins",
    welcomeOffer: "Up to $1,500 + 100 Spins",
    rating: 9.5,
    votes: 2297,
    logo: "/leovegas.svg",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs apply.",
  },
  {
    id: "bwin",
    name: "BWIN",
    url: "https://www.on.bwin.ca/en-ca/",
    bonus: "Welcome Bonus",
    welcomeOffer: "Up to $400",
    rating: 9.4,
    votes: 1953,
    logo: "/bwin.png",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs apply.",
  },
  {
    id: "tonybet",
    name: "Tonybet",
    url: "https://tonybet.ca/",
    bonus: "Bonus Package",
    welcomeOffer: "up to $2,500 + 225 Spins",
    rating: 9.3,
    votes: 1796,
    logo: "/tonybet-cas.svg",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs apply.",
  },
  {
    id: "tooniebet",
    name: "Tooniebet",
    url: "https://www.tooniebet.ca/ca/",
    bonus: "Bonus Package",
    welcomeOffer: "up to $1,800 + 200 Spins",
    rating: 9.2,
    votes: 1627,
    logo: "/tooniebet.jpg",
    terms:
      "19+ only. Regulated by AGCO. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca. New customers only. Min deposit $10. Wagering requirements apply. T&Cs apply.",
  },
]
