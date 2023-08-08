import { MenuItemProps } from "./types";
import { ReactComponent as DashboardIcon } from "../../images/icon/side bar/dashboard.svg";
import { ReactComponent as StatisticsIcon } from "../../images/icon/side bar/charts.svg";
import { ReactComponent as AccessIcon } from "../../images/icon/side bar/access.svg";
import { ReactComponent as CrmIcon } from "../../images/icon/side bar/crm.svg";
import { ReactComponent as FunnelsIcon } from "../../images/icon/side bar/constructor.svg";
import { ReactComponent as ListsIcon } from "../../images/icon/side bar/lists.svg";
import { ReactComponent as MailingIcon } from "../../images/icon/side bar/mailing.svg";
import { ReactComponent as LendingIcon } from "../../images/icon/side bar/minilanding.svg";
import { ReactComponent as DialoguesIcon } from "../../images/icon/side bar/dialogue.svg";

export const mockMenu: MenuItemProps[] = [
    {
        text: "Дашборд",
        Icon: DashboardIcon,
        link: "/",
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
        link: "/shared-access",
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
