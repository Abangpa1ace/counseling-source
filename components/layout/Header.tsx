"use client";

import { cn } from "@/utils/style";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface MenuType {
  href: string;
  label: string;
  subMenus?: MenuType[];
}

const HeaderLinkList: MenuType[] = [
  {
    href: "/about",
    label: "센터소개",
    subMenus: [
      {
        href: "/about/welcome",
        label: "인사말",
      },
      {
        href: "/about/director",
        label: "센터장 소개",
      },
    ],
  },
  {
    href: "/counseling",
    label: "심리상담",
    subMenus: [
      {
        href: "/counseling/personal",
        label: "개인상담",
      },
      {
        href: "/counseling/family",
        label: "가족상담",
      },
      {
        href: "/counseling/group",
        label: "집단상담",
      },
    ],
  },
  {
    href: "/super-vision/introduce",
    label: "수퍼비전",
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
  const router = useRouter();
  const [focusedMenu, setFocusedMenu] = useState<string | null>(null);

  const handleClick = (menu: MenuType, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (menu.subMenus) {
      setFocusedMenu((prev) => (prev === menu.href ? null : menu.href));
      return;
    }

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(menu.href);
      });
    } else {
      router.push(menu.href);
    }
  };

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
          {HeaderLinkList.map((menu) => (
            <div
              key={menu.href}
              className="relative"
              onMouseEnter={() => setFocusedMenu(menu.href)}
              onMouseLeave={() => setFocusedMenu(null)}
            >
              <div
                onClick={(e) => handleClick(menu, e)}
                className={cn(
                  "relative cursor-pointer",
                  "hover:text-[var(--color-green800)] transition-colors duration-200",
                  pathname.includes(menu.href)
                    ? "text-[var(--color-green800)] font-[700]"
                    : ""
                )}
              >
                {menu.label}
              </div>
              {menu.subMenus && focusedMenu === menu.href && (
                <ul className="absolute top-[0px] left-[-20px] w-[180px]">
                  <div className="h-[54px] bg-transparent" />
                  {menu.subMenus.map((subMenu) => (
                    <li
                      key={subMenu.href}
                      className={cn(
                        "bg-[var(--color-white)] py-[16px] px-[20px] text-[16px] leading-[24px] text-[var(--color-gray700)] cursor-pointer text-[15px]",
                        "hover:bg-[var(--color-gray50)] hover:text-[var(--color-green800)]"
                      )}
                      onClick={(e) => handleClick(subMenu, e)}
                    >
                      {subMenu.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
