import Divider from "@/components/layout/units/Divider";
import CenterPictureCarousel from "../components/CenterPictureCarousel";
import styles from "./welcome.module.scss";

export default function AboutWelcomePage() {
  return (
    <>
      <section className={styles.historySection}>
        <h3 className={styles.sectionTitle}>센터이력</h3>
        <dl className={styles.historyRow}>
          <dt className={styles.historyDt}>2021.02</dt>
          <dd>&apos;마음행복 상담연구소&apos; 개원</dd>
        </dl>
        <dl className={styles.historyRow}>
          <dt className={styles.historyDt}>2024.08</dt>
          <dd>&apos;마음행복 심리상담센터&apos; 명칭변경</dd>
        </dl>
        <dl className={styles.historyRow}>
          <dt className={styles.historyDt}>2025~</dt>
          <dd>
            <ul>
              <li>• 개인상담, 부부상담, 가족상담, 커플상담, 집단상담, 심리평가 서비스 진행</li>
              <li>• 한국상담학회, 한국상담심리학회 상담전문가(2급, 1급) 수련과정 운영</li>
            </ul>
          </dd>
        </dl>
      </section>
      <Divider />
      <section className={styles.gallerySection}>
        <h3 className={styles.sectionTitle}>둘러보기</h3>
        <CenterPictureCarousel />
      </section>
    </>
  );
}
