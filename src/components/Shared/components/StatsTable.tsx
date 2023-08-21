import { mockData } from "../../../utils/data";
import { IStatsTableProps } from "../types/types";
import upImg from "../images/up.png";

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

export default StatsTable;
