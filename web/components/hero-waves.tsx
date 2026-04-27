import Image from "next/image";

/** Hero bottom band — asset from design export (`section1.png`). */
export function HeroWaves() {
  return (
    <div className="w-full select-none">
      <Image
        src="/section1.png"
        alt=""
        width={2560}
        height={500}
        className="block h-auto w-full"
        sizes="100vw"
        quality={90}
      />
    </div>
  );
}
