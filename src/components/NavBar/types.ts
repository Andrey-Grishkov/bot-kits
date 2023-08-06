import { FC, SVGProps } from "react";

export interface MenuItemProps {
  id?: string;
  text: string;
  link?: string;
  subMenu?: MenuItemProps[];
  Icon?: string; //TODO replace for  FC<SVGProps<SVGSVGElement>>
}
