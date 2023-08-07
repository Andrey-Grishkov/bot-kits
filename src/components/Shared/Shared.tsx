import React, { useState } from "react";
import "./Shared.scss";
import copyImg from "./images/copy.png";
import upImg from "./images/up.png";

const Shared = () => {
  const [isPayoutsVisible, setPayoutsVisible] = useState(true); // initial state is visible
  const [refLink, setRefLink] = useState("botkits.ru/?ref=12345");
  const [isCopied, setCopied] = useState(false);

  const togglePayoutsVisibility = () => {
    setPayoutsVisible(!isPayoutsVisible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // уведомление исчезнет через 2 секунды
  };
  
  return (
    <div className="partners">
      <div className="partners__header">
        <h2 className="partners__title">Партнерская программа</h2>
        <button className="partners__btn-request">Запросить выплату</button>
      </div>
      <div className="partners__ref">
        <div className="partners__ref-link">botkits.ru/?ref=12345</div>
        <div className="partners__ref-copy" onClick={copyToClipboard}>
          <img src={copyImg} alt="Скопировать" />
          {isCopied && <div className="partners__copied-notice">Ссылка скопирована</div>}
        </div>
      </div>
      <div className="partners__content">
        <div className="partners__stats">
          <h3>Статистика рефераллов</h3>
          <table className="partners__table partners__table--stats">
            <thead>
              <tr>
                <th>Перешли по ссылке</th>
                <th>Регистраций</th>
                <th>Оплата</th>
                <th>Сумма</th>
                <th>Комиссия</th>
                <th>Выплачено</th>
                <th>Вывод</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>28 человек</td>
                <td>15</td>
                <td className="paid">Оплачено</td>
                <td>5 000 ₽</td>
                <td>1 500 ₽</td>
                <td>4 500 ₽</td>
                <td>1 500 ₽</td>
              </tr>
              <tr>
                <td>17 человек</td>
                <td>8</td>
                <td className="paid">Оплачено</td>
                <td>15 000 ₽</td>
                <td>4 500 ₽</td>
                <td>8 200 ₽</td>
                <td>4 500 ₽</td>
              </tr>
              <tr>
                <td>10 человек</td>
                <td>10</td>
                <td className="paid">Оплачено</td>
                <td>5 000 ₽</td>
                <td>1 500 ₽</td>
                <td>10 000 ₽</td>
                <td>1 500 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="partners__payouts">
          <div className="partners__payouts--title">
            <h3>Выплаты</h3>
            <button
              className={`partners__detailed ${
                isPayoutsVisible ? "up" : "down"
              }`}
              onClick={togglePayoutsVisibility}
            >
              <img src={upImg} alt="up" />
            </button>
          </div>
          {isPayoutsVisible && (
            <table className="partners__table partners__table--payouts">
              <thead>
                <tr>
                  <th>Дата запроса</th>
                  <th>Дата выплаты</th>
                  <th>Акт</th>
                  <th>Статус</th>
                  <th>Сумма выплаты</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>05.07.22</td>
                  <td>07.07.22</td>
                  <td>Док.pdf</td>
                  <td className="paid">Выплачено</td>
                  <td>1 500 ₽</td>
                </tr>
                <tr>
                  <td>02.07.22</td>
                  <td>-</td>
                  <td>Фото.png</td>
                  <td className="processing">В обработке</td>
                  <td>4 500 ₽</td>
                </tr>
                <tr>
                  <td>27.06.22</td>
                  <td>28.06.22</td>
                  <td>Data.pdf</td>
                  <td className="paid">Выплачено</td>
                  <td>1 000 ₽</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shared;
