import {
  useContext,
  createContext,
  ReactNode,
  ReactNodeArray,
  Dispatch,
  SetStateAction,
  useState,
  FC,
} from "react";

type IsOpen = boolean;

export interface NavContextProps {
  isSidebarOpen: IsOpen;
  setIsSidebarOpen: Dispatch<SetStateAction<IsOpen>>;
  isOverlayOpen: IsOpen;
  setIsOverlayOpen: Dispatch<SetStateAction<IsOpen>>;
}

const NavContext = createContext<NavContextProps | null>(null);
NavContext.displayName = "NavContext";

export const NavProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isOverlayOpen,
        setIsOverlayOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error(`Hook useNav must be used within NavProvider`);
  }

  return context;
};
