"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const CarouselData = [
  {
    src: "/images/center/center-photo-1.jpeg",
  },
  {
    src: "/images/center/center-photo-2.jpeg",
  },
  {
    src: "/images/center/center-photo-3.jpeg",
  },
  {
    src: "/images/center/center-photo-4.jpeg",
  },
];

export default function CenterPictureCarousel() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[16px]">
          {CarouselData.map((item, index) => (
            <div
              className="grow-0 shrink-0 basis-[480px] min-w-0"
              key={`center-photo-${index}`}
            >
              <Image
                src={item.src}
                alt={`center-photo-${index + 1}`}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
