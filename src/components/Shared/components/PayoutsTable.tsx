import { mockPayouts } from "../../../utils/data";
import { IPayoutsTableProps } from "../types/types";
import upImg from "../images/up.png";
import React from "react";

const PayoutsTable: React.FC<IPayoutsTableProps> = ({
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

export default PayoutsTable;
