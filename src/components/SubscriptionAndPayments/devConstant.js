
const devConstant = {
    subscription: 'Бизнес',
    // statusActive: 'неактивен',
    // statusActive: 'новый',
    statusActive: 'активен',
    whyNoSubscription: 'Недостаточно средств',
    answerSubscription: 'Не удалось продлить подписку ',
    answerPayments: 'Следующее списание',
    dateAnswerSubscription: "15/06/2020",
    dateAnswerPayments: "2020-06-15",
    cardBank: '*****1119',
    balance: 0
  }

const options = [ 
    'Все', 
    'списание',
    'поступление',
]
const tableHead = { 
    data: 'Дата', 
    sum: 'Сумма', 
    operation: 'Операция', 
    annotation: 'Примечание', 
    statusPay: 'Статус'
};
const payArray = [
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "Активация тарифа бизнес", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "-", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "-", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "поступление", annotation: "Активация тарифа бизнес", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Промокод", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Промокод", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Промокод", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Промокод", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operation: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},

]

export { devConstant, options, payArray, tableHead }