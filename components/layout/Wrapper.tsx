import { cn } from "@/utils/style";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Wrapper({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "max-w-[var(--w-desktop)] mx-auto px-[var(--spacing-container)]",
        className
      )}
    >
      {children}
    </div>
  );
}
