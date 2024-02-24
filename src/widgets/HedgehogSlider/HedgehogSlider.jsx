import React from "react";
import { Slider } from "antd";
import cls from "./HedgehogSlider.module.scss";

const HedgehogSlider = () => {
  return (
    <div className={cls.HedgehogSlider}>
      <Slider defaultValue={30} />
    </div>
  );
};

export default HedgehogSlider;
