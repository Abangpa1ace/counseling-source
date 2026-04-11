import { cn } from "@/utils/style";
import styles from "./Divider.module.scss";

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return <div className={cn(styles.divider, className)} />;
}
