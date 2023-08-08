import { useState, useCallback } from "react";

import "./NavBar.scss";
import { useNav } from "../../context/navBarContext";

import { mockMenu } from "./mock";

import { useLocation } from "react-router-dom";

import logoIcon from "../../images/icon/side bar/logo.svg";
import widthLogoIcon from "../../images/icon/side bar/widthLogo.svg";

const NavBar = ({ ...props }) => {
    const location = useLocation();

    const { isOverlayOpen, setIsOverlayOpen } = useNav();

    const findActiveLink = useCallback(() => {
        const currentPath = location.pathname;

        const activeLink = mockMenu.find((menuItem) => {
            if (menuItem.link === currentPath) return true;

            if (menuItem.subMenu) {
                return menuItem.subMenu.some(
                    (subMenuItem) => subMenuItem.link === currentPath
                );
            }

            return false;
        });

        return activeLink ? activeLink.link : undefined;
    }, [location.pathname]);

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
            className='navBar-Container'
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
                    transition: "width 0.15s ease",
                    ...(isOverlayOpen && {
                        position: "absolute",
                    }),
                }}
            >
                <nav {...props}>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",

                            gap: "24px",
                            ...(!isOverlayOpen
                                ? {
                                      alignItems: "center",
                                      paddingLeft: 0,
                                  }
                                : { paddingLeft: "16px" }),
                        }}
                    >
                        <div>
                            {/* todo link to / */}
                            {isOverlayOpen ? (
                                <img
                                    src={widthLogoIcon}
                                    alt='logo'
                                    width='145px'
                                    height='34px'
                                    style={{
                                        marginTop: "16px",
                                        flexShrink: 0,
                                    }}
                                />
                            ) : (
                                <img
                                    src={logoIcon}
                                    alt='logo'
                                    width='38px'
                                    height='34px'
                                    style={{
                                        marginTop: "16px",
                                        flexShrink: 0,
                                    }}
                                />
                            )}
                        </div>

                        <button
                            style={{
                                background: "#243CBB",
                                color: "white",
                                textTransform: "uppercase",
                                margin: "4px 0 20px 0",
                                border: "none",
                                height: "46px",
                                maxWidth: "182px",
                                ...(!isOverlayOpen
                                    ? {
                                          width: "46px",
                                          borderRadius: "50%",
                                      }
                                    : {
                                          borderRadius: "10px",
                                          padding: "14px 14px",
                                      }),
                            }}
                        >
                            {isOverlayOpen ? "Добавить бота" : "+"}
                        </button>

                        {mockMenu.map((item, index) => (
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
                                    style={{
                                        textDecoration: "none",
                                        color: "#333",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.Icon && (
                                        <item.Icon
                                            style={{
                                                ...(isOverlayOpen && {
                                                    marginRight: "16px",
                                                }),
                                                flexShrink: 0,
                                            }}
                                            stroke={
                                                findActiveLink() === item.link
                                                    ? "blue"
                                                    : "#D7DEEA"
                                            }
                                        />
                                    )}

                                    {isOverlayOpen && (
                                        <>
                                            {item.text}
                                            {item.subMenu && (
                                                <span
                                                    style={{
                                                        marginLeft: "5px",
                                                        marginTop: "6px",
                                                    }}
                                                >
                                                    {openSubMenu === index
                                                        ? "▲"
                                                        : "▼"}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </a>
                                {item.subMenu && isOverlayOpen && (
                                    <ul
                                        style={{
                                            listStyle: "none",
                                            marginTop: "16px",
                                            backgroundColor: "#f9f9f9",

                                            display:
                                                openSubMenu === index
                                                    ? "block"
                                                    : "none",
                                        }}
                                    >
                                        {item.subMenu.map((subMenuItem) => (
                                            <li key={subMenuItem.text}>
                                                <a
                                                    href={subMenuItem.link}
                                                    style={{
                                                        textDecoration: "auto",
                                                    }}
                                                >
                                                    {subMenuItem.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
