import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/main-banner.png"
        alt="main-banner"
        width={1280}
        height={600}
        className="h-[600px] w-full object-cover"
      />
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
