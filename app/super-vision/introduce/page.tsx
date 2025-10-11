import DotListBox from "@/components/DotListBox";

export default function SuperVisionIntroducePage() {
  return (
    <section>
      <h2 className="text-[32px] leading-[40px] font-[700]">
        수퍼비전/내담자경험
        <br />
      </h2>

      <h3 className="text-[20px] font-[700] mt-[48px] mb-[8px] text-[var(--color-green800)]">
        수퍼비전
      </h3>
      <p className="text-[16px] leading-[24px] mt-[12px] text-[var(--color-gray800)]">
        수퍼비전(supervision)은 상담자나 치료자가 전문성을 향상시키고, 상담의
        질을 보장하며, 윤리적인 문제를 예방하기 위해 더 경험 많고 숙련된
        전문가(수퍼바이저)에게 상담 사례와 자신의 상담 과정을 점검‧지도받는
        것입니다. <br />본 기관에서는 전문상담사, 상담심리사, 청소년상담사,
        임상심리사 등 자격취득을 준비하는 분들을 위해 수퍼비전과 내담자 경험
        수련과정을 진행하고 있습니다. <br />
        <span className="mt-[8px] block text-[var(--color-green700)]">
          ※ 수퍼비전(개인 또는 소그룹)을 원한다면, 상시접수하고 있으니
          연락주시면 됩니다.
        </span>
      </p>
      <DotListBox
        className="mt-[12px]"
        textList={[
          "개인 수퍼비전: 1:1로 진행하며 한 사례를 집중적으로 다뤄 깊이 있는 사례 탐색이 가능",
          "집단 수퍼비전: 소그룹(2명 또는 3명)으로 상담자가 함께 참여하여 다양한 피드백 가능",
        ]}
      />

      <h3 className="text-[20px] font-[700] mt-[48px] mb-[8px] text-[var(--color-green800)]">
        내담자 경험
      </h3>
      <p className="text-[16px] leading-[24px] mt-[12px] text-[var(--color-gray800)]">
        전문상담사 자격(예: 전문상담사, 청소년상담사, 상담심리사,
        전문상담교사)을 취득하기 위해 요구되는 내담자 경험은 상담자의 자기성찰과
        상담 역량 향상을 위해 반드시 포함되는 과정입니다. <br />
        상담자가 내담자가 되어 상담관계와 감정의 흐름을 직접 체험해 봄으로써
        자신의 성격, 상담자의 역전이 가능성, 내담자의 심리와 어려움을 공감하는
        능력 등을 길러갈 수 있습니다.
      </p>
    </section>
  );
}
