"use client";

import { useRouter } from "next/navigation";
import styles from "./CounselingLink.module.scss";

export default function CounselingLink() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById("request-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.button}>
        상담하러 가기
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
