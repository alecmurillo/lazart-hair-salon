import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLine,
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10028",
    addressCountry: "US",
  },
  areaServed: site.contact.neighborhood,
  priceRange: "$$",
  sameAs: [site.social.google, site.social.yelp, site.social.tiktok],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: "65",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
