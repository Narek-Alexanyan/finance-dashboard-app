import useDarkSide from "@/hooks/useDarkSide";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const [colorTheme, toggleTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(
    Boolean(colorTheme === "dark")
  );

  const toggleDarkMode = (checked: boolean): void => {
    toggleTheme();
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
    </div>
  );
};

export default Switcher;
