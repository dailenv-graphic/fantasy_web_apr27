import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroBookingBar } from "@/components/hero-booking-bar";
import { HeroWaves } from "@/components/hero-waves";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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

function Townhomes() {
  return (
    <section className="relative min-h-0 min-w-0 overflow-hidden bg-brand-green-section py-12 sm:py-16 md:py-24">
      <Image
        src="/image0.png"
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1230px] px-4 sm:px-6 md:px-8">
        <h2 className="text-[clamp(2rem,4.5vw+0.5rem,4.5rem)] font-bold leading-tight text-white">Luxury</h2>
        <p className="mt-2 text-[clamp(1.25rem,3vw+0.5rem,2rem)] leading-tight text-brand-orange">
          2 Story Townhomes
        </p>
        <p className="mt-6 max-w-xl text-[clamp(1rem,2vw+0.55rem,1.375rem)] leading-[1.65] text-[#cecece] sm:mt-8">
          FantasyWorld Resort offers two-story Mediterranean style vacation villas in Kissimmee that can accommodate
          parties up to 6!
        </p>
        <p className="mt-4 max-w-xl text-[clamp(1rem,2vw+0.55rem,1.375rem)] leading-[1.65] text-[#cecece]">
          All FantasyWorld villas are fully equipped with full kitchens, washers and dryers, two separate bedrooms,
          wireless internet access and TV’s.
        </p>
        <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href={BOOK}
            className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green sm:w-auto sm:px-8 sm:py-4"
          >
            Book Now
            <Image src="/svg4.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
          </Link>
          <Link
            href={BOOK}
            className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-transparent px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
          >
            Learn More
            <Image src="/svg5.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryRow() {
  const imgs = ["/gallery-020.png", "/lazy-falls-family-600-x-400-jpg0.png", "/image1.png", "/image2.png"] as const;
  return (
    <section className="grid w-full min-w-0 grid-cols-2 md:grid-cols-4">
      {imgs.map((src) => (
        <div key={src} className="relative aspect-[4/3] min-h-0 w-full min-w-0">
          <Image src={src} alt="" fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
        </div>
      ))}
    </section>
  );
}

function BlogFaq() {
  return (
    <section className="relative min-w-0 overflow-hidden bg-[#f0f0ee] py-12 sm:py-16 md:py-24">
      <Image src="/image1.png" alt="" fill className="object-cover opacity-15" sizes="100vw" aria-hidden />
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1230px] px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-balance text-[clamp(1.75rem,3.5vw+0.5rem,3.125rem)] leading-tight sm:leading-[45px]">
              <span className="text-brand-green">Blog &amp; </span>
              <span className="text-brand-orange">FAQ&apos;s</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-black sm:text-lg">
              To learn more about FantasyWorld Attractions, you can explore check out our FAQ or browse our
              information-packed blog.
            </p>
            <div className="mt-8 space-y-6">
              <BlogCard
                img="/bigstock-garden-of-lights-285667-600-x-423-jpg0.png"
                title="Christmas Celebration at SeaWorld"
                excerpt="The holiday season is just around the corner, and SeaWorld Orlando’s Christmas Celebration is gearing up to offer a spectacular"
              />
              <BlogCard
                img="/lazy-falls-family-600-x-400-jpg0.png"
                title="Holiday Travel Tips"
                excerpt="Whether you’re heading to Central Florida to see family or to treat the family to a special vacation, travel during"
              />
            </div>
            <Link
              href={BOOK}
              className="mt-6 inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:border-brand-green hover:bg-brand-green sm:mt-8 sm:w-auto sm:px-8 sm:py-4"
            >
              View Our Blog
              <Image src="/svg8.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
            </Link>
          </div>
          <div className="min-w-0">
            <div className="space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="overflow-hidden rounded-[15px] bg-[rgba(243,243,243,0.85)] shadow-sm ring-1 ring-black/5 open:bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-3 py-3.5 marker:hidden sm:px-4 sm:py-4 [&::-webkit-details-marker]:hidden">
                    <span
                      className="min-w-0 break-words text-left text-base font-bold italic leading-snug text-brand-green sm:text-lg md:text-[22px] md:leading-tight"
                      style={{ fontFamily: "var(--font-roboto-condensed), sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <Image src={item.icon} alt="" width={22} height={22} className="mt-0.5 shrink-0 opacity-80" />
                  </summary>
                  <p className="border-t border-black/10 px-3 pb-4 pt-0 text-sm leading-relaxed text-[#444] sm:px-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            <Link
              href={BOOK}
              className="mt-6 inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:border-brand-green hover:bg-brand-green sm:mt-8 sm:w-auto sm:px-8 sm:py-4"
            >
              View All FAQ&apos;s
              <Image src="/svg16.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, title, excerpt }: { img: string; title: string; excerpt: string }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[13px] border border-[#dbdbdb] bg-white shadow-sm sm:flex-row">
      <div className="relative h-40 w-full min-w-0 shrink-0 sm:h-auto sm:w-[42%] sm:min-h-[176px]">
        <Image src={img} alt="" fill className="object-cover" sizes="(max-width:640px) 100vw, 200px" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:pl-5">
        <h3 className="text-lg font-semibold text-[#292929]">{title}</h3>
        <p className="text-sm leading-snug text-[#777777]">{excerpt}</p>
        <Link href={BOOK} className="text-base font-medium text-brand-teal hover:underline">
          Read More »
        </Link>
      </div>
    </article>
  );
}
