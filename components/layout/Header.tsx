"use client";

import { cn } from "@/utils/style";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLinkList = [
  {
    href: "/about",
    label: "인사말",
  },
  {
    href: "/director",
    label: "센터장 소개",
  },
  {
    href: "/basic-counseling",
    label: "심리상담",
  },
  {
    href: "/group-counseling",
    label: "집단상담",
  },
  {
    href: "/assessment",
    label: "심리평가",
  },
  {
    href: "/notice",
    label: "공지사항",
  },
];

export default function Header() {
  const pathname = usePathname();

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
          {HeaderLinkList.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-[var(--color-green800)] ",
                item.href === pathname
                  ? "text-[var(--color-green800)] font-[700]"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
