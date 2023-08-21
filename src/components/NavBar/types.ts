import { FC, FunctionComponent, SVGProps } from "react";

export interface MenuItemProps {
    id?: string;
    text: string;
    link?: string;
    subMenu?: MenuItemProps[];
    Icon?: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
}
