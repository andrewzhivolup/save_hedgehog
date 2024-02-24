import promocodesMock from "../../__mocks__/codes_mock.json";

export function checkPromo(promo) {
  let promocodes = promocodesMock.codes;

  const db = JSON.parse(localStorage.getItem("promocodes"));

  if (!db) {
    localStorage.setItem("promocodes", JSON.stringify(promocodes));
  } else {
    promocodes = JSON.parse(localStorage.getItem("promocodes"));
  }

  const error = {
    success: false,
    error: "Такого промокода не существует",
  };

  const oldPromo = {
    success: false,
    error: "Промокод был активирован ранее",
  };

  const success = {
    success: true,
    data: "Промокод успешно применен",
  };

  if (!promo || !Object.prototype.hasOwnProperty.call(promocodes, promo)) {
    return error;
  }

  if (promocodes[promo]) {
    return oldPromo;
  }
  promocodes[promo] = 1;
  localStorage.setItem("promocodes", JSON.stringify(promocodes));
  return success;
}
