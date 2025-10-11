import Image from "next/image";

export default function PersonalCounselingPage() {
  return (
    <div className="px-[24px]">
      <Image
        src={"/images/basic-counseling/individual-counselling.jpg"}
        alt={"개인상담"}
        width={1280}
        height={720}
        className="h-[240px] object-contain mx-auto rounded-[8px] overflow-hidden"
      />
      <h2 className="text-[28px] font-[700] text-[var(--color-green900)] text-center mt-[48px] ">
        개인상담(청소년, 대학생, 성인)
      </h2>
      <p className="text-[18px] leading-[28px] mt-[24px] text-[var(--color-gray800)]">
        전문상담자와 만남과 치료적인 대화과정을 통해서 여러 증상(우울, 화, 분노,
        수치심, 두려움과 불안 등)이 완화될 수 있습니다.
        <br />주 1회 1-2회, 45분(또는 50분) 진행됩니다.
        <br />
        <br />
        <span className="text-[var(--color-green700)]">
          * 사정상 면대면 상담이 어렵거나 거주지가 지방인 경우 화상상담(줌)이나
          전화상담으로 진행 가능합니다.
        </span>
      </p>
    </div>
  );
}
