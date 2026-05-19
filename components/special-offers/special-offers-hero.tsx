import Image from "next/image";

const HERO_IMAGE = "/special-offers/hero.jpg";

export function SpecialOffersHero() {
  return (
    <section
      className="relative -mt-24 w-full sm:-mt-28"
      aria-labelledby="special-offers-hero-title"
    >
      <div className="relative h-[400px] w-full overflow-hidden md:h-[800px]">
        <Image
          src={HERO_IMAGE}
          alt="Family enjoying the resort pool at FantasyWorld"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65"
          aria-hidden
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:px-12">
          <Image
            src="/sun-png0.png"
            alt=""
            width={81}
            height={60}
            className="mb-5 h-12 w-auto object-contain sm:h-14"
          />
          <h1
            id="special-offers-hero-title"
            className="m-0 max-w-4xl font-sans text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.35)]"
          >
            Special Promotions, Packages &amp; Deals
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-white/95 sm:text-lg">
            Great deals shouldn&apos;t be hard to find. We&apos;ve rounded up our best exclusive rates in one
            place, from military and first responder discounts to member perks and local savings.
          </p>
        </div>
      </div>
    </section>
  );
}
