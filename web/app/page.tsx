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
      <main>
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
        <div className="flex min-h-0 flex-1 flex-col items-center justify-end px-4 pb-2 pt-24 sm:px-6 sm:pb-3 sm:pt-28 md:px-10 md:pb-4">
          <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center text-center">
            <div className="mb-2 flex w-full justify-center md:mb-3">
              <Image
                src="/sun-png0.png"
                alt=""
                width={81}
                height={60}
                className="h-[60px] w-auto object-contain"
              />
            </div>
            <h1 className="w-full max-w-5xl font-sans text-[clamp(2.1rem,5.5vw+0.5rem,4.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-balance text-white">
              Your Ultimate <span className="text-brand-orange">Orlando</span> Basecamp.
            </h1>
            <p className="mt-3 flex w-fit flex-row items-center justify-start text-center text-nowrap text-base font-medium leading-snug text-white/95 sm:mt-4 sm:text-lg md:mt-5 md:text-[32px] md:leading-tight">
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
    <section className="bg-white px-6 py-16 md:px-[72px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="w-full min-w-0 max-w-full shrink-0 lg:max-w-[min(100%,_810px)] lg:pr-[30px]">
          <h2 className="m-0 font-sans">
            <span className="block text-[33px] font-normal leading-[29.7px] text-brand-orange">
              Spacious Vacation Villas in
            </span>
            <span className="mt-0 block text-[clamp(2.5rem,7vw+0.5rem,4.5625rem)] font-bold leading-[0.9] text-brand-green">
              Kissimmee
            </span>
          </h2>
          <div className="mt-8 text-[22px] font-normal leading-[36.3px] text-black">
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
    <section className="bg-white p-2.5 px-4 pt-4 pb-16 sm:px-6 md:px-[75px]">
      <h2 className="mx-auto max-w-5xl text-center font-sans text-[clamp(1.75rem,3.2vw+0.75rem,3.125rem)] font-semibold leading-[0.9] sm:leading-[45px]">
        <span className="text-brand-orange">Something for </span>
        <span className="text-brand-green font-bold">Everyone</span>
      </h2>
      <div className="mx-auto mt-10 grid w-full max-w-[1230px] grid-cols-1 gap-2.5 min-[500px]:grid-cols-2 sm:mt-12 lg:mt-14 lg:grid-cols-4">
        {amenities.map(({ img, label }) => (
          <div
            key={label}
            className="relative flex h-[435px] w-full min-w-0 flex-col overflow-hidden rounded-[15px]"
          >
            <div className="relative min-h-0 w-full flex-1 overflow-hidden">
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            <div className="shrink-0 bg-brand-green-card px-5 text-center">
              <p className="pt-[24.5px] pb-[24.8px] text-[21px] font-semibold leading-[27.3px] text-white">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ul className="m-0 mx-auto grid w-full max-w-[1320px] list-none grid-cols-3 place-items-center gap-x-0 gap-y-6 p-0 pt-8 min-[500px]:pt-[30px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9">
        {partnerLogos.map((name) => (
          <li
            key={name}
            className="flex h-[75px] w-full min-w-0 max-w-[146.66px] items-center justify-center"
          >
            <Image
              src={`/${name}.png`}
              alt=""
              width={100}
              height={75}
              className="h-[75px] w-[100px] object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Section7Banner() {
  return (
    <div className="relative h-24 w-full overflow-hidden md:h-32">
      <Image src="/section7.png" alt="" fill className="object-cover object-center" sizes="100vw" />
    </div>
  );
}

function Townhomes() {
  return (
    <section className="relative overflow-hidden bg-brand-green-section py-16 md:py-24">
      <Image
        src="/image0.png"
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1230px] px-6 md:px-8">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">Luxury</h2>
        <p className="mt-2 text-[32px] leading-tight text-brand-orange">2 Story Townhomes</p>
        <p className="mt-8 max-w-xl text-[22px] leading-[1.65] text-[#cecece]">
          FantasyWorld Resort offers two-story Mediterranean style vacation villas in Kissimmee that can accommodate
          parties up to 6!
        </p>
        <p className="mt-4 max-w-xl text-[22px] leading-[1.65] text-[#cecece]">
          All FantasyWorld villas are fully equipped with full kitchens, washers and dryers, two separate bedrooms,
          wireless internet access and TV’s.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={BOOK}
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green"
          >
            Book Now
            <Image src="/svg4.svg" alt="" width={19} height={16} className="h-4 w-auto" />
          </Link>
          <Link
            href={BOOK}
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-brand-orange bg-transparent px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-white/10"
          >
            Learn More
            <Image src="/svg5.svg" alt="" width={19} height={16} className="h-4 w-auto" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryRow() {
  const imgs = ["/gallery-020.png", "/lazy-falls-family-600-x-400-jpg0.png", "/image1.png", "/image2.png"] as const;
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {imgs.map((src) => (
        <div key={src} className="relative aspect-[4/3]">
          <Image src={src} alt="" fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
        </div>
      ))}
    </section>
  );
}

function BlogFaq() {
  return (
    <section className="relative overflow-hidden bg-[#f0f0ee] py-16 md:py-24">
      <Image src="/image1.png" alt="" fill className="object-cover opacity-15" sizes="100vw" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1230px] px-4 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-[50px] leading-[45px]">
              <span className="text-brand-green">Blog &amp; </span>
              <span className="text-brand-orange">FAQ&apos;s</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-black">
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
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-brand-green hover:border-brand-green"
            >
              View Our Blog
              <Image src="/svg8.svg" alt="" width={19} height={16} className="h-4 w-auto" />
            </Link>
          </div>
          <div>
            <div className="space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="overflow-hidden rounded-[15px] bg-[rgba(243,243,243,0.85)] shadow-sm ring-1 ring-black/5 open:bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span
                      className="text-left text-[22px] font-bold italic leading-tight text-brand-green"
                      style={{ fontFamily: "var(--font-roboto-condensed), sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <Image src={item.icon} alt="" width={22} height={22} className="shrink-0 opacity-80" />
                  </summary>
                  <p className="border-t border-black/10 px-4 pb-4 pt-0 text-sm leading-relaxed text-[#444]">{item.a}</p>
                </details>
              ))}
            </div>
            <Link
              href={BOOK}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-brand-green hover:border-brand-green"
            >
              View All FAQ&apos;s
              <Image src="/svg16.svg" alt="" width={19} height={16} className="h-4 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, title, excerpt }: { img: string; title: string; excerpt: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[13px] border border-[#dbdbdb] bg-white shadow-sm sm:flex-row">
      <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-[42%] sm:min-h-[176px]">
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
