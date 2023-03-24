import { useEffect, useState } from "react";

type localStorageType = string | null | (() => string);

const useDarkSide = () => {
  const [theme, setTheme] = useState<localStorageType>(
    localStorage.getItem("theme") ?? "dark"
  );
  
  const colorTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme as string);

    localStorage.setItem("theme", theme as string);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme(colorTheme)
  }

  return [theme, toggleTheme, setTheme] as const;
};

export default useDarkSide;
