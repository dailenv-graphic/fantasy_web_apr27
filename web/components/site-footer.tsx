import Image from "next/image";
import Link from "next/link";

const BOOK = "https://fantasyworldresort.com/";

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
        <div className="mx-auto max-w-[1362px] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:px-8">
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative max-w-xl min-w-0 text-center sm:text-left lg:pl-4">
              <p className="text-balance text-xl font-semibold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                Start planning your trip with FantasyWorld Resort
              </p>
              <div className="pointer-events-none absolute -right-8 top-1/2 hidden w-40 -translate-y-1/2 md:block lg:-right-16 lg:w-48">
                <Image
                  src="/fwr-bear-open-arms-png0.png"
                  alt=""
                  width={350}
                  height={435}
                  className="w-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="pointer-events-none absolute -left-4 top-0 hidden md:block">
                <Image src="/logo-circle-png0.png" width={120} height={120} alt="" className="opacity-90" />
              </div>
            </div>
            <div className="flex shrink-0 justify-center sm:justify-start lg:justify-end">
              <Link
                href={BOOK}
                className="inline-flex min-h-12 w-full min-w-0 max-w-sm items-center justify-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green sm:w-auto sm:px-8 sm:py-4"
              >
                Book Now
                <Image src="/svg18.svg" alt="" width={19} height={16} className="h-4 w-auto shrink-0" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid min-w-0 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="min-w-0 overflow-hidden rounded-[20px] border-8 border-brand-orange bg-brand-orange p-0 sm:border-[12px] md:border-[15px]">
              <div className="overflow-hidden rounded-[20px] bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src="/img-footer-map0.png" alt="Map" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="bg-[#f9fafa] px-6 py-6 text-center">
                  <p className="text-base font-bold text-[#3f444b]">Get Driving Directions :</p>
                  <p className="mt-1 text-base text-[#3f444b]">5005 Kyngs Heath Rd | Kissimmee, FL 34746</p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-[20px] bg-brand-orange p-3 sm:p-4 md:p-[15px]">
              <div className="rounded-[20px] bg-white p-4 text-center sm:p-6">
                <div className="mb-4 flex justify-center">
                  <Image src="/svg19.svg" alt="" width={50} height={50} />
                </div>
                <h3 className="text-[clamp(1.5rem,3vw+0.5rem,2rem)] font-bold tracking-[0.08em] text-brand-green">
                  Contact Us
                </h3>
                <p className="mt-4 text-base font-bold">Phone :</p>
                <a href="tel:+14073968530" className="text-lg font-normal hover:underline">
                  (407) 396-8530
                </a>
                <h3 className="mt-6 text-[clamp(1.5rem,3vw+0.5rem,2rem)] font-bold tracking-[0.08em] text-brand-green sm:mt-8">
                  Drop A Line
                </h3>
                <p className="mt-3 text-base">
                  <span className="font-bold">Information :</span>
                  <br />
                  <a href="mailto:info@fantasyworldresort.com" className="hover:underline">
                    info@fantasyworldresort.com
                  </a>
                </p>
                <p className="mt-3 text-base">
                  <span className="font-bold">Booking :</span>
                  <br />
                  <a href="mailto:bookings@fantasyworldresort.com" className="hover:underline">
                    bookings@fantasyworldresort.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-stretch gap-6 text-center sm:items-center lg:items-end lg:text-right">
              <div className="min-w-0">
                <h3 className="text-xl font-bold sm:text-2xl">Rewards Program :</h3>
                <Link
                  href={BOOK}
                  className="mt-4 inline-flex min-h-12 w-full min-w-0 max-w-md items-center justify-center rounded-full bg-brand-orange px-4 py-3.5 text-center text-xs font-bold uppercase leading-tight text-white transition hover:bg-white hover:text-brand-green sm:inline-flex sm:max-w-none sm:px-6 sm:py-4 sm:text-sm"
                >
                  Click Here for More Information &amp; Great Benefits
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Find us also :</h3>
                <div className="mt-3 flex justify-center gap-2 lg:justify-end">
                  <Image src="/svg21.svg" alt="Facebook" width={50} height={50} className="rounded-md bg-white/10 p-3" />
                  <Image src="/svg22.svg" alt="Tripadvisor" width={50} height={50} className="rounded-md bg-white/10 p-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/20 px-3 py-5 text-center text-xs text-white/90 sm:px-4 sm:py-6 sm:text-sm">
          <span className="inline-block max-w-prose [overflow-wrap:anywhere]">
            Copyright © {new Date().getFullYear()} FantasyWorld Resort. All Rights Reserved. ·{" "}
            <Link href={BOOK} className="font-semibold hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
