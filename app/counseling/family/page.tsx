import Image from "next/image";

export default function FamilyCounselingPage() {
  return (
    <div className="px-[24px]">
      <Image
        src={"/images/basic-counseling/family-counselling.jpg"}
        alt={"부부/커플/가족 상담"}
        width={1280}
        height={720}
        className="h-[240px] object-contain mx-auto rounded-[8px] overflow-hidden"
      />
      <h2 className="text-[28px] font-[700] text-[var(--color-green900)] text-center mt-[48px] ">
        부부/커플/가족 상담
      </h2>
      <p className="text-[18px] leading-[28px] mt-[24px] text-[var(--color-gray800)]">
        관계 갈등은 어떤 사건이나 상황보다도 상호작용 과정 속에 있기도 합니다.
        상대의 좋은점은 외면하고 부족한 것에만 신경을 쓰지는 않았는지 자기이해도
        필요합니다. 경우에 따라서는 스스로가 자신을 소외시키고 회피하며 관계
        갈등을 악화시키기도 합니다. <br />
        서로 마음을 열고 자신의 생각과 감정을 전달하려는 마음이 일어나면서 관계
        회복이 됩니다. 부부(커플)상담, 가족상담을 통해서 갈등을 해결하고 다름을
        인정하며 서로 존중, 배려할 수 있는 우리가 될 수 있습니다. <br />
        <br />
        <span className="text-[var(--color-green700)]">
          * 부부(커플): 60분~90분, 가족상담: 100분 진행합니다.
        </span>
      </p>
    </div>
  );
}
