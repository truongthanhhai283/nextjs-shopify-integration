import { FC, ReactNode } from "react";
import Ticker from "react-ticker";
import cn from "classnames";

import style from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
  variant: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant }) => {
  const rootClassName = cn(style.root, {
    [style.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={style.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
