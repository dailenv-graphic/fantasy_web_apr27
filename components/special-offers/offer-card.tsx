import Image from "next/image";
import { OfferBookingLink } from "@/components/special-offers/offer-booking-link";

const ctaClassName =
  "inline-flex w-full min-h-12 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-orange px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105 active:scale-[0.99] sm:text-[0.8rem]";

type OfferCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
} & (
  | {
      linkType: "booking";
      bookingBase: string;
      arrivalDays?: number;
      departureDays?: number;
    }
  | {
      linkType: "external";
      href: string;
    }
);

export function OfferCard(props: OfferCardProps) {
  const { title, description, ctaLabel, imageSrc, imageAlt } = props;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#eef2f0]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="m-0 font-sans text-xl font-bold leading-tight text-brand-green sm:text-[1.35rem]">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a4a4a] sm:text-[0.95rem] sm:leading-[1.65]">
          {description}
        </p>
        <div className="mt-6 pt-1">
          {props.linkType === "booking" ? (
            <OfferBookingLink
              bookingBase={props.bookingBase}
              arrivalDays={props.arrivalDays}
              departureDays={props.departureDays}
              className={ctaClassName}
            >
              {ctaLabel}
            </OfferBookingLink>
          ) : (
            <a href={props.href} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
