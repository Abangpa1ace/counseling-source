import DotListBox from "@/components/DotListBox";
import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";

export default function AssessmentPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <h2 className="text-[32px] leading-[40px] font-[700] text-[var(--color-green900)] text-center ">
            심리평가
            <br />
          </h2>
          <p className="mt-[24px] text-[18px] leading-[28px]">
            심리평가는 개인의 심리적 특성을 이해하기 위한 전문적인 작업
            과정으로, 개인의 성격, 정서, 인지, 적성 등에 대해 객관적인 이해를
            돕기 위해서도 심리평가가 필요합니다. <br />
            따라서, 면담 후 필요한 검사를 실시하고 해석상담을 받아보실 수
            있습니다. <br />
          </p>
          <DotListBox
            className="mt-[16px]"
            fontSize={16}
            textList={[
              "다면인성검사(MMPI-2, MMPI-A)",
              "기질 및 성격검사(TCI, JTCI)",
              "문장완성검사(SCT)",
              "적성검사(Holland)",
              "학습동기 및 학습전략검사(MLST)",
              "성격유형검사(MBTI)",
              "그림검사(HTP, KFD, DAP)",
              "아동청소년 행동평가(CBCL)",
              "부모양육태도검사(PAT)",
              "이외 지능검사 포함 심리진단 및 평가",
            ]}
          />
        </section>
      </Wrapper>
    </>
  );
}
