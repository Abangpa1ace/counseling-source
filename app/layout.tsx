import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "마음행복심리상담센터",
  description: "마음행복심리상담센터",
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
        <main className="pt-[var(--h-header)] pb-[80px] min-h-[calc(100vh-180px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
