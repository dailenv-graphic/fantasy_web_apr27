import Image from "next/image";
import { OfferBookingLink } from "@/components/special-offers/offer-booking-link";
import { bookingAvailabilityUrl } from "@/lib/build-date-url";

const pillCtaClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-orange px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105";

const pillCtaMobileOnGreenClassName =
  "box-border flex w-full max-w-full min-h-11 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-orange px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105";

const pillCtaMobileOnOrangeClassName =
  "box-border flex w-full max-w-full min-h-11 items-center justify-center rounded-full border-2 border-white bg-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange shadow-sm transition hover:bg-white/90";

/** Shared panel height so Military + First Responder cards align. */
const featuredPanelHeight =
  "h-[22rem] sm:h-[23rem] md:h-[20rem] lg:h-[22rem] xl:h-[23rem]";

type FeaturedRowProps = {
  title: string;
  description: string;
  ctaLabel: string;
  bookingBase: string;
  imageSrc: string;
  imageAlt: string;
  imageContain?: boolean;
  panelClassName: string;
  sideBlurb: string;
  reverse?: boolean;
  /** Mobile panel CTA only (`md:hidden`). Orange panel uses inverted white/orange styling. */
  mobileCtaVariant?: "on-green" | "on-orange";
};

function FeaturedOfferRow({
  title,
  description,
  ctaLabel,
  bookingBase,
  imageSrc,
  imageAlt,
  imageContain,
  panelClassName,
  sideBlurb,
  reverse,
  mobileCtaVariant = "on-green",
}: FeaturedRowProps) {
  const pillCtaMobileClassName =
    mobileCtaVariant === "on-orange"
      ? pillCtaMobileOnOrangeClassName
      : pillCtaMobileOnGreenClassName;
  const panel = (
    <div
      className={`min-w-0 flex-1 overflow-hidden rounded-[2.5rem] shadow-[0_16px_48px_rgba(0,0,0,0.12)] ${featuredPanelHeight} ${panelClassName} ${
        reverse ? "order-1 lg:order-2" : ""
      }`}
    >
      <div
        className={`grid h-full min-h-0 ${reverse ? "md:grid-cols-[1fr_1.05fr]" : "md:grid-cols-[1.05fr_1fr]"}`}
      >
        <div
          className={`relative min-h-[12rem] bg-black/10 md:h-full md:min-h-0 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={
              imageContain
                ? "object-contain object-center p-6 md:p-8"
                : "object-cover object-center"
            }
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className={`flex h-full min-h-0 w-full min-w-0 flex-col justify-center px-6 py-8 text-white sm:px-9 sm:py-10 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <h3 className="m-0 font-sans text-2xl font-bold leading-tight sm:text-[1.75rem]">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-[1.65]">
            {description}
          </p>
          <div className="mt-6 w-full min-w-0 md:hidden">
            <OfferBookingLink bookingBase={bookingBase} className={pillCtaMobileClassName}>
              {ctaLabel}
            </OfferBookingLink>
          </div>
        </div>
      </div>
    </div>
  );

  const side = (
    <aside
      className={`flex shrink-0 flex-col justify-center gap-5 self-center md:max-w-[14rem] lg:max-w-[16rem] lg:self-stretch ${
        reverse ? "order-2 lg:order-1 lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      }`}
    >
      <p className="m-0 text-base font-medium leading-relaxed text-[#333] sm:text-lg">{sideBlurb}</p>
      <OfferBookingLink bookingBase={bookingBase} className={`${pillCtaClassName} hidden md:inline-flex`}>
        {ctaLabel}
      </OfferBookingLink>
    </aside>
  );

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-stretch ${
        reverse ? "lg:pl-[6%] xl:pl-[10%]" : "lg:pr-[4%] xl:pr-[6%]"
      }`}
    >
      {reverse ? (
        <>
          {side}
          {panel}
        </>
      ) : (
        <>
          {panel}
          {side}
        </>
      )}
    </div>
  );
}

export function FeaturedServiceOffers() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-[min(100%,76rem)]">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 md:mb-16">
          <p className="m-0 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
            Service &amp; Sacrifice
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-brand-green">
            Honoring Those Who Serve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#444] sm:text-lg">
            We&apos;re grateful for the men and women who protect and serve our communities. These exclusive
            rates are our way of saying thank you—so you can relax, recharge, and make memories near the magic.
          </p>
        </header>

        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          <FeaturedOfferRow
            title="Military Appreciation"
            description="You served. Now it's our turn to say thank you, with up to 30% off our Best Available Rate."
            ctaLabel="Claim Your Discount"
            bookingBase={bookingAvailabilityUrl("SERVED")}
            imageSrc="/special-offers/military-logo.jpg"
            imageAlt="Military appreciation discount"
            panelClassName="bg-brand-green"
            sideBlurb="Active duty, veterans, and military families save up to 30% on their stay."
          />

          <FeaturedOfferRow
            title="First Responders"
            description="Every day you show up for us. The least we can do is roll out the welcome mat. Enjoy up to 25% off our Best Available Rate, because you've more than earned a break."
            ctaLabel="Book Your Stay Here"
            bookingBase={bookingAvailabilityUrl("PCFD")}
            imageSrc="/special-offers/first-responders-v2.jpg"
            imageAlt="First responders discount"
            panelClassName="bg-brand-orange"
            sideBlurb="Police, fire, EMS, and other first responders qualify for up to 25% off."
            reverse
            mobileCtaVariant="on-orange"
          />
        </div>
      </div>
    </section>
  );
}
