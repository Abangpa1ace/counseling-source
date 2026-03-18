"use client";

import { useState } from "react";
import Button from "../../components/shared/Button";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const updateFormData = (key: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("상담 신청이 성공적으로 접수되었습니다!");
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="request-form" className="bg-white py-[40px]">
      <div className="mb-8">
        <h3 className="text-[20px] font-[700] text-gray-900 mb-[8px] text-[var(--color-green800)]">
          상담 신청
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-3 gap-4 mt-[8px]">
          <input
            type="text"
            placeholder="이름"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            required
            className="p-[8px_12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            required
            className="p-[8px_12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="전화번호"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            required
            className="p-[8px_12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <textarea
            placeholder="문의사항"
            value={formData.message}
            onChange={(e) => updateFormData("message", e.target.value)}
            required
            rows={4}
            className="w-full mt-[8px] p-[8px_12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 resize-none"
          />
        </div>

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm font-medium">
              오류가 발생했습니다. 다시 시도해주세요.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          className="mt-[12px]"
        >
          {isSubmitting ? "처리 중..." : "신청하기"}
        </Button>
      </form>
    </div>
  );
}
