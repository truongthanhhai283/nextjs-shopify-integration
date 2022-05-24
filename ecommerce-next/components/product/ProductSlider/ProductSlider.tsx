import React, { FC } from "react";
import s from "./ProductSlider.module.css";

const ProductSlider: FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className="keen-slider h-full transition-opacity">{children}</div>
    </div>
  );
};

export default ProductSlider;
