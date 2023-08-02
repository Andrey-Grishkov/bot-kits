import {
  FC,
  ReactNode,
  ReactNodeArray,
  SVGProps,
  useMemo,
  useState,
} from "react";
import Sidebar from "./components/Sidebar";

export interface MenuItemProps {
  id?: string;
  text: string;
  link?: string;
  subMenu?: MenuItemProps[];
  Icon?: FC<
    SVGProps<SVGSVGElement> & {
      /** Alternative text in title tag. */
      title?: string;
    }
  >;
  code: string;
}

interface SidebarContainerProps {
  children: ReactNode | ReactNodeArray;
}
const menu: MenuItemProps[] = [
  {
    text: "Мини-лендинг",
    // Icon: lendingIcom,
    code: "products",
    link: "/products/catalog",
    subMenu: [
      {
        text: "Сайт + Vk",
        link: "/products/catalog",
        code: "productsCatalog",
      },
    ],
  },
];

const SidebarContainerOLD = ({ children }: SidebarContainerProps) => {
  const userMenuItems = useMemo(() => menu, [menu]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        ...(isOverlayOpen && {
          "&::after": {
            content: '""',
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: "black",
            opacity: 0.3,
          },
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          minHeight: `calc(100vh - 56px)`,
        }}
      >
        <Sidebar
          isSidebarOpenAdaptive={isSidebarOpen}
          closeMenu={() => {
            setIsSidebarOpen(false);
            setIsOverlayOpen(false);
          }}
          menuItems={userMenuItems}
          setOverlay={setIsOverlayOpen}
        />
      </div>
    </div>
  );
};

export default SidebarContainerOLD;
