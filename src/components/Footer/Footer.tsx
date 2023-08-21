import { useEffect, useState } from "react";
import "./Footer.scss";

function Footer() {
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
        <footer
            className='footer'
            style={{
                marginRight: `-${widthOffset}px`,
            }}
        >
            © 2023 BotKits
        </footer>
    );
}

export default Footer;
