import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";
import styles from "./notices.module.scss";

interface NoticeUnitType {
  id: number;
  title: string;
  date: string;
}

const NoticeList: NoticeUnitType[] = [
  {
    title: "[안내] 마음행복 심리상담센터 사이트 게시",
    date: "2026-03-01",
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default function NoticesPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section>
          <h2 className={styles.title}>
            공지사항
            <br />
          </h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.theadRow}>
                <th className={`${styles.th} ${styles.colNum}`}>번호</th>
                <th className={`${styles.th} ${styles.colTitle}`}>제목</th>
                <th className={`${styles.th} ${styles.colDate}`}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {NoticeList.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>{item.id}</td>
                  <td className={styles.td}>{item.title}</td>
                  <td className={styles.td}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Wrapper>
    </>
  );
}
