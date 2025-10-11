import { cn } from "@/utils/style";

interface Props {
  textList: React.ReactNode[];
  fontSize?: 14 | 16;
  className?: string;
}

const lineHeightStyleMap: Record<
  Exclude<Props["fontSize"], undefined>,
  string
> = {
  14: "leading-[24px]",
  16: "leading-[28px]",
};
const dotSize = 4;
const dotTopMap: Record<Exclude<Props["fontSize"], undefined>, string> = {
  14: "before:top-[8px]",
  16: "before:top-[10px]",
};

export default function DotListBox({
  textList,
  fontSize = 14,
  className,
}: Props) {
  return (
    <ul
      className={cn(
        "p-[12px_20px] bg-[var(--color-gray50)] color-[var(--color-gray700)] rounded-[8px]",
        `text-[${fontSize}px]`,
        lineHeightStyleMap[fontSize],
        className
      )}
    >
      {textList.map((text, index) => (
        <li
          className={cn(
            "relative pl-[12px]",
            `before:w-[${dotSize}px] before:h-[${dotSize}px]`,
            "before:content-[''] before:bg-[var(--color-gray700)] before:rounded-full before:absolute before:left-0",
            dotTopMap[fontSize]
          )}
          key={index}
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
