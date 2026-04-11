import type { Metadata, Viewport } from "next";
import "./reset.css";
import "./globals.scss";
import styles from "./layout.module.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "마음행복심리상담센터",
  description: "마음행복심리상담센터",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body cz-shortcut-listen="true">
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
