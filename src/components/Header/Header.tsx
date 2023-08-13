import "./Header.scss";
import { ReactComponent as Burger } from "../../images/icons/24/burger_menu.svg";
import Arrow from "../../images/icons/24/arrow_down.svg";
import Avatar from "../../images/user_icon.png";
import BellIcon from "../../images/icons/24/bell.svg";
import HelpIcon from "../../images/icons/24/help.svg";
import { useNav } from "../../context/navBarContext";
import { useState, useEffect } from "react";

function Header() {
    const { isOverlayOpen, setIsOverlayOpen } = useNav();

    const [widthOffset, setWidthOffset] = useState(getWidthOffset());

    function getWidthOffset() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1440) {
            const offset = (screenWidth - 1440) / 2;
            return offset;
        }
        return 0;
    }

    useEffect(() => {
        function handleResize() {
            setWidthOffset(getWidthOffset());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className='header' style={{ marginRight: `-${widthOffset}px` }}>
            <button
                className={
                    isOverlayOpen
                        ? "header__burger-icon header__burger-icon_state_active"
                        : "header__burger-icon"
                }
                onClick={() => {
                    setIsOverlayOpen(!isOverlayOpen);
                }}
            >
                <Burger />
            </button>

            <div
                style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "center",
                    marginRight: `${widthOffset}px`,
                }}
            >
                <p
                    className='icon-desktop'
                    style={{
                        color: "black",
                        borderRight: "1px solid #E4E9F1",
                    }}
                >
                    Тариф <span style={{ fontWeight: "bold" }}>Демо</span>
                </p>
                <img
                    className='icon-desktop'
                    src={HelpIcon}
                    alt='information'
                />
                <img
                    className='icon-desktop'
                    src={BellIcon}
                    alt='notifications '
                />
                <img
                    width='36px'
                    height='36px'
                    style={{ borderRadius: "20px" }}
                    src={Avatar}
                    alt='user avatar'
                />
                <p className='icon-desktop' style={{ color: "black" }}>
                    User Name
                </p>
                <img className='icon-desktop' src={Arrow} alt='just icon' />
            </div>
        </header>
    );
}

export default Header;
