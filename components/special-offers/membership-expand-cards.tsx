"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { OfferBookingLink } from "@/components/special-offers/offer-booking-link";
import { bookingAvailabilityUrl } from "@/lib/build-date-url";

const ctaClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-brand-orange bg-brand-orange px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105";

const mobileCtaClassName =
  "flex w-full min-h-11 items-center justify-center gap-2 rounded-full border-2 border-brand-orange bg-brand-orange px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105";

type MembershipCard = {
  index: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
} & (
  | { linkType: "booking"; bookingBase: string }
  | { linkType: "external"; href: string }
);

const membershipCards: MembershipCard[] = [
  {
    index: "01",
    tag: "Road Trip Ready",
    title: "AAA Members",
    description:
      "Your membership pays for itself, starting here. AAA members save up to 20% off, because smart travelers deserve smarter rates.",
    ctaLabel: "Book Your AAA Stay",
    imageSrc: "/special-offers/aaa-bg.jpg",
    imageAlt: "AAA members at FantasyWorld Resort",
    linkType: "booking",
    bookingBase: bookingAvailabilityUrl("AAA"),
  },
  {
    index: "02",
    tag: "Member Perks",
    title: "Rewards Members",
    description:
      "Free to join. Instant savings. Up to 20% off your stay from the moment you sign up. No strings, just perks.",
    ctaLabel: "Join & Save Today",
    imageSrc: "/special-offers/member2.jpg",
    imageAlt: "FantasyWorld rewards members",
    imagePosition: "object-[center_30%]",
    linkType: "external",
    href: "https://fantasyworldresort.com/reservations/rewards-program/",
  },
  {
    index: "03",
    tag: "Mature Travelers",
    title: "AARP Member Rate",
    description:
      "AARP members save up to 18% off Best Available Rate when booking at FantasyWorld Resort.",
    ctaLabel: "Book Your Vacation Today",
    imageSrc: "/special-offers/member3.jpg",
    imageAlt: "AARP members at FantasyWorld Resort",
    linkType: "booking",
    bookingBase: bookingAvailabilityUrl("AARP"),
  },
];

function CardCta({ card, className = ctaClassName }: { card: MembershipCard; className?: string }) {
  if (card.linkType === "booking") {
    return (
      <OfferBookingLink bookingBase={card.bookingBase} className={className}>
        {card.ctaLabel}
        <span aria-hidden>→</span>
      </OfferBookingLink>
    );
  }
  return (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
      {card.ctaLabel}
      <span aria-hidden>→</span>
    </a>
  );
}

const DEFAULT_ACTIVE_INDEX = 0;

export function MembershipExpandCards() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActiveIndex(DEFAULT_ACTIVE_INDEX);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#e3f2fa] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[min(100%,76rem)]">
        <header className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="m-0 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
              Membership Benefits
            </p>
            <h2 className="mt-3 font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-brand-green">
              Exclusive Member Savings
            </h2>
          </div>
          <p className="m-0 max-w-md text-base leading-relaxed text-[#3d4f5c] sm:text-lg">
            Tap or hover a card to explore AAA, Rewards, and AARP rates—each with its own perks and an easy path
            to book.
          </p>
        </header>

        {/* Desktop / tablet: horizontal expand */}
        <div
          className="hidden h-[min(32rem,70vh)] min-h-[22rem] gap-3 md:flex"
          onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
        >
          {membershipCards.map((card, i) => {
            const isActive = activeIndex === i;
            return (
              <article
                key={card.title}
                tabIndex={0}
                className={`relative min-w-[4.5rem] cursor-pointer overflow-hidden rounded-[1.75rem] transition-[flex-grow,width] duration-500 ease-out outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${
                  isActive ? "flex-[4]" : "flex-[1]"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
              >
                <Image
                  src={card.imageSrc}
                  alt=""
                  fill
                  className={`object-cover ${card.imagePosition ?? "object-center"}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-black/50" : "bg-brand-green/75"
                  }`}
                  aria-hidden
                />

                {/* Collapsed */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between px-3 py-5 transition-opacity duration-300 ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <span
                    className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-white [writing-mode:vertical-rl] rotate-180"
                    aria-hidden
                  >
                    {card.title}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white backdrop-blur-sm">
                    {card.index}
                  </span>
                </div>

                {/* Expanded */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 sm:p-8 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {card.tag}
                  </span>
                  <h3 className="m-0 max-w-md font-sans text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <CardCta card={card} />
                  </div>
                  <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 bg-brand-green text-sm font-bold text-white sm:bottom-8 sm:right-8">
                    {card.index}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile: stacked accordion */}
        <div className="flex flex-col gap-4 md:hidden">
          {membershipCards.map((card, i) => {
            const isActive = activeIndex === i;
            return (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.25rem] shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              >
                <button
                  type="button"
                  className="relative flex w-full min-h-[5.5rem] items-end overflow-hidden text-left"
                  onClick={() => setActiveIndex(isActive ? -1 : i)}
                  aria-expanded={isActive}
                >
                  <Image
                    src={card.imageSrc}
                    alt=""
                    fill
                    className={`object-cover ${card.imagePosition ?? "object-center"}`}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-brand-green/70" aria-hidden />
                  <span className="relative z-10 flex w-full items-center justify-between gap-3 px-4 py-4">
                    <span className="font-sans text-lg font-bold text-white">{card.title}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 text-xs font-bold text-white">
                      {card.index}
                    </span>
                  </span>
                </button>
                {isActive ? (
                  <div className="bg-white px-5 py-5">
                    <span className="inline-flex rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {card.tag}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-[#444]">{card.description}</p>
                    <div className="mt-5 w-full">
                      <CardCta card={card} className={mobileCtaClassName} />
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
