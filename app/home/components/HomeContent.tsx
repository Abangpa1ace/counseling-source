"use client";

import Image from "next/image";

export default function HomeContent() {
  return (
    <>
      <div className="relative h-[calc(100vh-var(--h-header))] p-[40px]">
        <Image
          src="/images/main-img.webp"
          alt="main-img"
          className="absolute left-0 top-0 w-full h-full object-cover"
          width={1280}
          height={260}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-800/60 to-neutral-700/40" />
        <div className="relative text-center mx-auto max-w-[1000px] mt-[240px]">
          <h2 className="text-[40px] leading-[1.3] text-[var(--color-gray50)] font-[800]">
            반갑습니다.
            <br />
            마음행복에 방문하신 것을 진심으로 환영합니다.
          </h2>
          <p className="mt-[32px] text-[20px] leading-[28px] text-[var(--color-gray50)]">
            <strong className="text-[var(--color-green500)] font-[700]">
              마음행복
            </strong>
            은 <br />
            삶을 살아가며 겪는 다양한 감정을 나누고 풀어낼 수 있도록
            <br />
            전문적인 심리상담 서비스를 꾸준히 진행하고 있습니다. <br />
            <br />
            그리고 교사교육과 부모교육을 면대면 또는 비대면(화상)으로 하고
            있습니다. <br />
            <br />
            아울러 심리상담을 공부하며 <br /> 전문가로 성장해 나가고 있는 분들을
            대상으로 수련을 도와드리고 있습니다. <br />
            <br />
            <br />
            <strong className="text-[var(--color-green500)] font-[700]">
              마음행복
            </strong>
            은 여러분의 행복을 응원하며 언제나 함께 할 것입니다.
            <span className="mt-[24px] text-right font-bold block text-[var(--color-gray50)]">
              - 센터장 이임순 올림 -
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
