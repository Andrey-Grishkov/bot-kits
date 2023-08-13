import "./Header.scss";
import Burger from "../../images/icons/24/burger_menu.svg";
import Arrow from "../../images/icons/24/arrow_down.svg";
import Avatar from "../../images/user_icon.png";
import BellIcon from "../../images/icons/24/bell.svg";
import HelpIcon from "../../images/icons/24/help.svg";

function Header() {
    return (
        <header className='header'>
            <img width='24px' height='24px' src={Burger} alt='Burger Menu' />
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
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
