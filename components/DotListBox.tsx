import { cn } from "@/utils/style";
import styles from "./DotListBox.module.scss";

interface Props {
  textList: React.ReactNode[];
  fontSize?: 14 | 16;
  className?: string;
}

export default function DotListBox({
  textList,
  fontSize = 14,
  className,
}: Props) {
  const sizeClass = fontSize === 16 ? styles.size16 : styles.size14;
  const dotClass = fontSize === 16 ? styles.dotTop10 : styles.dotTop8;

  return (
    <ul className={cn(styles.list, sizeClass, className)}>
      {textList.map((text, index) => (
        <li className={cn(styles.item, dotClass)} key={index}>
          {text}
        </li>
      ))}
    </ul>
  );
}
