"use client";

import { cn } from "@/utils/style";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.scss";

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
      { href: "/about/welcome", label: "인사말" },
      { href: "/about/director", label: "센터장 소개" },
    ],
  },
  {
    href: "/counseling",
    label: "심리상담",
    subMenus: [
      { href: "/counseling/personal", label: "개인상담" },
      { href: "/counseling/family", label: "가족상담" },
      { href: "/counseling/group", label: "집단상담" },
    ],
  },
  { href: "/super-vision/introduce", label: "수퍼비전" },
  { href: "/assessment", label: "심리평가" },
  { href: "/notice", label: "공지사항" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [focusedMenu, setFocusedMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    setIsSidebarOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

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
      document.startViewTransition(() => router.push(menu.href));
    } else {
      router.push(menu.href);
    }
  };

  const handleSidebarMenuClick = (menu: MenuType) => {
    if (menu.subMenus) {
      setExpandedMenu((prev) => (prev === menu.href ? null : menu.href));
      return;
    }
    setIsSidebarOpen(false);
    if (document.startViewTransition) {
      document.startViewTransition(() => router.push(menu.href));
    } else {
      router.push(menu.href);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* 로고 */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/main-logo2.png"
              alt="main-logo"
              width={180}
              height={50}
            />
          </Link>

          {/* 데스크탑 nav */}
          <nav className={styles.desktopNav}>
            {HeaderLinkList.map((menu) => (
              <div
                key={menu.href}
                className={styles.menuItem}
                onMouseEnter={() => setFocusedMenu(menu.href)}
                onMouseLeave={() => setFocusedMenu(null)}
              >
                <div
                  onClick={(e) => handleClick(menu, e)}
                  className={cn(
                    styles.menuLabel,
                    pathname.includes(menu.href) ? styles.active : undefined,
                  )}
                >
                  {menu.label}
                </div>
                {menu.subMenus && focusedMenu === menu.href && (
                  <ul className={styles.subMenuList}>
                    <div className={styles.subMenuSpacer} />
                    {menu.subMenus.map((subMenu) => (
                      <li
                        key={subMenu.href}
                        className={styles.subMenuItem}
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

          {/* 햄버거 버튼 */}
          <button
            className={styles.hamburger}
            onClick={() => setIsSidebarOpen(true)}
            aria-label="메뉴 열기"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </header>

      {/* 오버레이 */}
      <div
        className={cn(styles.overlay, isSidebarOpen ? styles.open : undefined)}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* 사이드바 */}
      <div
        className={cn(styles.sidebar, isSidebarOpen ? styles.open : undefined)}
      >
        <div className={styles.sidebarTop}>
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className={styles.logo}
          >
            <Image
              src="/images/main-logo2.png"
              alt="main-logo"
              width={140}
              height={40}
            />
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="메뉴 닫기"
            className={styles.closeButton}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {HeaderLinkList.map((menu) => (
            <div key={menu.href}>
              <div
                onClick={() => handleSidebarMenuClick(menu)}
                className={cn(
                  styles.sidebarMenuItem,
                  pathname.includes(menu.href) ? styles.active : undefined,
                )}
              >
                {menu.label}
                {menu.subMenus && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={cn(
                      styles.chevron,
                      expandedMenu === menu.href ? styles.rotated : undefined,
                    )}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </div>
              {menu.subMenus && expandedMenu === menu.href && (
                <ul className={styles.sidebarSubList}>
                  {menu.subMenus.map((subMenu) => (
                    <li
                      key={subMenu.href}
                      onClick={() => handleSidebarMenuClick(subMenu)}
                      className={cn(
                        styles.sidebarSubItem,
                        pathname.includes(subMenu.href)
                          ? styles.active
                          : undefined,
                      )}
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
    </>
  );
}
