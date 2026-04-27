import Image from "next/image";
import Link from "next/link";

const BOOK = "https://fantasyworldresort.com/";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-green-dark text-white">
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
        <div className="mx-auto max-w-[1362px] px-4 pb-16 pt-24 md:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative max-w-xl lg:pl-4">
              <p className="text-right text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
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
            <div className="shrink-0">
              <Link
                href={BOOK}
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-brand-orange bg-brand-orange px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green"
              >
                Book Now
                <Image src="/svg18.svg" alt="" width={19} height={16} className="h-4 w-auto" />
              </Link>
            </div>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-[20px] border-[15px] border-brand-orange bg-brand-orange p-0">
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
            <div className="rounded-[20px] bg-brand-orange p-[15px]">
              <div className="rounded-[20px] bg-white p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Image src="/svg19.svg" alt="" width={50} height={50} />
                </div>
                <h3 className="text-[32px] font-bold tracking-[0.08em] text-brand-green">Contact Us</h3>
                <p className="mt-4 text-base font-bold">Phone :</p>
                <a href="tel:+14073968530" className="text-lg font-normal hover:underline">
                  (407) 396-8530
                </a>
                <h3 className="mt-8 text-[32px] font-bold tracking-[0.08em] text-brand-green">Drop A Line</h3>
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
            <div className="flex flex-col items-center gap-6 text-center lg:items-end lg:text-right">
              <div>
                <h3 className="text-2xl font-bold">Rewards Program :</h3>
                <Link
                  href={BOOK}
                  className="mt-4 inline-block rounded-full bg-brand-orange px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-brand-green"
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
        <div className="relative z-10 border-t border-white/20 px-4 py-6 text-center text-sm text-white/90">
          Copyright © {new Date().getFullYear()} FantasyWorld Resort. All Rights Reserved. ·{" "}
          <Link href={BOOK} className="font-semibold hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
