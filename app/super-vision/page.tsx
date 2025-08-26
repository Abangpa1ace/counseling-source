import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";

export default function SuperVisionPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <h2 className="text-[32px] leading-[40px] font-[700]">
            수퍼비전
            <br />
          </h2>
          <p className="mt-[24px] text-[18px] leading-[28px]">
            (사)한국상담학회 1급/2급, (사)한국상담심리학회 1급/2급을 준비하시는
            분들을 위해 <br />
            <b className="font-[700]">개별 및 소그룹 수퍼비전</b>을 합니다.{" "}
            <br />
            <br />
            양대학회 인정이 가능합니다. (개별 및 소그룹 수퍼비전, 내담자 경험
            신청시 확인 후 개별연락 드립니다.)
          </p>
        </section>
      </Wrapper>
    </>
  );
}
