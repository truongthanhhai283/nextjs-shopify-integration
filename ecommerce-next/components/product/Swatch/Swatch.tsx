import React, { FC } from "react";
import cn from "classnames";

import { Check } from "@components/icons";
import { isDark } from "@lib/color";
import style from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant: "size" | "color" | string;
  active: boolean;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ active, color, label, variant, ...rest }) => {
  label = label?.toLocaleLowerCase();
  variant = variant.toLocaleLowerCase();

  const rootClassName = cn(style.root, {
    [style.active]: active,
    [style.color]: color,
    [style.size]: variant === "size",
    [style.dark]: color && isDark(color),
  });

  return (
    <>
      <button
        style={color ? { backgroundColor: color } : {}}
        className={rootClassName}
        {...rest}
      >
        {variant === "color" && active && (
          <span>
            <Check />
          </span>
        )}
        {variant === "size" ? label : null}
      </button>
    </>
  );
};

export default Swatch;
