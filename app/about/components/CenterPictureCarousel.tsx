"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./CenterPictureCarousel.module.scss";

const CarouselData = [
  { src: "/images/center/center-photo-1.jpeg" },
  { src: "/images/center/center-photo-2.jpeg" },
  { src: "/images/center/center-photo-3.jpeg" },
  { src: "/images/center/center-photo-4.jpeg" },
];

export default function CenterPictureCarousel() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.track}>
        {CarouselData.map((item, index) => (
          <div className={styles.slide} key={`center-photo-${index}`}>
            <Image
              src={item.src}
              alt={`center-photo-${index + 1}`}
              width={1280}
              height={720}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
