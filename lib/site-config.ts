/**
 * Single source of truth for every business fact on the site.
 * Edit values here and the whole page updates. Placeholder values are marked
 * with TODO — swap them for the real salon details.
 */

export const site = {
  name: "LazArt Hair Salon",
  tagline: "Upper East Side hair & color",
  description:
    "An Upper East Side salon for cuts, color, and styling — men, women, and children. Decades of stylist experience and premium product lines, by appointment.",

  // TODO: set your live domain once deployed (used for SEO/OpenGraph)
  url: "https://lazarthairsalon.example.com",

  // Booking — live Calendly scheduling link.
  calendlyUrl: "https://calendly.com/alecmurillo-uchicago/30min",

  contact: {
    addressLine: "1626 1st Avenue",
    cityLine: "New York, NY 10028",
    crossStreet: "Between E 84th & E 85th St",
    neighborhood: "Upper East Side",
    phone: "(212) 585-0092",
    phoneHref: "tel:+12125850092",
    // TODO: add a contact email if you want one shown (leave empty to hide it)
    email: "",
    // Opens Google Maps search for the address
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1626+1st+Avenue+New+York+NY+10028",
  },

  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tue – Fri", time: "9:30 – 7:30" },
    { day: "Saturday", time: "9:00 – 7:00" },
    { day: "Sunday", time: "9:00 – 6:30" },
  ],

  social: {
    yelp: "https://www.yelp.com/biz/lazart-hair-salon-inc-new-york",
    google: "https://www.google.com/search?q=lazart+hair+salon+reviews",
    tiktok: "https://www.tiktok.com/@megangraceludwig/video/7573137693559819533",
  },

  // Featured social video (TikTok). videoId drives the embed.
  media: {
    tiktokUrl:
      "https://www.tiktok.com/@megangraceludwig/video/7573137693559819533",
    tiktokVideoId: "7573137693559819533",
    tiktokCreator: "@megangraceludwig",
  },

  // Headline social-proof numbers (kept honest to public review counts).
  rating: { value: "4.9", count: "60+" },
} as const;

/** Service groups — editorial, list-driven (no grid cards per design spec). */
export const serviceGroups = [
  {
    no: "01",
    title: "Cuts & Styling",
    forWho: "Men · Women · Children",
    blurb:
      "From a fresh classic to a full restyle — cut, shaped, and finished by stylists with decades behind the chair.",
    items: [
      "Washing & blow-dry styling",
      "Trimming & thinning",
      "Layers, straight cut & bangs",
      "Bob, box & pixie cuts",
      "Buzz cuts & scissor cuts",
      "Shaving & beard line-up",
      "Classic & modern looks",
      "Natural or fresh-cut finish",
    ],
  },
  {
    no: "02",
    title: "Color",
    forWho: "Men · Women",
    blurb:
      "Dimensional color built around your tone — including low- and no-ammonia formulas when you want something gentler.",
    items: [
      "Highlights & lowlights",
      "Semi & permanent color",
      "Toners & color refresh",
      "Glazing & gloss",
      "Low / no-ammonia options",
      "Eyebrow coloring",
    ],
  },
  {
    no: "03",
    title: "Treatment & Finishing",
    forWho: "Men · Women · Children",
    blurb:
      "Texture and care services that keep hair healthy, shaped, and camera-ready between visits.",
    items: [
      "Deep conditioning treatments",
      "Sets & perms",
      "Straightening & flat ironing",
      "Curling & curl ironing",
      "Eyebrow shaping & trim",
    ],
  },
] as const;

/** Premium product lines carried in-house (marquee row). */
export const products = [
  "Schwarzkopf Igora Royal",
  "Wella Koleston",
  "Wella Color Touch",
  "Redken",
  "Kérastase",
  "Moroccanoil",
  "Biosilk",
  "American Crew",
  "It's a 10",
] as const;

/**
 * Real guest reviews pulled from LazArt's public Google listing.
 * Lightly trimmed for length; wording otherwise verbatim. Edit/add freely.
 */
export const reviews = [
  {
    quote:
      "I've been a customer of LazArt for a few years now and am thankful to have not only found the best hair salon but very talented and incredibly friendly owners! Alex is the best and I'm loving my new style and cut!",
    name: "Katie S.",
    detail: "Cut & style",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Highly recommend this salon! They were able to get me in same day, listened to everything I asked for, and the price was right. Thank you!",
    name: "Anne",
    detail: "Same-day cut",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "First-time customer, only in for a quick cut — but they exceeded my expectations! No wait at all, and Lana took great care of me, so kind and attentive about every decision. Very happy with the results. I'll be back!",
    name: "Verified guest",
    detail: "First visit",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Lazart, you are a god! I'm beyond wowed and so appreciative — the most perfect, superb layered cut. I'll be your customer for life. Phenomenal! A++! Haven't had a cut like this in years.",
    name: "Sara",
    detail: "Layered cut",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Great place, very low prices, friendly service. These guys are the best!",
    name: "James H.",
    detail: "Men's cut",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "I tried this place for the first time and it was AMAZING! Alex gave me a haircut and was so patient, helpful, and talented.",
    name: "Carolina U.",
    detail: "First visit",
    source: "Yelp",
    rating: 5,
  },
  {
    quote:
      "The best haircut I have gotten in NYC! Alex was amazing — gave me a great wash, cut and blow out, and did it in such a timely manner. I will definitely be coming back!",
    name: "Maddy G.",
    detail: "Wash, cut & blow-out",
    source: "Yelp",
    rating: 5,
  },
  {
    quote:
      "Amazing service! So attentive, kind, and precise. The price is amazing for the quality of the cut. 100% recommend!",
    name: "Olive J.",
    detail: "Cut",
    source: "Yelp",
    rating: 5,
  },
  {
    quote:
      "This is hubby's go-to spot for a quick, no-fuss haircut. $23 for the cut plus tip — very straightforward, and it took less than 15 minutes. Wow!",
    name: "Amanda W.",
    detail: "Men's cut",
    source: "Yelp",
    rating: 5,
  },
  {
    quote:
      "Lana is the sweetest woman, and I was so impressed with how much time and care she put into cutting my hair.",
    name: "Verified guest",
    detail: "Cut with Lana",
    source: "Yelp",
    rating: 5,
  },
] as const;
