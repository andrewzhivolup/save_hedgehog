import { Button, Input, message } from "antd";
import React, { useState } from "react";
import cls from "./CodesInput.module.scss";
import { checkPromo } from "../../shared/api/reqs/checkPromo";

const CodesInput = (options) => {
  const { promoLength, defaultValue, ...props } = options;

  const [promo, setPromo] = useState(defaultValue || "");

  const [inputStatus, setInputStatus] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = (content) => {
    messageApi.open({
      type: "success",
      content,
    });
  };
  const errorMessage = (content) => {
    messageApi.open({
      type: "error",
      content,
    });
  };

  function onSaveBtnClick() {
    // TODO: отправляем  введенный промокод на сервер и ждем ответа
    // если ответ положительный - делаем его использованным отодвигаем ежа
    // отрицательный - такого промокода нет - нотификация

    if (promo.length < promoLength) {
      setInputStatus("error");
      errorMessage(`Промокод должен состоять из ${promoLength} символов`);
      return;
    }

    const { success, data, error } = checkPromo(promo);

    if (success) {
      setInputStatus("");
      successMessage(data);
    } else {
      setInputStatus("error");
      errorMessage(error);
    }
  }

  function onInputChange(e) {
    setPromo(e.target.value);
    setInputStatus("");
  }

  return (
    <div className={cls.CodesInput}>
      {contextHolder}
      <Input
        count={{
          show: true,
          max: promoLength,
        }}
        maxLength={promoLength}
        placeholder="Введите промокод"
        onChange={onInputChange}
        status={inputStatus}
        defaultValue={defaultValue}
        {...props}
      />
      <Button type="primary" onClick={onSaveBtnClick}>
        Спасти
      </Button>
    </div>
  );
};

export default CodesInput;
