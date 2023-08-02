import React, { useMemo, useState } from "react";
import Overlay from "./components/Overlay";

import { useNav } from "../../context/navBarContext";

import { mockMenu } from "./mock";

import { useLocation } from "react-router-dom";

const NavBar = ({ ...props }) => {
  const location = useLocation();

  const mockMenuItems = useMemo(() => mockMenu, [mockMenu]);
  const { isOverlayOpen, setIsOverlayOpen } = useNav();

  const findActiveLink = () => {
    const currentPath = location.pathname.substring(1);

    const activeLink = mockMenu.find((menuItem) => {
      if (menuItem.link === currentPath) return true;

      if (menuItem.subMenu) {
        return menuItem.subMenu.some(
          (subMenuItem) => subMenuItem.link === currentPath
        );
      }

      return false;
    });

    return activeLink ? activeLink.link : null;
  };

  const [openSubMenu, setOpenSubMenu] = useState(null);
  const handleSubMenuClick = (index: any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleMouseEnter = () => {
    setIsOverlayOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div
      style={{
        gridArea: "N",
        position: "relative",
        minWidth: "86px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          height: "100%",
          width: isOverlayOpen ? "240px" : "100%",
          margin: "16xp 0 16px 16px",
          overflowX: "hidden",
          backgroundColor: "#F8F9FB",
          borderRadius: "10px",
          transition: "width 0.3s ease",
          ...(isOverlayOpen && { position: "absolute" }),
        }}
      >
        <Overlay active={isOverlayOpen}>
          <nav {...props}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",

                gap: "8px",
              }}
            >
              {mockMenuItems.map((item, index) => (
                <li
                  key={item.text}
                  style={{
                    marginRight: "20px",
                    position: "relative",
                    ...(!isOverlayOpen && {
                      margin: "0 auto",
                    }),
                  }}
                >
                  <a
                    href={item.link}
                    onClick={() => handleSubMenuClick(index)}
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    {item.Icon && (
                      <img
                        src={item.Icon}
                        alt="information"
                        style={{
                          marginRight: "16px",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {isOverlayOpen && (
                      <>
                        {item.text}
                        {item.subMenu && (
                          <span style={{ marginLeft: "5px" }}>
                            {openSubMenu === index ? "▲" : "▼"}
                          </span>
                        )}
                      </>
                    )}
                  </a>
                  {item.subMenu && (
                    <ul
                      style={{
                        listStyle: "none",

                        backgroundColor: "#f9f9f9",

                        display: openSubMenu === index ? "block" : "none",
                      }}
                    >
                      {item.subMenu.map((subMenuItem) => (
                        <li key={subMenuItem.text}>
                          <a href={subMenuItem.link}>{subMenuItem.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Overlay>
      </div>
    </div>
  );
};

export default NavBar;
