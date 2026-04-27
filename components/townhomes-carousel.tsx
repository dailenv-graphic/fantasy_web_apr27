"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const slides = [
  {
    src: "/Dining-Room-and-Kitchen-1024x683-2.jpg",
    alt: "Dining area and full kitchen in a FantasyWorld townhome",
    w: 1024,
    h: 683,
  },
  {
    src: "/Fantasy-World-1243-1024x683-1.jpg",
    alt: "Spacious open living space at FantasyWorld Resort",
    w: 1024,
    h: 683,
  },
  {
    src: "/gallery03-1024x683-2.jpg",
    alt: "Another view of the townhome living area",
    w: 1024,
    h: 683,
  },
  {
    src: "/Breakfast-Nook-1024x682-2.jpg",
    alt: "Bright breakfast nook",
    w: 1024,
    h: 682,
  },
  {
    src: "/Living-Room-1024x677-1.jpg",
    alt: "Living room with comfortable seating",
    w: 1024,
    h: 677,
  },
  {
    src: "/Upper-Bath-1024x683-1.jpg",
    alt: "Master bathroom with dual vanities",
    w: 1024,
    h: 683,
  },
] as const;

export function TownhomesCarousel() {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);
  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  return (
    <div
      className="relative z-10 w-full p-3 outline-none sm:p-[15px]"
      role="group"
      aria-roledescription="carousel"
      aria-label="Villa photos"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          goNext();
        }
      }}
    >
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {n}
      </p>
      <div className="relative w-full max-w-[590px]">
        <div
          className="relative z-10 min-h-56 w-full overflow-hidden rounded-[15px] sm:aspect-[590/393] sm:max-h-[min(100vw*0.65,393px)]"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            width={slides[index].w}
            height={slides[index].h}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
        <button
          type="button"
          onClick={goPrev}
          className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-1.5 text-white/95 opacity-90 ring-offset-2 transition hover:opacity-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white sm:-left-3"
          aria-label="Previous photo"
        >
          <Image
            src="/townhomes-slide-next.svg"
            alt=""
            width={35}
            height={35}
            className="h-[35px] w-[35px] [transform:scaleX(-1)]"
            aria-hidden
          />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-1.5 text-white/95 opacity-90 ring-offset-2 transition hover:opacity-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white sm:-right-3"
          aria-label="Next photo"
        >
          <Image
            src="/townhomes-slide-next.svg"
            alt=""
            width={35}
            height={35}
            className="h-[35px] w-[35px]"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}
