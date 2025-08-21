"use client";

import { cn } from "@/utils/style";
import Image from "next/image";
import { JSX, useState } from "react";

type BasicCounselingType = "individual" | "family";

const BasicCounselingList: Record<
  BasicCounselingType,
  {
    category: BasicCounselingType;
    label: string;
    title: string;
    image: string;
    content: JSX.Element;
  }
> = {
  individual: {
    category: "individual",
    label: "개인상담",
    title: "개인상담(청소년, 대학생, 성인)",
    image: "/images/basic-counseling/individual-counselling.jpg",
    content: (
      <>
        전문상담자와 만남과 치료적인 대화과정을 통해서 여러 증상(우울, 화, 분노,
        수치심, 두려움과 불안 등)이 완화될 수 있습니다.
        <br />주 1회 1-2회, 45분(또는 50분) 진행됩니다.
        <br />
        <span className="text-[var(--color-purple500)]">
          * 사정상 면대면 상담이 어렵거나 거주지가 지방인 경우 화상상담(줌)이나
          전화상담으로 진행 가능합니다.
        </span>
      </>
    ),
  },
  family: {
    category: "family",
    label: "부부/커플/가족 상담",
    title: "부부/커플/가족 상담",
    image: "/images/basic-counseling/family-counselling.jpg",
    content: (
      <>
        관계 갈등은 어떤 사건이나 상황보다도 상호작용 과정 속에 있기도 합니다.
        상대의 좋은점은 외면하고 부족한 것에만 신경을 쓰지는 않았는지 자기이해도
        필요합니다. 경우에 따라서는 스스로가 자신을 소외시키고 회피하며 관계
        갈등을 악화시키기도 합니다. <br />
        서로 마음을 열고 자신의 생각과 감정을 전달하려는 마음이 일어나면서 관계
        회복이 됩니다. 부부(커플)상담, 가족상담을 통해서 갈등을 해결하고 다름을
        인정하며 서로 존중, 배려할 수 있는 우리가 될 수 있습니다. <br />
        <span className="text-[var(--color-purple500)]">
          * 부부(커플): 60분~90분, 가족상담: 100분 진행합니다.
        </span>
      </>
    ),
  },
};

export default function BasicCounselingContent() {
  const [basicCounselingCategory, setBasicCounselingCategory] =
    useState<BasicCounselingType>("individual");
  const focusedBasicCounseling = BasicCounselingList[basicCounselingCategory];

  return (
    <>
      <ul className="flex mb-[32px]">
        {Object.values(BasicCounselingList).map((item) => (
          <li
            key={item.category}
            className={cn(
              "grow-0 shrink-0 basis-[50%] flex items-center justify-center h-[60px] border-[1px] border-[var(--color-gray200)] text-[20px] leading-[28px] cursor-pointer ",
              basicCounselingCategory === item.category
                ? "bg-[var(--color-green500)] text-[var(--color-white)] font-[700]"
                : ""
            )}
            onClick={() => setBasicCounselingCategory(item.category)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="px-[24px]">
        <Image
          src={focusedBasicCounseling.image}
          alt={focusedBasicCounseling.label}
          width={1280}
          height={720}
          className="h-[280px] object-contain mx-auto rounded-[8px] overflow-hidden"
        />
        <h2 className="text-[28px] font-[700] text-[var(--color-green900)] text-center mt-[36px] ">
          {focusedBasicCounseling.title}
        </h2>
        <p className="text-[18px] leading-[28px] mt-[16px] text-[var(--color-gray800)]">
          {focusedBasicCounseling.content}
        </p>
      </div>
    </>
  );
}
