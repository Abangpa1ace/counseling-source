import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[var(--h-header)] fixed top-0 left-0 right-0 z-[var(--z-layout)] shadow-[0px_5px_11px_0px_rgba(50,50,50,0.08)] bg-[#fff]">
      <div className="w-[var(--w-desktop)] max-w-[var(--w-desktop)] mx-auto h-full flex items-center justify-between px-[var(--spacing-container)]">
        <Link href="/">
          <Image
            src="/images/main-logo.png"
            alt="main-logo"
            width={92}
            height={92}
            className="scale-[1.3]"
          />
        </Link>
        <nav className="flex gap-8">
          <Link href="/about">인사말</Link>
          <Link href="/director">센터장 소개</Link>
          <Link href="/basic-counseling">심리상담</Link>
          <Link href="/group-counseling">집단상담</Link>
          <Link href="/assessment">심리평가</Link>
          <Link href="/notice">공지사항</Link>
        </nav>
      </div>
    </header>
  );
}
