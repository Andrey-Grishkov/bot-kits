import React, { useCallback, useState } from "react";
import "./Shared.scss";
import copyImg from "./images/copy.png";
import upImg from "./images/up.png";
import { mockData, mockPayouts } from "../../utils/data";

const COPIED_TIMEOUT_DURATION = 3000;

interface RefLinkSectionProps {
  link: string;
  onCopy: () => void;
}

interface StatsTableProps {
  isStatsVisible: boolean;
  toggleStatsVisibility: () => void;
}

interface PayoutsTableProps {
  isPayoutsVisible: boolean;
  togglePayoutsVisibility: () => void;
}


const RefLinkSection: React.FC<RefLinkSectionProps> = ({ link, onCopy }) => (
  <div className="partners__ref">
    <div className="partners__ref-link">{link}</div>
    <div className="partners__ref-copy" onClick={onCopy} role="button">
      <img src={copyImg} alt="Скопировать" />
    </div>
  </div>
);

const StatsTable: React.FC<StatsTableProps> = ({
  isStatsVisible,
  toggleStatsVisibility,
}) => {
  return (
    <div className="partners__stats">
      <div className="partners__stats--title">
        <h3>Статистика рефераллов</h3>
        <button
          className={`partners__detailed partners__detailed--stats ${
            isStatsVisible ? "up" : "down"
          }`}
          onClick={toggleStatsVisibility}
        >
          <img src={upImg} alt="up" />
        </button>
      </div>
      <div className="partners__section partners__section--mobile">
        <div className="partners__table partners__table--stats">
          <table>
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
              {isStatsVisible ? (
                mockData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.linkClicks} человек</td>
                    <td>{row.registrations}</td>
                    <td className={row.paymentStatus ? "paid" : ""}>
                      {row.paymentStatus ? "Оплачено" : "Не оплачено"}
                    </td>
                    <td>{row.sum} ₽</td>
                    <td>{row.commission} ₽</td>
                    <td>{row.paidOut} ₽</td>
                    <td>{row.withdrawal} ₽</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>{mockData[0].linkClicks} человек</td>
                  <td>{mockData[0].registrations}</td>
                  <td className={mockData[0].paymentStatus ? "paid" : ""}>
                    {mockData[0].paymentStatus ? "Оплачено" : "Не оплачено"}
                  </td>
                  <td>{mockData[0].sum} ₽</td>
                  <td>{mockData[0].commission} ₽</td>
                  <td>{mockData[0].paidOut} ₽</td>
                  <td>{mockData[0].withdrawal} ₽</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button className="partners__btn-request partners__btn-request--mobile">
          Запросить выплату
        </button>
      </div>
    </div>
  );
};

const PayoutsTable: React.FC<PayoutsTableProps> = ({
  isPayoutsVisible,
  togglePayoutsVisibility,
}) => {
  return (
    <div className="partners__payouts">
      <div className="partners__payouts--title">
        <h3>Выплаты</h3>
        <button
          className={`partners__detailed partners__detailed--payouts ${
            isPayoutsVisible ? "up" : "down"
          }`}
          onClick={togglePayoutsVisibility}
        >
          <img src={upImg} alt="up" />
        </button>
      </div>
      {isPayoutsVisible && (
        <div className="partners__table partners__table--payouts">
          <table>
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
              {mockPayouts.map((row, index) => (
                <tr key={index}>
                  <td>{row.requestDate}</td>
                  <td>{row.paymentDate}</td>
                  <td className="act">{row.act}</td>
                  <td
                    className={
                      row.status === "Выплачено"
                        ? "paid"
                        : row.status === "В обработке"
                        ? "processing"
                        : ""
                    }
                  >
                    {row.status}
                  </td>
                  <td>{row.payoutSum} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Shared = () => {
  const [isPayoutsVisible, setPayoutsVisible] = useState(true);
  const [isCopied, setCopied] = useState(false);
  const [isStatsVisible, setStatsVisibille] = useState(true);

  const link = "botkits.ru/?ref=12345";

  const toggleStatsVisibility = () => {
    setStatsVisibille(!isStatsVisible);
  };

  const togglePayoutsVisibility = () => {
    setPayoutsVisible(!isPayoutsVisible);
  };

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, COPIED_TIMEOUT_DURATION);
  }, []);

  return (
    <div className="partners">
      <div className="partners__header">
        <h2 className="partners__title">Партнерская программа</h2>
        <button className="partners__btn-request">Запросить выплату</button>
      </div>
      <RefLinkSection link="botkits.ru/?ref=12345" onCopy={copyToClipboard} />
      {isCopied && (
        <div className="partners__copied-notice">Ссылка скопирована</div>
      )}
      <div className="partners__content">
        <StatsTable
          isStatsVisible={isStatsVisible}
          toggleStatsVisibility={toggleStatsVisibility}
        />
        <PayoutsTable
          isPayoutsVisible={isPayoutsVisible}
          togglePayoutsVisibility={togglePayoutsVisibility}
        />
      </div>
    </div>
  );
};

export default Shared;
