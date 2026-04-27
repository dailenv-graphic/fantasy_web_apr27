import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroBookingBar } from "@/components/hero-booking-bar";
import { HeroWaves } from "@/components/hero-waves";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TownhomesCarousel } from "@/components/townhomes-carousel";

const BOOK = "https://fantasyworldresort.com/";

const amenities = [
  { img: "/img-lazy-river-start0.png", label: "Pools & Water Parks" },
  { img: "/img-river-landing-pool-bar-10.png", label: "Family Dining" },
  { img: "/img-fitness-center-view-30.png", label: "Fitness Center" },
  { img: "/img-arcade-back-10.png", label: "Resort Shops & Arcade" },
] as const;

const partnerLogos = [
  "logo-10",
  "logo-20",
  "logo-30",
  "logo-40",
  "logo-50",
  "logo-60",
  "logo-70",
  "logo-80",
  "logo-90",
] as const;

const faq = [
  { icon: "/svg9.svg", q: "What time can I check in?", a: "Check in time begins at 4:00 pm." },
  {
    icon: "/svg10.svg",
    q: "Is early check-in available?",
    a: "Early check in is a request only and is subject to availability and may have a fee. If your townhome is not available upon your early arrival, we would be more than happy to store your luggage and you may utilize the Resort amenities while you are waiting.",
  },
  {
    icon: "/svg11.svg",
    q: "What is your check-out time?",
    a: "Check-out time is at 10am. To request a late check-out, please contact our Front Desk Team subject to availability and extra charges may apply. Resort amenities can still be utilized on the day of checkout.",
  },
  {
    icon: "/svg12.svg",
    q: "Do you charge a resort fee?",
    a: "Yes, we have a daily resort fee of $29.99 plus tax, per townhome, per night and is charged regardless of use.",
  },
  {
    icon: "/svg13.svg",
    q: "What is the cancellation policy?",
    a: "Reservations made directly with the Resort must be canceled 48 hours before arrival by 4:00 pm EST to avoid a one night plus tax fee. If booked through a third party, please refer back to their policies.",
  },
  {
    icon: "/svg14.svg",
    q: "How much do you authorize for incidentals?",
    a: "Upon check-in, a $100 will be placed on your debit or credit card to cover incidentals during your stay. This hold will be released 7-10 business days after your departure depending on your issuing bank. Cash is not accepted for incidentals.",
  },
  {
    icon: "/svg15.svg",
    q: "What forms of payment do you accept at check-in?",
    a: "At check-in, guests must provide a credit card and photo identification which the Front Desk will charge for the anticipated balance of the stay including taxes and resort fee.",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader activeItem="Home" />
      <main className="w-full min-w-0">
        <Hero />
        <VillasIntro />
        <Amenities />
        <Section7Banner />
        <Townhomes />
        <GalleryRow />
        <BlogFaq />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/section0.png"
        alt="Family enjoying the resort water park and lazy river"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative z-10 flex min-h-0 min-h-[100dvh] flex-1 flex-col">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-end px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-6 sm:pb-3 sm:pt-28 md:px-10 md:pb-4">
          <div className="mx-auto flex w-full min-w-0 max-w-[min(100%,1380px)] flex-col items-center text-center">
            <div className="mb-2 flex w-full justify-center md:mb-3">
              <Image
                src="/sun-png0.png"
                alt=""
                width={81}
                height={60}
                className="h-[60px] w-auto object-contain"
              />
            </div>
            <h1 className="w-full max-w-5xl px-1 font-sans text-[clamp(1.75rem,5vw+0.35rem,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-balance text-white sm:px-0 sm:leading-[1.08]">
              Your Ultimate <span className="text-brand-orange">Orlando</span> Basecamp.
            </h1>
            <p className="mt-3 w-full max-w-3xl px-1 text-center text-pretty text-base font-medium leading-snug text-white/95 sm:mt-4 sm:px-0 sm:text-lg md:mt-5 md:text-2xl lg:text-[32px] lg:leading-tight">
              Find a spacious two-story suite near the magic.
            </p>
            <div
              id="hero-booking-bar"
              className="mt-2 flex w-full flex-col items-stretch sm:mt-3"
            >
              <HeroBookingBar />
            </div>
          </div>
        </div>
        <div className="w-full">
          <HeroWaves />
        </div>
      </div>
    </section>
  );
}

const villasIntroMask: CSSProperties = {
  WebkitMaskImage: "url(/kidswim2-mask.svg)",
  maskImage: "url(/kidswim2-mask.svg)",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

function VillasIntro() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-[72px]">
      <div className="mx-auto flex w-full min-w-0 max-w-[1400px] flex-col items-center gap-8 sm:gap-10 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="w-full min-w-0 max-w-full shrink-0 lg:max-w-[min(100%,_810px)] lg:pr-[30px]">
          <h2 className="m-0 text-balance font-sans">
            <span className="block text-[clamp(1.35rem,4.5vw+0.2rem,2.0625rem)] font-normal leading-tight text-brand-orange">
              Spacious Vacation Villas in
            </span>
            <span className="mt-1 block text-[clamp(2.25rem,6.5vw+0.4rem,4.5625rem)] font-bold leading-[0.92] text-brand-green sm:mt-0">
              Kissimmee
            </span>
          </h2>
          <div className="mt-6 text-[clamp(1rem,2.2vw+0.65rem,1.375rem)] font-normal leading-[1.65] text-black sm:mt-8 sm:leading-[36.3px]">
            <p className="m-0 max-w-2xl">
              Welcome To FantasyWorld in Lake Buena Vista South. We are a family friendly vacation resort in
              Kissimmee, Florida offering spacious two-bedroom vacation villas at an affordable price.
            </p>
            <p className="m-0 mt-6 max-w-2xl">
              Enjoy and relax in our Waterpark area which includes two- 3 story water slides, a large resort pool, Lazy
              River, Kid’s Splash pad, pool side activities and hot tubs. In addition, there are endless resort amenities
              throughout our 24-acre property.
            </p>
          </div>
        </div>
        <div className="flex w-full min-w-0 max-w-[485.7px] flex-1 flex-col items-center justify-center lg:max-w-[485.7px]">
          <div className="relative w-full max-w-[451.7px] [aspect-ratio:451.7/475.52]">
            <div className="absolute inset-0" style={villasIntroMask}>
              <Image
                src="/boy-bubble.png"
                alt="Family fun at FantasyWorld Resort, Kissimmee"
                width={486}
                height={476}
                className="h-full w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Figma: node 113:97 — “Something for Everyone” grid + 9-up partner mark strip (one section). */
function Amenities() {
  return (
    <section className="bg-white p-2.5 px-3 pt-4 pb-12 sm:px-6 sm:pb-16 md:px-[75px]">
      <h2 className="mx-auto max-w-[min(100%,28rem)] px-2 text-center font-sans text-[clamp(1.5rem,3.2vw+0.65rem,3.125rem)] font-semibold leading-tight sm:max-w-5xl sm:px-0 sm:leading-[0.9] md:leading-[45px]">
        <span className="text-brand-orange">Something for </span>
        <span className="text-brand-green font-bold">Everyone</span>
      </h2>
      <div className="mx-auto mt-8 grid w-full min-w-0 max-w-[1230px] grid-cols-1 gap-3 min-[500px]:grid-cols-2 sm:mt-12 lg:mt-14 lg:grid-cols-4">
        {amenities.map(({ img, label }) => (
          <div
            key={label}
            className="relative flex h-[min(72vw,420px)] w-full min-w-0 flex-col overflow-hidden rounded-[15px] sm:h-[400px] lg:h-[435px]"
          >
            <div className="relative min-h-0 w-full min-w-0 flex-1 overflow-hidden">
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 500px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>
            <div className="shrink-0 bg-brand-green-card px-3 text-center sm:px-5">
              <p className="py-4 text-[clamp(0.95rem,1.2vw+0.55rem,1.3125rem)] font-semibold leading-snug text-white sm:pt-[24.5px] sm:pb-[24.8px] sm:leading-[27.3px]">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ul className="m-0 mx-auto grid w-full min-w-0 max-w-[1320px] list-none grid-cols-2 place-items-center gap-x-1 gap-y-5 p-0 pt-6 min-[500px]:grid-cols-3 min-[500px]:gap-y-6 min-[500px]:pt-[30px] sm:grid-cols-3 md:grid-cols-4 md:gap-x-2 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9">
        {partnerLogos.map((name) => (
          <li
            key={name}
            className="flex min-h-14 w-full min-w-0 max-w-[146.66px] items-center justify-center justify-self-center px-1"
          >
            <Image
              src={`/${name}.png`}
              alt=""
              width={100}
              height={75}
              className="h-auto w-full max-h-14 max-w-[100px] object-contain sm:max-h-[75px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Section7Banner() {
  return (
    <div className="relative h-20 w-full min-w-0 overflow-hidden sm:h-24 md:h-32">
      <Image src="/section7.png" alt="" fill className="object-cover object-center" sizes="100vw" />
    </div>
  );
}

/** Figma: node 113:172 — Luxury / 2 Story Townhomes, two columns + image + orange blob. */
function Townhomes() {
  return (
    <section className="relative min-h-0 min-w-0 overflow-hidden bg-brand-green-section px-5 pt-14 pb-[4.5rem] sm:px-5 sm:pt-16 sm:pb-20 md:pb-[4.5rem] lg:px-6 lg:pt-[3.6rem] lg:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-y-0 left-0 w-[min(100%,52%)]">
          <Image
            src="/image0.png"
            alt=""
            fill
            className="object-cover object-left opacity-40"
            sizes="(max-width: 1024px) 0px, 52vw"
            priority={false}
          />
        </div>
        <Image
          src="/image0.png"
          alt=""
          fill
          className="object-cover opacity-[0.22] lg:opacity-0"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-6 lg:gap-x-4 xl:gap-8">
        <div className="min-w-0 flex-1 max-lg:max-w-2xl lg:max-w-[min(100%,48rem)] lg:pr-4">
          <h2 className="text-[clamp(2.5rem,5.5vw+0.3rem,4.5625rem)] font-bold leading-[0.92] text-white">Luxury</h2>
          <p className="mt-2 font-normal leading-tight text-brand-orange sm:mt-1 [font-size:clamp(1.25rem,2.2vw+0.5rem,2rem)]">
            2 Story Townhomes
          </p>
          <div className="mt-6 space-y-6 sm:mt-7">
            <p className="max-w-xl text-[clamp(1rem,0.4vw+0.85rem,1.375rem)] font-normal leading-[1.65] text-[#cecece] md:leading-[36.3px]">
              FantasyWorld Resort offers two-story Mediterranean style vacation villas in Kissimmee that can
              accommodate parties up to 6!
            </p>
            <p className="max-w-xl text-[clamp(1rem,0.4vw+0.85rem,1.375rem)] font-normal leading-[1.65] text-[#cecece] md:leading-[36.3px]">
              All FantasyWorld villas are fully equipped with full kitchens, washers and dryers, two separate bedrooms,
              wireless internet access and TV’s.
            </p>
          </div>
          <div className="mt-6 flex w-full min-w-0 max-w-[31rem] flex-col gap-3 pt-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-0">
            <div className="w-full pr-0 sm:max-w-[15rem] sm:pr-5">
              <Link
                href={BOOK}
                className="inline-flex w-full min-w-0 max-w-[220px] items-center justify-center gap-[17px] rounded-[40px] border-[3px] border-brand-orange bg-brand-orange px-7 py-5 text-base font-bold uppercase leading-4 text-white transition hover:brightness-110"
              >
                <span>Book Now</span>
                <Image src="/svg4.svg" alt="" width={19} height={16} className="h-4 w-[19px] shrink-0" />
              </Link>
            </div>
            <div className="w-full sm:max-w-[15rem]">
              <Link
                href={BOOK}
                className="inline-flex w-full min-w-0 max-w-[220px] items-center justify-center gap-[17px] rounded-[40px] border-[3px] border-brand-orange bg-transparent px-7 py-5 text-base font-bold uppercase leading-4 text-white transition hover:bg-white/10"
              >
                <span>Learn More</span>
                <Image src="/svg5.svg" alt="" width={19} height={16} className="h-4 w-[19px] shrink-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-[590px] flex-1 lg:mx-0">
          <div
            className="pointer-events-none absolute -right-[8%] -top-8 z-0 w-[min(100%,24rem)] max-w-[420px] sm:-right-4 sm:w-[min(100%,28rem)] lg:-right-6 lg:top-[-3.3rem] lg:aspect-[616/643] lg:w-[58%] lg:max-w-none"
            aria-hidden
          >
            <Image
              src="/townhomes-orange-blob.png"
              alt=""
              width={681}
              height={711}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 50vw, 30vw"
            />
          </div>
          <TownhomesCarousel />
        </div>
      </div>
    </section>
  );
}

/** Figma: node 113-223 — brand bar + bottom wave into Blog/FAQ. */
function GalleryRow() {
  return (
    <section
      className="w-full min-w-0 overflow-x-clip bg-brand-green-section"
      aria-hidden
    >
      <div className="mx-auto w-full min-w-0 max-w-[1230px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[105px]">
        <div
          className="h-px min-h-px w-full shrink-0 bg-white/25"
        />
        <div className="h-[50px] w-full shrink-0" />
      </div>
      <div className="h-[83px] w-full min-w-0 select-none" aria-hidden>
        <div className="h-full w-full rotate-180">
          <Image
            src="/gallery-section-wave.svg"
            alt=""
            width={2161}
            height={83}
            className="h-[83px] w-full min-w-0 object-fill"
            quality={100}
            priority={false}
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

/** Figma: node 113-229 – Blog & FAQ, two columns, sun, teal read-more, FAQ rows. */
function BlogFaq() {
  return (
    <section className="relative min-w-0 overflow-hidden bg-[#f0f0ee] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-[3.5rem] xl:px-[105px]">
      <div className="absolute inset-0 flex justify-center opacity-15" aria-hidden>
        <div className="absolute inset-y-0 left-[23%] w-[52.5%] max-w-[800px]">
          <Image
            src="/sun-png0.png"
            alt=""
            fill
            className="object-contain object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div
        className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1230px] flex-col gap-10 sm:gap-12 lg:min-h-0 lg:flex-row lg:items-stretch lg:gap-0"
      >
        <div className="min-w-0 max-w-full rounded-none lg:max-w-[min(100%,44rem)] lg:pr-10 xl:pr-16 2xl:pr-[5.5rem]">
          <h2 className="text-balance [font-size:clamp(1.9rem,3.5vw+0.3rem,3.125rem)]">
            <span className="font-semibold leading-[0.9] text-brand-orange sm:leading-[45px]">Blog &amp; </span>
            <span className="font-bold leading-[0.9] text-[#016c3e] sm:leading-[45px]">FAQ&apos;s</span>
          </h2>
          <div className="mt-5 min-h-0 w-full text-black sm:min-h-0">
            <p className="m-0 text-base font-normal leading-[29.7px]">To learn more about FantasyWorld Attractions, you can explore</p>
            <p className="m-0 text-base font-normal leading-[29.7px]">
              check out our FAQ or browse our information-packed blog.
            </p>
          </div>
          <ul className="m-0 mt-6 grid w-full list-none grid-cols-1 gap-y-[35px] p-0 sm:mt-7">
            <li>
              <BlogCard
                img="/bigstock-garden-of-lights-285667-600-x-423-jpg0.png"
                title="Christmas Celebration at SeaWorld"
                excerpt="The holiday season is just around the corner, and SeaWorld Orlando’s Christmas Celebration is gearing up to offer a spectacular"
              />
            </li>
            <li>
              <BlogCard
                img="/lazy-falls-family-600-x-400-jpg0.png"
                title="Holiday Travel Tips"
                excerpt="Whether you’re heading to Central Florida to see family or to treat the family to a special vacation, travel during"
              />
            </li>
          </ul>
          <Link
            href={BOOK}
            className="mt-5 inline-flex min-w-0 max-w-full items-center justify-center gap-[17px] rounded-[40px] border-[3px] border-brand-orange bg-brand-orange px-7 py-5 text-base font-bold uppercase leading-4 text-white transition hover:brightness-110 sm:mt-6"
            aria-label="View our blog"
          >
            View Our Blog
            <Image src="/svg4.svg" alt="" width={19} height={16} className="h-4 w-[19px] shrink-0" />
          </Link>
        </div>
        <div className="min-w-0 w-full max-w-full flex-1">
          <div className="flex w-full min-w-0 flex-col">
            <div className="flex w-full min-w-0 flex-col gap-[25px]">
              {faq.map(({ q, a }) => (
                <details
                  key={q}
                  className="min-w-0 overflow-hidden rounded-[15px] bg-[rgba(243,243,243,0.65)] open:bg-white/90"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[15px] pl-5 pr-5 marker:hidden sm:pl-5 sm:pr-5 [&::-webkit-details-marker]:hidden">
                    <span
                      className="min-w-0 flex-1 break-words text-left text-[22px] font-bold italic leading-[1.1] text-brand-green"
                      style={{ fontFamily: "var(--font-roboto-condensed), ui-sans-serif, sans-serif" }}
                    >
                      {q}
                    </span>
                    <Image src="/svg9.svg" alt="" width={22} height={22} className="shrink-0 self-center" />
                  </summary>
                  <p className="m-0 border-t border-black/5 px-5 pb-4 pl-5 pr-5 text-sm leading-relaxed text-[#444] sm:pl-5 sm:pr-5 sm:pt-0">
                    {a}
                  </p>
                </details>
              ))}
            </div>
            <Link
              href={BOOK}
              className="mt-5 inline-flex min-w-0 max-w-full items-center justify-center gap-[17px] rounded-[40px] border-[3px] border-brand-orange bg-brand-orange px-7 py-5 text-base font-bold uppercase leading-4 text-white transition hover:brightness-110 sm:mt-5"
              aria-label="View all frequently asked questions"
            >
              View All FAQ&apos;s
              <Image src="/svg4.svg" alt="" width={19} height={16} className="h-4 w-[19px] shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, title, excerpt }: { img: string; title: string; excerpt: string }) {
  return (
    <article className="flex min-w-0 flex-col overflow-clip rounded-[13px] border border-[#dbdbdb] bg-white sm:min-h-[176px] sm:flex-row sm:items-stretch">
      <div className="relative z-[2] h-44 w-full min-w-0 shrink-0 sm:h-full sm:min-h-[176px] sm:w-[246px] sm:shrink-0 sm:pr-5">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover sm:rounded-tl-[15px] sm:rounded-bl-[15px]"
          sizes="(max-width:640px) 100vw, 246px"
        />
      </div>
      <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-center gap-2.5 p-3 pt-2.5 pl-3 pr-1.5 sm:pl-3 sm:pr-1.5 sm:pt-[7px] sm:pb-7">
        <h3 className="m-0 text-lg font-semibold leading-[1.3] text-[#292929] [font-size:1.125rem]">
          {title}
        </h3>
        <p className="m-0 text-sm font-normal leading-[21px] text-[#777]">{excerpt}</p>
        <Link
          href={BOOK}
          className="m-0 self-start text-base font-medium [line-height:26.4px] text-brand-teal hover:underline"
        >
          Read More »
        </Link>
      </div>
    </article>
  );
}
