import { useState, useCallback } from "react";

import "./NavBar.scss";
import { useNav } from "../../context/navBarContext";

import { mockMenu } from "./mock";

import { Link, useLocation } from "react-router-dom";

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

    return (
        <div
            className={
                isOverlayOpen
                    ? "navBar-Container navBar-Container_isOpen_open"
                    : "navBar-Container"
            }
        >
            {isOverlayOpen && (
                <div
                    className='overlay'
                    onClick={() => setIsOverlayOpen(false)}
                />
            )}
            <div
                className={
                    isOverlayOpen
                        ? "navBar__menu navBar__menu_size_open"
                        : "navBar__menu"
                }
            >
                <nav {...props}>
                    <ul
                        className={
                            isOverlayOpen
                                ? "navBar__list navBar__list_size_open"
                                : "navBar__list"
                        }
                    >
                        <Link to='/'>
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
                        </Link>

                        <Link to='/addbot'>
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
                        </Link>
                        {mockMenu.map((item, index) => (
                            <li
                                key={item.text}
                                style={{
                                    margin: "0 20px 0 0",
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
