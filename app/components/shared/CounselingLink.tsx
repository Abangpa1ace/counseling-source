"use client";

import { useRouter } from "next/navigation";

export default function CounselingLink() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById("request-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className="mt-[28px] text-right">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-[4px] text-[var(--color-green600)] hover:text-[var(--color-green600)] transition-all duration-200 text-[18px] font-[600] cursor-pointer bg-transparent border-none p-0 hover:translate-x-[4px] hover:scale-[1.05]"
      >
        상담하러 가기
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
