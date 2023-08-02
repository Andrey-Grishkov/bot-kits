import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { MenuItemProps } from "../SidebarContainerOLD";
import { List } from "./List";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  menuItems: MenuItemProps[];
  setOverlay?: (overlay: boolean) => void;
  isSidebarOpenAdaptive?: boolean;
  closeMenu?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  menuItems = [],
  setOverlay,
  isSidebarOpenAdaptive,
  closeMenu,
  ...props
}) => {
  const [menu, setMenu] = useState<MenuItemProps[][]>([menuItems]);
  useEffect(() => {
    setMenu([menuItems]);
  }, [menuItems]);

  const location = useLocation();
  const { pathname } = location;

  const getMatch = useCallback(
    (link?: string) => link && new RegExp(link).test(pathname),
    [pathname]
  );
  console.log("menuItems", menuItems);
  /** Найдем активные пункты меню, соответсвующие урлу */
  const activeMenuPoints = useMemo(() => {
    const points: MenuItemProps[] = [];
    const findActive = (items?: MenuItemProps[]): MenuItemProps | undefined => {
      if (!items) return undefined;
      const finded = items.find((i) => {
        if (i.link) return getMatch(i.link);
        return findActive(i.subMenu);
      });
      if (finded) points.push(finded);
      return finded;
    };
    findActive(menuItems);
    return points;
  }, [getMatch, menuItems]);

  /** Установим выбранные пользователем активные пункты */
  const [activeMenuPointsByUser, setActiveMenuPointsByUser] = useState<
    string[]
  >([]);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handler = () => {
    setMenu([menuItems]);
    if (closeMenu) closeMenu();
    if (setOverlay) setOverlay(false);
    setActiveMenuPointsByUser([]);
  };
  useEffect(() => {
    const listener = (event: any) => {
      if (!menuRef.current || menuRef.current.contains(event.target as Node))
        return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [menuRef, handler]);

  return (
    <nav
      style={{
        display: "flex",
        position: "relative",
        zIndex: 2,
      }}
      ref={menuRef}
      {...props}
    >
      {menu.map((items, index) => (
        <List
          setMenu={setMenu}
          key={index}
          items={items}
          level={index}
          closeMenu={closeMenu}
          allLevels={menu.length}
          activeMenuPoints={activeMenuPoints}
          activeMenuPointsByUser={activeMenuPointsByUser}
          setActiveMenuPointsByUser={setActiveMenuPointsByUser}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
