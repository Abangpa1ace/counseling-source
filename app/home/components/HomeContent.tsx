"use client";

import { cn } from "@/utils/style";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HomeContent.module.scss";

export default function HomeContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src="/images/main-img.webp"
        alt="main-img"
        className={styles.bgImage}
        width={1280}
        height={260}
      />
      <div className={styles.gradientOverlay} />
      <div className={styles.content}>
        <h2
          className={cn(styles.title, isVisible ? styles.visible : undefined)}
          style={{ transitionDelay: "200ms" }}
        >
          반갑습니다.
          <br />
          마음행복에 방문하신 것을 진심으로 환영합니다.
        </h2>
        <p className={styles.body}>
          <span
            className={cn(styles.textBlock, isVisible ? styles.visible : undefined)}
            style={{ transitionDelay: "600ms" }}
          >
            <strong className={styles.highlight}>마음행복</strong>은 <br />
            삶을 살아가며 겪는 다양한 감정을 나누고 풀어낼 수 있도록
            <br />
            전문적인 심리상담 서비스를 꾸준히 진행하고 있습니다.
          </span>
          <br />
          <br />
          <span
            className={cn(styles.textBlock, isVisible ? styles.visible : undefined)}
            style={{ transitionDelay: "1000ms" }}
          >
            그리고 교사교육과 부모교육을 면대면 또는 비대면(화상)으로 하고
            있습니다.
          </span>
          <br />
          <br />
          <span
            className={cn(styles.textBlock, isVisible ? styles.visible : undefined)}
            style={{ transitionDelay: "1400ms" }}
          >
            아울러 심리상담을 공부하며 <br /> 전문가로 성장해 나가고 있는
            분들을 대상으로 수련을 도와드리고 있습니다.
          </span>
          <br />
          <br />
          <span
            className={cn(styles.textBlock, isVisible ? styles.visible : undefined)}
            style={{ transitionDelay: "1800ms" }}
          >
            <strong className={styles.highlight}>마음행복</strong>은 여러분의
            행복을 응원하며 언제나 함께 할 것입니다.
          </span>
          <span
            className={cn(styles.signature, isVisible ? styles.visible : undefined)}
            style={{ transitionDelay: "2200ms" }}
          >
            - 센터장 이임순 올림 -
          </span>
        </p>
      </div>
    </div>
  );
}
