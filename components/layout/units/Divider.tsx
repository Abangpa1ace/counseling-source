import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return (
    <div
      className={cn(
        "w-[320px] h-[1px] bg-[var(--color-gray200)] mx-auto my-[60px]",
        className
      )}
    />
  );
}
