import { cn } from "@/utils/style";
import { PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";

interface Props {
  className?: string;
}

export default function Wrapper({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div className={cn(styles.wrapper, className)}>{children}</div>
  );
}
