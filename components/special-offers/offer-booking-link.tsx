"use client";

import { buildDateUrl } from "@/lib/build-date-url";
import { useMemo } from "react";

type OfferBookingLinkProps = {
  bookingBase: string;
  arrivalDays?: number;
  departureDays?: number;
  className?: string;
  children: React.ReactNode;
};

export function OfferBookingLink({
  bookingBase,
  arrivalDays = 7,
  departureDays = 14,
  className,
  children,
}: OfferBookingLinkProps) {
  const href = useMemo(
    () => buildDateUrl(bookingBase, arrivalDays, departureDays),
    [bookingBase, arrivalDays, departureDays],
  );

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
