import { FeaturedServiceOffers } from "@/components/special-offers/featured-service-offers";
import { SpecialOffersHero } from "@/components/special-offers/special-offers-hero";
import { MembershipExpandCards } from "@/components/special-offers/membership-expand-cards";
import { OfferCard } from "@/components/special-offers/offer-card";
import { bookingAvailabilityUrl } from "@/lib/build-date-url";

const offers = [
  {
    title: "Florida Residents",
    description:
      "Home is right around the corner, and so is your next getaway. Florida residents save up to 20% off when you're ready to play tourist in your own backyard.",
    ctaLabel: "See Florida Resident Rates",
    imageSrc: "/special-offers/fl-ga-map.jpg",
    imageAlt: "Florida residents discount",
    linkType: "booking" as const,
    bookingBase: bookingAvailabilityUrl("FLA"),
  },
  {
    title: "Theme Park Pass Holders",
    description:
      "Already living the magic? Make it last longer. Pass holders unlock exclusive savings, up to xx% off your stay.",
    ctaLabel: "Unlock Your Rate",
    imageSrc: "/special-offers/parks.jpg",
    imageAlt: "Theme park pass holder discount",
    linkType: "booking" as const,
    bookingBase: bookingAvailabilityUrl("PASS"),
  },
  {
    title: "Bundle & Save",
    description:
      "Skip the separate bookings. Add attraction tickets from Walt Disney World®, Universal Orlando®, or SeaWorld® Orlando right to your stay and save more when you keep it all in one place.",
    ctaLabel: "Start Your Package Here",
    imageSrc: "/special-offers/bundle.jpg",
    imageAlt: "Bundle and save resort and theme park packages",
    linkType: "external" as const,
    href: "https://fantasyworldresort.tripster.com/orlando/packages",
  },
];

export function SpecialOffersContent() {
  return (
    <div className="bg-[#f5f4f0]">
      <SpecialOffersHero />

      <FeaturedServiceOffers />

      <MembershipExpandCards />

      <section className="bg-white px-4 pt-20 pb-16 sm:px-6 sm:pb-20 md:px-10 md:pb-24">
        <h2 className="mx-auto mb-8 max-w-[min(100%,72rem)] text-center font-sans text-2xl font-bold text-brand-green sm:mb-10 sm:text-3xl">
          More Ways to Save
        </h2>
        <div className="mx-auto grid max-w-[min(100%,72rem)] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </section>
    </div>
  );
}
