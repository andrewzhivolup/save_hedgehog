import { Button, Input, message } from "antd";
import React, { useState } from "react";
import promocodesMock from "../../shared/__mocks__/codes_mock.json";
import cls from "./CodesInput.module.scss";

const promocodes = promocodesMock.codes;

const CodesInput = (options) => {
  const { promoLength, defaultValue, ...props } = options;

  const [promo, setPromo] = useState(defaultValue || "");

  const [inputStatus, setInputStatus] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const success = (content) => {
    messageApi.open({
      type: "success",
      content,
    });
  };
  const error = (content) => {
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
      error(`Промокод должен состоять из ${promoLength} символов`);
      return;
    }

    if (promocodes.includes(promo)) {
      setInputStatus("");
      success("Промокод успешно активирован");
    } else {
      setInputStatus("error");
      error(`Такого промокода не существует`);
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
