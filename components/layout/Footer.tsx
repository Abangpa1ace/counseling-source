export default function Footer() {
  return (
    <footer className="w-full h-[180px] py-[40px] z-[var(--z-layout)] border-t-[1px] border-[var(--color-gray200)]">
      <div className="w-[var(--w-desktop)] max-w-[var(--w-desktop)] mx-auto h-full flex items-center justify-between px-[var(--spacing-container)]">
        <ul className="flex flex-col gap-2 text-[14px]">
          <li className="text-[var(--color-gray700)]">마음행복심리상담센터</li>
          <li className="text-[var(--color-gray700)]">대표자 : 이임순</li>
          <li className="text-[var(--color-gray700)]">
            휴대폰번호 : 010-8913-8376
          </li>
          <li className="text-[var(--color-gray700)]">
            COPYRIGHT ⓒ 2025 마음행복심리상담센터. ALL RIGHTS RESERVED.
          </li>
        </ul>
      </div>
    </footer>
  );
}
