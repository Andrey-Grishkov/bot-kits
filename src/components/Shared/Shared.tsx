import React, { useCallback, useState } from "react";
import "./Shared.scss";
import copyImg from "./images/copy.png";
import upImg from "./images/up.png";
import { mockData, mockPayouts } from "../../utils/data";
import { ButtonCopy } from "../UI/Buttons/Copy/ButtonCopy";

const COPIED_TIMEOUT_DURATION = 3000;

interface ToggleTableProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface StatsTableProps {
  isStatsVisible: boolean;
  toggleStatsVisibility: () => void;
}

interface PayoutsTableProps {
  isPayoutsVisible: boolean;
  togglePayoutsVisibility: () => void;
}

const RefLinkSection: React.FC<RefLinkSectionProps> = () => {
  const [isCopied, setCopied] = useState(false);
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, COPIED_TIMEOUT_DURATION);
  }, [link]);

  return (
    <div className="partners__ref">
      <div className="partners__ref-container">
        <div className="partners__ref-link">{link}</div>
        <ButtonCopy
          type="default"
          onClick={copyToClipboard}
          role="button"
          aria-label="Скопировать ссылку" // для доступности, так как у нас нет текста внутри кнопки
        />
      </div>
      {isCopied && (
        <div className="partners__copied-notice">Ссылка скопирована</div>
      )}
    </div>
  );
};

export default RefLinkSection;

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
        <div className="partners__table partners__table--stats partners__table--mobile">
          <table>
            <tbody>
              {isStatsVisible ? (
                mockData.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr key={"linkClicks-" + index}>
                      <th>Перешли по ссылке</th>
                      <td>{row.linkClicks} человек</td>
                    </tr>
                    <tr key={"registrations-" + index}>
                      <th>Регистраций</th>
                      <td>{row.registrations}</td>
                    </tr>
                    <tr key={"paymentStatus-" + index}>
                      <th>Оплата</th>
                      <td className={row.paymentStatus ? "paid" : ""}>
                        {row.paymentStatus ? "Оплачено" : "Не оплачено"}
                      </td>
                    </tr>
                    <tr key={"sum-" + index}>
                      <th>Сумма</th>
                      <td>{row.sum} ₽</td>
                    </tr>
                    <tr key={"commission-" + index}>
                      <th>Комиссия</th>
                      <td>{row.commission} ₽</td>
                    </tr>
                    <tr key={"paidOut-" + index}>
                      <th>Выплачено</th>
                      <td>{row.paidOut} ₽</td>
                    </tr>
                    <tr
                      key={"withdrawal-" + index}
                      className="partners__list-item"
                    >
                      <th>Вывод:</th>
                      <td>{row.withdrawal} ₽</td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <>
                  <tr>
                    <th>Перешли по ссылке</th>
                    <td>{mockData[0].linkClicks} человек</td>
                  </tr>
                  <tr>
                    <th>Регистраций</th>
                    <td>{mockData[0].registrations}</td>
                  </tr>
                  <tr>
                    <th>Оплата</th>
                    <td className={mockData[0].paymentStatus ? "paid" : ""}>
                      {mockData[0].paymentStatus ? "Оплачено" : "Не оплачено"}
                    </td>
                  </tr>
                  <tr>
                    <th>Сумма</th>
                    <td>{mockData[0].sum} ₽</td>
                  </tr>
                  <tr>
                    <th>Комиссия</th>
                    <td>{mockData[0].commission} ₽</td>
                  </tr>
                  <tr>
                    <th>Выплачено</th>
                    <td>{mockData[0].paidOut} ₽</td>
                  </tr>
                  <tr>
                    <th>Вывод:</th>
                    <td>{mockData[0].withdrawal} ₽</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="partners__table partners__table--stats partners__table--desktop">
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
        <>
          {/* Мобильная версия */}
          <div className="partners__table partners__table--payouts partners__table--mobile">
            <table>
              <tbody>
                {mockPayouts.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr key={"requestDate-" + index}>
                      <th>Дата запроса</th>
                      <td>{row.requestDate}</td>
                    </tr>
                    <tr key={"paymentDate-" + index}>
                      <th>Дата выплаты</th>
                      <td>{row.paymentDate}</td>
                    </tr>
                    <tr key={"act-" + index}>
                      <th>Акт</th>
                      <td>{row.act}</td>
                    </tr>
                    <tr key={"status-" + index}>
                      <th>Статус</th>
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
                    </tr>
                    <tr key={"payoutSum-" + index}>
                      <th>Сумма выплаты</th>
                      <td>{row.payoutSum} ₽</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Десктопная версия */}
          <div className="partners__table partners__table--payouts partners__table--desktop">
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
                    <td>{row.act}</td>
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
        </>
      )}
    </div>
  );
};

const SharedAccess = () => {
  const [isPayoutsVisible, setPayoutsVisible] = useState(true);
  const [isStatsVisible, setStatsVisibille] = useState(true);

  const link = "botkits.ru/?ref=12345";

  const toggleStatsVisibility = () => {
    setStatsVisibille(!isStatsVisible);
  };

  const togglePayoutsVisibility = () => {
    setPayoutsVisible(!isPayoutsVisible);
  };

  return (
    <div className="partners">
      <div className="partners__header">
        <h2 className="partners__title">Партнерская программа</h2>
        <button className="partners__btn-request">Запросить выплату</button>
      </div>
      <RefLinkSection link={link} />
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

export default SharedAccess;
