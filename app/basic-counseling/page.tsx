import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";
import BasicCounselingContent from "./components/BasicCounselingContent";

export default function BasicCounselingPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <BasicCounselingContent />
        </section>
      </Wrapper>
    </>
  );
}
