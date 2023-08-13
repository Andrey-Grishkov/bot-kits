import React, { useCallback, useState } from "react";
import "./Shared.scss";
import copyImg from "./images/copy.png";
import upImg from "./images/up.png";
import { mockData, mockPayouts } from "../../utils/data";
import { ButtonCopy } from "../UI/Buttons/Copy/ButtonCopy";
import {
  IPayoutsTableProps,
  IRefLinkSectionProps,
  IStatsTableProps,
} from "./types/types";
import { useClipboard } from "../../hooks/useClipboard";
import {
  togglePayoutsVisibility,
  toggleStatsVisibility,
} from "../../redux/visibilitySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const COPIED_TIMEOUT_DURATION = 3000;

const RefLinkSection: React.FC<IRefLinkSectionProps> = ({ link }) => {
  const { isCopied, copyToClipboard } = useClipboard(link);

  return (
    <div className="partners__ref">
      <div className="partners__ref-container">
        <div className="partners__ref-link">{link}</div>
        <ButtonCopy
          type="default"
          onClick={copyToClipboard}
          role="button"
          aria-label="Скопировать ссылку"
        />
      </div>
      {isCopied && (
        <div className="partners__copied-notice">Ссылка скопирована</div>
      )}
    </div>
  );
};

const renderMobileStatsRows = (data: typeof mockData) => {
  return data.map((row, index) =>
    statsColumns.map((column) => (
      <tr key={column.key + "-" + index}>
        <th>{column.label}</th>
        <td
          className={
            column.key === "paymentStatus" && row[column.key] ? "paid" : ""
          }
        >
          {column.format
            ? column.format(row[column.key])
            : row[column.key] + (column.suffix || "")}
        </td>
      </tr>
    ))
  );
};

const statsColumns = [
  {
    label: "Перешли по ссылке",
    key: "linkClicks",
    suffix: " человек",
    format: (val: any) => `${val} человек`,
  },
  { label: "Регистраций", key: "registrations" },
  {
    label: "Оплата",
    key: "paymentStatus",
    format: (val: any) => (val ? "Оплачено" : "Не оплачено"),
  },
  { label: "Сумма", key: "sum", suffix: " ₽" },
  { label: "Комиссия", key: "commission", suffix: " ₽" },
  { label: "Выплачено", key: "paidOut", suffix: " ₽" },
  { label: "Вывод:", key: "withdrawal", suffix: " ₽" },
];

const StatsTable: React.FC<IStatsTableProps> = ({
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
            {isStatsVisible
              ? renderMobileStatsRows(mockData)
              : renderMobileStatsRows([mockData[0]])}
          </table>
        </div>

        <div className="partners__table partners__table--stats partners__table--desktop">
          <table>
            <thead>
              <tr>
                {statsColumns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isStatsVisible ? (
                mockData.map((row, index) => (
                  <tr key={index}>
                    {statsColumns.map((column) => (
                      <td
                        key={column.key}
                        className={
                          column.key === "paymentStatus" && row[column.key]
                            ? "paid"
                            : ""
                        }
                      >
                        {column.format
                          ? column.format(row[column.key])
                          : row[column.key] + (column.suffix || "")}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  {statsColumns.map((column) => (
                    <td
                      key={column.key}
                      className={
                        column.key === "paymentStatus" &&
                        mockData[0][column.key]
                          ? "paid"
                          : ""
                      }
                    >
                      {column.format
                        ? column.format(mockData[0][column.key])
                        : mockData[0][column.key] + (column.suffix || "")}
                    </td>
                  ))}
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

const SharedAccess = () => {
  const dispatch = useDispatch();
  const isStatsVisible = useSelector(
    (state: RootState) => state.visibility.isStatsVisible
  );

  const isPayoutsVisible = useSelector(
    (state: RootState) => state.visibility.isPayoutsVisible
  );

  const link = "botkits.ru/?ref=12345";

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
          toggleStatsVisibility={() => dispatch(toggleStatsVisibility())}
        />
        <PayoutsTable
          isPayoutsVisible={isPayoutsVisible}
          togglePayoutsVisibility={() => dispatch(togglePayoutsVisibility())}
        />
      </div>
    </div>
  );
};

export default SharedAccess;
