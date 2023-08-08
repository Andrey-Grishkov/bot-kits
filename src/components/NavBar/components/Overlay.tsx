import { HTMLProps, ReactNode } from "react";
import { useNav } from "../../../context/navBarContext";
import "./Overlay.css";
interface OverlayProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}
const Overlay = ({ children, ...props }: OverlayProps) => {
    const { isOverlayOpen } = useNav();
    return (
        <div
            className={
                isOverlayOpen
                    ? "main-overlay main-overlay--open"
                    : "main-overlay"
            }
            {...props}
        >
            {children}
        </div>
    );
};

export default Overlay;
