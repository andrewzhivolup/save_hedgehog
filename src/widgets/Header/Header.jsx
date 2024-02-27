import React from "react";
import cls from "./Header.module.scss";
import { Hedgehog } from "../Hedgehog";

const Header = () => {
  return (
    <header className={cls.Header}>
      <Hedgehog size={10} />
      <Hedgehog size={20} />
      <Hedgehog size={30} />
      <Hedgehog size={40} />
      <Hedgehog size={50} />
      Cпаси ежа!
      <Hedgehog size={50} />
      <Hedgehog size={40} />
      <Hedgehog size={30} />
      <Hedgehog size={20} />
      <Hedgehog size={10} />
    </header>
  );
};

export default Header;
