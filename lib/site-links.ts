export const HOME_HREF = "/" as const;
export const BOOKING_BAR_HREF = "/#hero-booking-bar" as const;

export function bookingHref(promo?: string) {
  if (!promo?.trim()) return BOOKING_BAR_HREF;
  return `/?promo=${encodeURIComponent(promo.trim())}#hero-booking-bar`;
}
