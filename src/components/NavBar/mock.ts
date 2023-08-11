import { MenuItemProps } from "./types";
import DashboardIcon from "../../images/icon/side bar/dashboard.svg";
import StatisticsIcon from "../../images/icon/side bar/charts.svg";
import AccessIcon from "../../images/icon/side bar/access.svg";
import CrmIcon from "../../images/icon/side bar/crm.svg";
import FunnelsIcon from "../../images/icon/side bar/constructor.svg";

import ListsIcon from "../../images/icon/side bar/lists.svg";
import MailingIcon from "../../images/icon/side bar/mailing.svg";
import LendingIcon from "../../images/icon/side bar/minilanding.svg";
import DialoguesIcon from "../../images/icon/side bar/dialogue.svg";

export const mockMenu: MenuItemProps[] = [
  {
    text: "Дашборд",
    Icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    text: "Воронки",
    Icon: FunnelsIcon,
    link: "/funnels",
  },
  {
    text: "Рассылки",
    Icon: MailingIcon,
    link: "/mailing",
  },
  {
    text: "Списки",
    Icon: ListsIcon,
    link: "/lists",
  },
  {
    text: "Статистика",
    Icon: StatisticsIcon,
    link: "/statistics",
  },
  {
    text: "Диалоги",
    Icon: DialoguesIcon,
    link: "/dialogues",
  },
  {
    text: "Общий доступ",
    Icon: AccessIcon,
    link: "/partnership",
  },
  {
    text: "Мини-лендинг",
    Icon: LendingIcon,
    subMenu: [
      {
        text: "Сайт + Vk",
        link: "/social",
      },
    ],
  },
  {
    text: "СRM",
    Icon: CrmIcon,
    link: "/crm",
  },
];
