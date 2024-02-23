import cls from "./Hedgehog.module.scss";
import hedgehog from "../../shared/lib/assets/images/hedgehog.png";

const Hedgehog = () => {
  return (
    <div>
      <img className={cls.Hedgehog} src={hedgehog} alt="Тут должен быть ёж" />
    </div>
  );
};

export default Hedgehog;
