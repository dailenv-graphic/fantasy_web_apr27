"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type MouseEvent } from "react";

const BOOKING_BAR_HREF = "/#hero-booking-bar";

const BASE_CLASS =
  "flex min-w-0 shrink-0 items-center gap-1.5 rounded-full border-[3px] border-brand-orange bg-brand-orange px-2.5 py-2 text-[0.65rem] font-bold uppercase leading-tight text-white transition hover:brightness-110 min-[400px]:gap-2 min-[400px]:px-3.5 min-[400px]:text-xs sm:px-6 sm:py-3 sm:text-sm";

/** Hides the nav CTA when the in-page booking/search bar is in the viewport. */
export function BookNowNavLink() {
  const pathname = usePathname();
  const [bookingInView, setBookingInView] = useState(false);

  const scrollToBookingBar = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    const el = document.getElementById("hero-booking-bar");
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  useEffect(() => {
    const el = document.getElementById("hero-booking-bar");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry) setBookingInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="shrink-0"
      {...(bookingInView ? { inert: true as const } : {})}
    >
      <Link
        href={BOOKING_BAR_HREF}
        onClick={scrollToBookingBar}
        className={`${BASE_CLASS}${
          bookingInView ? " pointer-events-none invisible" : ""
        }`}
      >
        Book Now
        <Image src="/svg0.svg" alt="" width={19} height={16} className="h-4 w-auto" />
      </Link>
    </div>
  );
}
