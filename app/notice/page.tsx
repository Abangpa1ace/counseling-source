import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";

interface NoticeUnitType {
  id: number;
  title: string;
  date: string;
}

const NoticeList: NoticeUnitType[] = [
  {
    title: "[안내] 전국민 마음투자 지원사업 실시",
    date: "2024-09-11",
  },
].map((item, index) => ({
  id: index + 1,
  ...item,
}));

export default function AssessmentPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <h2 className="text-[32px] leading-[40px] font-[700] text-[var(--color-green900)] text-center ">
            공지사항
            <br />
          </h2>
          <table className="w-full mt-[24px] text-[18px] leading-[28px]">
            <thead>
              <tr className="bg-[var(--color-gray200)]">
                <th className="w-[10%] py-[10px] text-center font-[700]">
                  번호
                </th>
                <th className="w-[70%] py-[10px] text-center font-[700]">
                  제목
                </th>
                <th className="w-[20%] py-[10px] text-center font-[700]">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {NoticeList.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-[1px] border-[var(--color-gray200)] hover:bg-[var(--color-gray50)] hover:cursor-pointer"
                >
                  <td className="py-[14px] text-center">{item.id}</td>
                  <td className="py-[14px] text-center">{item.title}</td>
                  <td className="py-[14px] text-center">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Wrapper>
    </>
  );
}
