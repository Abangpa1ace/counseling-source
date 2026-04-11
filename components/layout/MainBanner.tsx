import Image from "next/image";
import styles from "./MainBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner}>
      <Image
        height={260}
        width={1280}
        src="/images/main-banner.jpg"
        alt="main-banner"
        className={styles.image}
        priority
      />
    </div>
  );
}
