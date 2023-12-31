# Документация проекта Boot Kits
_______

## Полезные ссылки

Деплой проекта - /здесь будет ссылка на деплой githubPages (или на другой сервис)/

Макет в Figma от заказчика - https://www.figma.com/file/rWfiVoY2kR5CK3xasMwoFp/BOTkit-Admin-panel-(Copy)?type=design&node-id=7-20254&mode=design

Бриф проекта - https://www.notion.so/BotKits-11-2f6ea7e8409349108278d17f475fa9bb
_____
## Файловая структура

### В корне проекта:

* **node-modules** – это папка, которая содержит программные пакеты и библиотеки, которые требуются нашему приложению (Загружаем через npm после согласования с тимлидом) 
* **public** – это папка, в которой находится страница index.html, определяющая HTML шаблон всего нашего приложения (Добавим сюда еще фавикон из макета)
* **src** (сокращенно от source) – каталог, содержащий исходный код приложения.
* **gitignore** – нужен для исключения файлов и папок из системы контроля версий GIT. 
* **package.json** – содержит набор метаданных о приложении
* **package-lock.json** – файл, который содержит в себе полную информацию обо всех установленных программах и библиотеках, включая их версии.
* **README.md** - это описание проекта (Будет заполнен перед отправкой на 1-е ревью)
* **tsconfig.json** - конфигурация для TypeScript (отредактируем командно при необходимости)
_________
### Папка с кодом проекта src:

* **components** - интерфейс разбит на отдельные компоненты. У каждого компонента имеется своя папка, 
  в ней дочерние файлы - сам компонент и стили к нему (Компоненты именуем с заглавной буквы)
* **images** - папка содержит все изображения. В дочерней папке **icons** содержаться иконки (Рекомендую называть фаилы согласно классам по БЭМ, 
  чтобы можно было найти какая картинка к какому элементу относиться)
* **interfaces** - в папке содержаться интерфейсы TypeScript (по ходу проекта определим схожие интерфейсы. Называем интерфейсы с большой буквы I)
* **redux** - в папке содержаться фаилы управляющие логикой redux с хранилищем (при интеграции редакса совместно 
  определим какие парамеры будем записывать в хранилище совместно, т.к. фаил общий для всех)
* **stories** - в папке будут фаилы сторибука (смотрим туториалы от наставника, Елизавета проводит мастер класс)
* **types** - в папке содержаться типы TypeScript (называем с большой T)
* **utils** - в папке содержаться вспомогательные скрипты, такие как константы (Также сюда добавим иммитацию API).
  в **variables.scss** - будут константы и миксины scss (их будем импортировать в фаилы стилей, где потребуется - 
  фаил очень важный, т.к. много будет шаблонов в верстке - флексы, шрифты, размеры экраны и т.д. Пример использования
  в UI.scss)
* **vendor** - здесь будут шрифты, normalize.css
_____
### UI KIT:
* В папке **components** содержиться папка со всеми элементами **UI**. Для наглядности все элементы в разных 
  состояних вкладываем в компонент UI, который будет доступен по ссылке '/ui'. Эти элементы мы копируем в другие 
  компоненты проекта, при необходимости. Перед ревью компонент удаляем.
_____
## Как работать над проектом

Клонируем проект и от ветки develop создаем ветку по шаблону: 
feature/<здесь краткое описание содержимого> (например feature/header) - для добавления новой функциональности
fix/ - для исправления замечаний
refactor/ - для оптимизации
docs/ - добавление документации
(Аналогично стараемся делать коммиты git commit -m "feat: add footer icons")

По завершению работы над своей веткой пушим ее в репозиторий и делаем пул реквест к ветке develop.
Пишем краткое описание, что удалось сделать и на какие моменты следует обратить внимание. 
Далее тимлид проводит ревью, а также другие участники команды по назначению тимлида (пишем комментарии к строчкам кода в гитхабе, 
а создатель реквеста пишет свои ответы - будет исправлено, просьба уточнить или аргументированный отказ исправить).
После замечания исправляются и делается повторный пулл реквест с описанием того, что исправлено.
Если замечания все исправлены, то тимлид осуществляет мердж в ветку девелоп (просьба самим не мержить без предупреждения)

Обращаю внимание!!! Вносить правки в общие фаилы (app, main, rootReducer, root.sccs и т.д.) можно только с согласия тимлида,
чтобы минимизировать конфликты слияния с другими участниками
_____
## Кодстайл
* для отступов используем двойной пробел
* кавычки одинарные
* в конце строки ставим точку с запятой
* именуем согласно тому, как учили в ЯП (например, константы с больших букв, через тире)
* используем БЭМ
* Возможно в конце добавим линтер, где пропишем правила
* касательно классов, функций, то пока можно оставить смешанную структуру или совместно определить
какого придерживаться стиля (рекомендую использовать функциональные выражения и стрелочные функции)
* (данный раздел дополним по ходу проекта)
____
## Стек технологий

React, Redux, TypeScript, SCSS, Story book (Дополним библиотеками, нужно изучить советы наставника)

____
## Общение в команде
* Задачи каждому участнику раздает тимлид на доске в Notion: https://www.notion.so/2-7fcce1acc3a4417cad88b37f45b92582
  (Буду стараться также дублировать в телеграмм)
* Если возникают сложности с выполнением задачи или не успеваете - нужно написать тимлиду (обязательно тегнуть). Также
если очень хотите выполнять какую-то конкретную задачу, то тоже пишите (но не факт, что тимлид поменяет задачу, 
  т.к. могут быть другие желающие или задача подобрана для человека с большим количеством свободного времени или наличием соответвенных навыков)
* Будем устраивать созвоны по мере необходимости, минимум раз в неделю
* Если участник не справляется с задачей или не выходит на связь, то тимлид перепоручает задачу другому человеку
* Советую активно общаться в телеграмме, если возникают вопросы, на которые оперативно не может ответить тимлид, то
  пишем в пачку и тегаем наставника или менеджера (в зависимости от вопроса)
* все учебные материалы, воросы с решениями, которые очень важны и касаются всех участников - кидаем в пачку
