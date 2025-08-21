import MainBanner from "@/components/layout/MainBanner";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";

export default function DirectorPage() {
  return (
    <>
      <MainBanner />
      <Wrapper>
        <section className="flex gap-[40px]">
          <aside>
            <Image
              src="/images/profile-image.jpg"
              alt="profile-image"
              width={425}
              height={567}
              className="w-[280px] object-cover rounded-[12px]"
            />
          </aside>
          <main>
            <h2 className="font-[700] text-[22px] text-[var(--color-green800)] mb-[20px]">
              이임순 (센터장 및 상담전문가)
            </h2>
            <ul className="text-[18px] leading-[28px]">
              <li>
                • 숙명여자대학교 일반대학원 교육학 박사(상담 및 생활지도 전공)
              </li>
              <li>• 성균관대학교 교육대학원 석사(상담교육 전공)</li>
              <li>• 한국방송통신대학교 평생대학원 석사(유아교육 전공)</li>
              <li>• 한국상담학회 1급 (전문영역) 수련감독자(no.662)</li>
              <li>• 한국상담심리학회 1급 주수퍼바이저(no.1077)</li>
              <li>• 임상심리사/ 청소년상담사/ 전문상담교사/ MBTI 일반강사</li>
              <br />
              <li>• 현) 마음행복 심리상담센터 센터장</li>
              <li>• 현) 유해피심리상담센터(목동점) 수석전문상담사</li>
              <li>• 현) 국제사이버대학교 통합상담치료학과 겸임교수</li>
              <li>• 현) 숙명여자대학교 교육대학원 외래교수</li>
              <li>
                • 현) 한국방송통신대학교 유아교육과/ 청소년교육과 외래강사
              </li>
              <br />
            </ul>

            <ul className="text-[18px] leading-[28px] text-[var(--color-gray700)]">
              <li>• 전) 명지전문대학교, 그리스도대학교 외래교수</li>
              <li>• 전) 신한대학교 학생상담센터 자문 슈퍼바이저</li>
              <li>• 전) 이누리평생교육원 운영교과 교수(가족상담 및 치료)</li>
              <li>• 전) 한양JY심리발달센터/ 어울림심리지원센터 전문상담사</li>
              <li>
                • 전) 경기도 고양교육지원청 학습종합클리닉센터
                수석학습상담사(학습상담, 교사교육)
              </li>
              <li>• 전) 관악구 건강가정다문화가족지원센터 객원상담원</li>
              <li>• 전) 한국방송통신대학교 진로심리상담실 시간제상담원</li>
              <li>• 전) 파주청소년상담복지센터 외부강사(집단상담)</li>
              <li>
                • 전) 연천군 청소년상담복지센터 외부강사(개인상담, 집단상담,
                부모교육 )
              </li>
              <li>• 전) 명지전문대학교, 그리스도대학교 외래교수</li>
              <li>• 전) 신한대학교 학생상담센터 자문 슈퍼바이저</li>
              <li>• 전) 이누리평생교육원 운영교과 교수(가족상담 및 치료)</li>
              <li>• 전) 한양JY심리발달센터/ 어울림심리지원센터 전문상담사</li>
              <li>
                • 전) 경기도 고양교육지원청 학습종합클리닉센터
                수석학습상담사(학습상담, 교사교육)
              </li>
              <li>• 전) 관악구 건강가정다문화가족지원센터 객원상담원</li>
              <li>• 전) 한국방송통신대학교 진로심리상담실 시간제상담원</li>
              <li>• 전) 파주청소년상담복지센터 외부강사(집단상담)</li>
              <li>
                • 전) 연천군 청소년상담복지센터 외부강사(개인상담, 집단상담,
                부모교육)
              </li>
            </ul>
          </main>
        </section>
      </Wrapper>
    </>
  );
}
