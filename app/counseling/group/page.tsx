import DotListBox from "@/components/DotListBox";
import Image from "next/image";
import CounselingLink from "../../components/shared/CounselingLink";
import styles from "./group.module.scss";

export default function GroupCounselingPage() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/basic-counseling/group-counseling.png"
        alt="group-counseling"
        width={1280}
        height={720}
        className={styles.image}
      />
      <h2 className={styles.title}>집단상담</h2>
      <p className={styles.description}>
        학회(예: (사)한국상담학회, (사)한국상담심리학회 등) 청소년상담사 등 자격
        취득을 위해서는 집단상담 참여가 필수 요건입니다. 학회에서 인정하는
        집단상담 프로그램이어야 하며 반드시{" "}
        <b className={styles.highlight}>학회 수련감독자 자격을 가진 상담자가 진행</b>
        해야 인정됩니다.
        <br />본 기관에서는 아래와 같이 집단상담을 진행하고 있습니다. 구체적인
        일정은{" "}
        <b className={styles.highlight}>공지사항(또는 학회 홈페이지)</b>
        에서 확인 가능합니다.
        <br />
        <br />
        ※ 집단상담 참가 및 코리더 경험을 원한다면, 상시접수하고 있으니
        연락주시면 됩니다.
        <br />
        <br />
        <DotListBox
          textList={[
            "상담자 소진예방과 회복탄력 집단상담",
            "긍정심리기반, 일상의 마음챙김 집단상담",
            "TCI를 통한 자기이해 집단상담",
            "MMPI-2를 통한 자기이해 집단상담",
          ]}
        />
      </p>
      <CounselingLink />
    </div>
  );
}
