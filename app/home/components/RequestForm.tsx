"use client";

import { useState } from "react";
import Button from "../../components/shared/Button";
import styles from "./RequestForm.module.scss";

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
        headers: { "Content-Type": "application/json" },
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
    <div id="request-form" className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>상담 신청</h3>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="이름"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="전화번호"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div>
          <textarea
            placeholder="문의사항"
            value={formData.message}
            onChange={(e) => updateFormData("message", e.target.value)}
            required
            rows={4}
            className={styles.textarea}
          />
        </div>

        {submitStatus === "error" && (
          <div className={styles.errorBox}>
            <p className={styles.errorText}>
              오류가 발생했습니다. 다시 시도해주세요.
            </p>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} variant="primary">
          {isSubmitting ? "처리 중..." : "신청하기"}
        </Button>
      </form>
    </div>
  );
}
