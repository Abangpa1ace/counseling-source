import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainBanner />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
