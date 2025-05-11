import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    return (
      <div className={`wrapper ${theme}`}>
        {children}
      </div>
    );
  };
