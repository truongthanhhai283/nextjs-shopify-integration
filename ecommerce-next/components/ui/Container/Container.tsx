import { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

import style from "./Container.module.css";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Component = "div" }) => {
  return (
    <Component
      style={{ maxWidth: "1920ox" }}
      className="px-6 mx-auto max-w-8xl"
    >
      {children}
    </Component>
  );
};

export default Container;
