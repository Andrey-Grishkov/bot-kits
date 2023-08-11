import "./Footer.scss";

function Footer() {
    return (
        <footer
            style={{
                gridArea: "F",
                height: "50px",
                padding: "15px 0 15px 40px",
                marginLeft: "40px",
                boxSizing: "border-box",
                borderTop: "1px solid #D7DEEA",

                color: "black",
            }}
        >
            © 2023 BotKits
        </footer>
    );
}

export default Footer;
