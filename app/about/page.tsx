import CenterPictureCarousel from "@/app/about/components/CenterPictureCarousel";
import MainBanner from "@/components/layout/MainBanner";
import Divider from "@/components/layout/units/Divider";
import Wrapper from "@/components/layout/Wrapper";

export default function About() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <h2 className="text-[32px] leading-[40px] font-normal">
            반갑습니다.
            <br />
            <b className="text-[var(--color-green700)] font-[700]">마음행복</b>
            에 방문하신 것을 진심으로 환영합니다.
          </h2>
          <p className="mt-[24px] text-[18px] leading-[24px]">
            <b className="font-[700]">마음행복</b>은 <br />
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
            <b className="font-[700]">마음행복</b>은 여러분의 행복을 응원하며
            언제나 함께 할 것입니다.
            <span className="mt-[36px] text-right font-bold block ">
              - 센터장 이임순 올림 -
            </span>
          </p>
        </section>
        <Divider />
        <section className="text-[18px] leading-[24px]">
          <dl className="flex gap-4 my-[8px]">
            <dt className="w-[80px]">2021.02</dt>
            <dd>&apos;마음행복 상담연구소&apos; 개원</dd>
          </dl>
          <dl className="flex gap-4 my-[8px]">
            <dt className="w-[80px]">2024.08</dt>
            <dd>&apos;마음행복 심리상담센터&apos; 명칭변경</dd>
          </dl>
          <dl className="flex gap-4 my-[8px]">
            <dt className="w-[80px]">2025~</dt>
            <dd>
              <ul>
                <li>
                  • 개인상담, 부부상담, 가족상담, 커플상담, 집단상담, 심리평가
                  서비스 진행
                </li>
                <li>
                  • 한국상담학회, 한국상담심리학회 상담전문가(2급, 1급) 수련과정
                  운영
                </li>
              </ul>
            </dd>
          </dl>
        </section>
        <Divider />
        <section className="mt-[60px]">
          <h3 className="text-[28px] text-[var(--color-green900)] font-[700] mb-[16px]">
            센터 둘러보기
          </h3>
          <CenterPictureCarousel />
        </section>
      </Wrapper>
    </>
  );
}
