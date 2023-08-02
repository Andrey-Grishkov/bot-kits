import "./Header.scss";
import Burger from "../../images/icons/24/burger_menu.svg";
import Arrow from "../../images/icons/24/arrow_down.svg";
import Avatar from "../../images/user_icon.png";
import BellIcon from "../../images/icons/24/bell.svg";
import HelpIcon from "../../images/icons/24/help.svg";

function Header() {
  return (
    <header
      style={{
        gridArea: "H",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F8F9FB", // TODO delete this after fixes global background color
        borderBottom: "1px solid #D7DEEA",
        padding: "0 40px",
      }}
    >
      <img src={Burger} alt="Burger Menu" />
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <p
          style={{
            display: "block",
            color: "black",
            borderRight: "1px solid #E4E9F1",
          }}
        >
          Тариф <span style={{ fontWeight: "bold" }}>Демо</span>
        </p>
        <img src={HelpIcon} alt="information" />
        <img src={BellIcon} alt="notifications " />
        <img
          width="36px"
          height="36px"
          style={{ borderRadius: "20px" }}
          src={Avatar}
          alt="user avatar"
        />
        <p style={{ display: "block", color: "black" }}>User Name</p>
        <img src={Arrow} alt="just icon" />
      </div>
    </header>
  );
}

export default Header;
