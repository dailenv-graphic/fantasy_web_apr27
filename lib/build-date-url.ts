/** Mirrors WP `buildDateUrl(base, arrivalDaysFromNow, departureDaysFromNow)` for IRMNG booking links. */
export function buildDateUrl(
  baseUrl: string,
  arrivalDaysFromNow: number,
  departureDaysFromNow: number,
): string {
  const toYmd = (daysFromNow: number) => {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + daysFromNow);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const arrival = toYmd(arrivalDaysFromNow);
  const departure = toYmd(departureDaysFromNow);

  const hashIndex = baseUrl.indexOf("#");
  if (hashIndex === -1) {
    const url = new URL(baseUrl);
    url.searchParams.set("arrival", arrival);
    url.searchParams.set("departure", departure);
    return url.toString();
  }

  const prefix = baseUrl.slice(0, hashIndex + 1);
  const hash = baseUrl.slice(hashIndex + 1);
  const qIndex = hash.indexOf("?");
  const hashPath = qIndex === -1 ? hash : hash.slice(0, qIndex);
  const query = qIndex === -1 ? "" : hash.slice(qIndex + 1);
  const params = new URLSearchParams(query);
  params.set("arrival", arrival);
  params.set("departure", departure);
  const qs = params.toString();
  return `${prefix}${hashPath}${qs ? `?${qs}` : ""}`;
}

export const BOOKING_AVAILABILITY_BASE =
  "https://secure.fantasyworldresort.com/irmng/#/availability?target=availability&people1=1&people2=0";

export function bookingAvailabilityUrl(promocode: string) {
  return `${BOOKING_AVAILABILITY_BASE}&promocode=${encodeURIComponent(promocode)}`;
}
