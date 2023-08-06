import { HTMLProps, ReactNode } from "react";

interface OverlayProps extends HTMLProps<HTMLDivElement> {
  active: boolean;
  children: ReactNode;
}
const Overlay = ({ active, ...props }: OverlayProps) => {
  return (
    <div
      style={{
        width: "100%",
        ...(active && {
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
      {...props}
    />
  );
};

export default Overlay;
