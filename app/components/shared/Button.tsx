import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "transition-all duration-200";
  const baseInlineStyles = {
    padding: "10px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "500",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--color-green500)",
      color: "#fff",
    },
    secondary: {
      border: "1px solid var(--color-green500)",
      color: "var(--color-green500)",
      backgroundColor: "#fff",
    },
  };

  const variantInlineStyles = variantStyles[variant];

  return (
    <button
      className={`${baseStyles} ${className}`}
      style={{ ...baseInlineStyles, ...variantInlineStyles }}
      {...props}
    >
      {children}
    </button>
  );
}
