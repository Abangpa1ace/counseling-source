import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";

export default function DirectorPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section className="flex gap-[20px]">
          <aside>
            <Image
              src="/images/profile-image.jpg"
              alt="profile-image"
              width={425}
              height={567}
              className="w-[280px] h0px] object-cover"
            />
            <p>센터장 이임순</p>
          </aside>
        </section>
      </Wrapper>
    </>
  );
}
