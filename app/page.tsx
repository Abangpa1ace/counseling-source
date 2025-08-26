import Wrapper from "@/components/layout/Wrapper";
import MainBanner from "@/components/layout/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <h1 className="text-[48px] font-bold">
          안녕하세요
          <br />
          마음행복심리상담센터 입니다
        </h1>
      </Wrapper>
    </>
  );
}
