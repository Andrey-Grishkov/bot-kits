import { FC, HTMLProps, useCallback, useMemo } from "react";

import { MenuItemProps } from "../SidebarContainerOLD";

interface ListElementProps extends HTMLProps<HTMLLIElement> {
  item: MenuItemProps;
  level: number;
  hasChanges?: boolean;
  className?: string;
  onClick: () => void;
  allLevels: number;
  menuItemStyles: any;
  active: boolean;
}

export const ListElement: FC<ListElementProps> = ({
  item,
  level,
  allLevels,
  className,
  hasChanges,
  onClick,
  menuItemStyles,
  active,
  ...props
}) => {
  const isLastLevel = allLevels - 1 === level;
  const isFirstLevel = level === 0;
  const theme = isFirstLevel ? "dark" : "light";

  const itemStyle = useMemo(
    () => ({
      ...menuItemStyles,
      "&:disabled": {
        cursor: "default",
        color: "grey",
      },
      ...(theme === "light" && {
        color: "black",
        "&:hover": {
          background: "grey",
        },
      }),
      ...(theme === "dark" && {
        "&:hover": {
          background: "dark",
          color: "white",
        },
      }),
      ...(active && {
        color: theme === "light" ? "black" : "white",
        background: theme === "light" ? "grey" : "dark",
      }),
    }),
    [active, menuItemStyles, theme]
  );

  const getContent = useCallback(
    () => (
      <>
        {item.Icon && (
          <item.Icon
            style={{
              marginRight: hasChanges ? 0 : "16px",
              flexShrink: 0,
            }}
          />
        )}
        {hasChanges && (
          <span
            style={{
              width: 6,
              height: 6,
              display: "inline-block",
              alignSelf: "flex-start",
              background: "green",
              borderRadius: "50%",
              marginLeft: "4px",
              marginRight: "16px",
              flexShrink: 0,
            }}
          />
        )}
      </>
    ),
    [hasChanges, isFirstLevel, isLastLevel, item, active]
  );

  return (
    <li {...props}>
      {item.link ? (
        <a
          className={className}
          style={itemStyle}
          title={item?.text}
          onClick={onClick}
          href={item.link}
        >
          {getContent()}
        </a>
      ) : (
        <button
          className={className}
          type="button"
          style={itemStyle}
          onClick={onClick}
          title={item?.text}
          aria-label={item?.text}
          onMouseEnter={level > 0 ? onClick : undefined}
        >
          {getContent()}
        </button>
      )}
    </li>
  );
};
