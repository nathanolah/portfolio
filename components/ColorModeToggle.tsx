import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export const ColorModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const renderTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MdOutlineLightMode
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MdDarkMode
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <div>{renderTheme()}</div>;
};
