
const devConstant = {
    subscription: 'Бизнес',
    statusNotActive: 'неактивен',
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
    operatin: 'Операция', 
    annotation: 'Примечание', 
    statusPay: 'Статус'
};
const payArray = [
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "Активация тарифа бизнес", status: "Отклонено"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Автоматическое пополнение счета", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "-", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "поступление", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Промокод", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Промокод", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Промокод", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Промокод", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа Стандарт", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},
    {data: {d: "15/05/21", h: "13.56"}, sum: 1390, operatin: "списание", annotation: "Активация тарифа бизнес", status: "Успешно"},

]

export { devConstant, options, payArray, tableHead }