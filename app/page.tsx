import Wrapper from "@/components/layout/Wrapper";
import HomeContent from "./home/components/HomeContent";
import RequestForm from "./home/components/RequestForm";

export default function Home() {
  return (
    <>
      <HomeContent />
      <Wrapper>
        <RequestForm />
      </Wrapper>
    </>
  );
}
