import { BookNowNavLink } from "@/components/book-now-nav-link";
import Image from "next/image";
import Link from "next/link";

const BOOK = "https://fantasyworldresort.com/";

const nav = [
  "Home",
  "Accommodations",
  "Amenities",
  "Entertainment",
  "Location",
  "Gallery",
] as const;

type SiteHeaderProps = {
  /** Highlights a nav item with green text + orange bottom stroke (Figma / live site). */
  activeItem?: (typeof nav)[number];
};

export function SiteHeader({ activeItem }: SiteHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4 md:pt-5">
      <div className="mx-auto flex w-full max-w-[min(100%,90rem)] items-center justify-between gap-2 rounded-full bg-white py-2 pl-3 pr-2 shadow-md ring-1 ring-black/5 sm:pl-5 sm:pr-2 md:pl-6">
        <Link href="/" className="shrink-0 pl-1">
          <Image
            src="/link-header-logo-png0.png"
            alt="FantasyWorld Resort"
            width={215}
            height={49}
            className="h-9 w-auto sm:h-10 md:h-11"
            priority
          />
        </Link>
        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-4 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#666666] min-[1100px]:flex min-[1100px]:gap-x-6">
          {nav.map((label) => {
            const active = activeItem && label === activeItem;
            return (
              <Link
                key={label}
                href={BOOK}
                className={
                  active
                    ? "border-b-[3px] border-brand-orange pb-0.5 text-brand-green"
                    : "border-b-[3px] border-transparent pb-0.5 transition hover:text-brand-green"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <details className="relative min-[1100px]:hidden">
          <summary className="list-none rounded-full border border-black/10 px-2.5 py-2 text-[11px] font-bold uppercase text-brand-green marker:hidden sm:px-3 sm:text-xs [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-black/10 bg-white py-2 shadow-xl">
            {nav.map((label) => {
              const active = activeItem && label === activeItem;
              return (
                <Link
                  key={label}
                  href={BOOK}
                  className={`block px-4 py-2.5 text-sm font-semibold uppercase ${
                    active ? "text-brand-green" : "text-[#666666]"
                  } hover:bg-black/5`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </details>
        <BookNowNavLink />
      </div>
    </header>
  );
}
