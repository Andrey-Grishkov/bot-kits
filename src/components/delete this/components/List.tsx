import { Dispatch, FC, SetStateAction } from "react";

import { ListElement } from "./ListElement";
import { MenuItemProps } from "../SidebarContainerOLD";

interface ListProps {
  className?: string;
  items: MenuItemProps[];
  level: number;
  allLevels: number;
  activeMenuPoints: MenuItemProps[];
  closeMenu?: () => void;
  setMenu: Dispatch<SetStateAction<MenuItemProps[][]>>;
  activeMenuPointsByUser: string[];
  setActiveMenuPointsByUser: Dispatch<SetStateAction<string[]>>;
}

export const List: FC<ListProps> = ({
  className,
  items,
  level,
  allLevels,
  activeMenuPoints,
  closeMenu,
  setMenu,
  activeMenuPointsByUser,
  setActiveMenuPointsByUser,
}) => {
  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    color: "grey",
    fill: "currentColor",
    width: "100%",
    padding: `12px 20px`,
    textAlign: "left",
    background: "transparent",
    "&:hover": {
      color: "white",
      backgroundColor: "dark",
    },
  };
  console.log("items", items);
  const isUserSelect = activeMenuPointsByUser.length > 0;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <ul
        style={{
          overflow: "auto",
          position: "sticky",
          top: 0,
          paddingBottom: "48px",
        }}
      >
        {items.map((item) => {
          const active = isUserSelect
            ? Boolean(activeMenuPointsByUser.find((code) => code === item.code))
            : Boolean(activeMenuPoints.find((i) => i.id === item.id));

          return (
            <ListElement
              key={item.id}
              item={item}
              level={level}
              allLevels={allLevels}
              menuItemStyles={menuItemStyle}
              active={active}
              onClick={() => {
                setActiveMenuPointsByUser((points) => {
                  if (item.subMenu) {
                    return [...points.slice(0, level), item.code];
                  }
                  if (item.link) return [];
                  return points;
                });
                setMenu((menu) => {
                  if (item.subMenu) {
                    return [...menu.slice(0, level + 1), item.subMenu];
                  }

                  if (item.link) {
                    if (closeMenu) closeMenu();
                    return [...menu.slice(0, 1)];
                  }
                  return menu;
                });
              }}
            />
          );
        })}
      </ul>

      {/*<CloseButton />*/}
    </div>
  );
};
