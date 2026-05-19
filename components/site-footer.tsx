import Image from "next/image";
import Link from "next/link";

import { BOOKING_BAR_HREF, HOME_HREF } from "@/lib/site-links";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative min-w-0 overflow-x-clip bg-brand-green-dark text-white">
      <Image
        src="/image2.png"
        alt=""
        fill
        className="object-cover opacity-60"
        sizes="100vw"
        aria-hidden
      />
      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[83px] overflow-hidden opacity-90">
          <Image src="/svg17.svg" alt="" width={2162} height={83} className="h-[83px] w-auto min-w-full max-w-none" />
        </div>
        <div className="mx-auto max-w-[1362px] px-4 pt-20 pb-12 sm:px-6 sm:pb-16 sm:pt-24 md:px-8 md:pt-[7.5rem] lg:px-10">
          <div className="flex min-w-0 flex-col gap-6 lg:min-h-[5.125rem] lg:flex-row lg:items-center lg:gap-8">
            <div className="flex min-w-0 flex-col items-center gap-4 sm:gap-6 md:flex-row md:items-center md:justify-center md:px-2.5 lg:flex-1 lg:justify-start lg:gap-8 lg:pl-0 lg:pr-2">
              <div className="size-[94px] shrink-0">
                <Image
                  src="/logo-circle-png0.png"
                  width={94}
                  height={94}
                  alt=""
                  className="h-full w-full object-contain opacity-95"
                />
              </div>
              <p className="max-w-[32rem] text-balance text-center text-2xl font-semibold leading-tight text-white md:max-w-none md:flex-1 md:text-left md:text-3xl lg:max-w-[32rem] lg:text-[2.25rem] lg:leading-[1.3]">
                Start planning your trip with FantasyWorld Resort
              </p>
            </div>
            <div className="flex w-full justify-center sm:shrink-0 md:w-auto lg:pl-1 lg:pr-0">
              <Link
                href={BOOKING_BAR_HREF}
                className="inline-flex w-full min-h-12 max-w-sm items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green sm:max-w-[14rem] sm:px-8 sm:py-4 md:max-w-[15rem] lg:max-w-[15rem] lg:px-8"
              >
                Book Now
                <Image src="/svg18.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-4">
            <div className="min-w-0 overflow-hidden rounded-[20px] border-[12px] border-brand-orange bg-brand-orange p-0 sm:border-[15px]">
              <div className="overflow-hidden rounded-[20px] bg-white">
                <div className="relative h-[200px] w-full">
                  <Image src="/img-footer-map0.png" alt="Map" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="bg-white p-5 text-center sm:px-6 sm:py-6">
                  <p className="m-0 text-base font-bold text-[#3f444b]">Get Driving Directions :</p>
                  <p className="mt-1 m-0 text-base leading-relaxed text-[#3f444b]">5005 Kyngs Heath Rd | Kissimmee, FL 34746</p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-[20px] bg-brand-orange p-[15px]">
              <div className="h-full rounded-[20px] bg-white p-5 text-center sm:p-6">
                <div className="mb-4 flex justify-center">
                  <Image src="/svg19.svg" alt="" width={50} height={50} />
                </div>
                <h3 className="m-0 text-[1.5rem] font-bold tracking-[0.08em] text-brand-green sm:text-[2rem]">Contact Us</h3>
                <p className="m-0 mt-4 text-base font-bold text-black">Phone :</p>
                <a href="tel:+14073968530" className="mt-0.5 text-lg font-bold text-brand-green hover:underline">
                  (407) 396-8530
                </a>
              </div>
            </div>
            <div className="min-w-0 rounded-[20px] bg-brand-orange p-5 sm:p-5">
              <div className="h-full rounded-[20px] bg-white p-5 text-center sm:p-5">
                <div className="mb-3 flex justify-center text-brand-green">
                  <EnvelopeIcon className="size-[50px]" />
                </div>
                <h3 className="m-0 text-[1.5rem] font-bold tracking-[0.08em] text-brand-green sm:text-[2rem]">Drop A Line</h3>
                <p className="m-0 mt-4 text-base text-black">
                  <span className="font-bold">Information :</span>
                  <br />
                  <a href="mailto:info@fantasyworldresort.com" className="mt-0.5 inline-block text-base font-bold text-brand-green hover:underline">
                    info@fantasyworldresort.com
                  </a>
                </p>
                <p className="m-0 mt-3 text-base text-black">
                  <span className="font-bold">Booking :</span>
                  <br />
                  <a href="mailto:bookings@fantasyworldresort.com" className="mt-0.5 inline-block text-base font-bold text-brand-green hover:underline">
                    bookings@fantasyworldresort.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-full min-w-0 flex-col items-center gap-6 text-center sm:mt-12 sm:gap-7 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:pt-0">
            <h3 className="m-0 w-full text-xl font-bold sm:text-2xl lg:w-auto lg:max-w-[20rem] lg:shrink-0 lg:text-right">Rewards Program :</h3>
            <div className="flex w-full min-w-0 flex-1 justify-center">
              <Link
                href={HOME_HREF}
                className="inline-flex w-full min-h-12 min-w-0 max-w-2xl items-center justify-center rounded-full bg-brand-orange px-4 py-3.5 text-center text-xs font-bold uppercase leading-tight text-white transition hover:bg-white hover:text-brand-green sm:px-6 sm:py-4 sm:text-sm lg:w-auto"
              >
                Click Here for More Information &amp; Great Benefits
              </Link>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center gap-2 sm:gap-3 lg:w-auto lg:max-w-[20rem] lg:shrink-0 lg:items-end lg:gap-3 lg:self-center lg:text-right">
              <h3 className="m-0 w-full text-xl font-bold sm:text-2xl lg:self-end">Find us also :</h3>
              <div className="flex w-full items-center justify-center gap-1.5 lg:justify-end">
                <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-white/5">
                  <Image src="/svg21.svg" alt="Facebook" width={25} height={25} className="h-[25px] w-[25px]" />
                </div>
                <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-white/5">
                  <Image src="/svg22.svg" alt="Tripadvisor" width={25} height={25} className="h-[25px] w-[25px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-white px-3 py-5 sm:px-4 sm:py-7 md:py-8">
          <div className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-end sm:gap-0 sm:px-2.5 sm:pt-1">
            <p className="m-0 w-full min-w-0 text-center text-xs leading-4 text-[#3f444b] sm:max-w-[32rem] sm:flex-1 sm:pr-2 sm:text-right sm:text-base">
              Copyright © {new Date().getFullYear()} FantasyWorld Resort. All Rights Reserved.
            </p>
            <div className="shrink-0 pl-0 sm:pl-5">
              <Link href={HOME_HREF} className="m-0 text-sm font-semibold text-brand-green hover:underline sm:text-base">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
