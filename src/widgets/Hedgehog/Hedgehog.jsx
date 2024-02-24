import cls from "./Hedgehog.module.scss";
import hedgehog from "../../shared/lib/assets/images/hedgehog.png";

const Hedgehog = (options) => {
  const { size, ...props } = options;

  return (
    <img
      className={cls.Hedgehog}
      src={hedgehog}
      height={size}
      width={size}
      alt="Тут должен быть ёж"
      {...props}
    />
  );
};

export default Hedgehog;
