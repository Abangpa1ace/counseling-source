import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li className={styles.listItem}>마음행복심리상담센터</li>
          <li className={styles.listItem}>대표자 : 이임순</li>
          <li className={styles.listItem}>휴대폰번호 : 010-8913-8376</li>
          <li className={styles.listItem}>
            COPYRIGHT ⓒ 2025 마음행복심리상담센터. ALL RIGHTS RESERVED.
          </li>
        </ul>
      </div>
    </footer>
  );
}
