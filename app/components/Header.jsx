"use client";
import React from "react";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = (props) => {
  const { theme, setTheme, setPreviouslySelectedTheme } = props;

  const toggleDarkMode = (checked) => {
    const selectedTheme = checked ? "dark" : "light";
    setTheme(selectedTheme);
    setPreviouslySelectedTheme(selectedTheme);
  };

  const isDarkMode = theme === "dark";

  return (
    <nav class="p-5">
      <div class="container mx-auto flex flex-wrap items-center justify-between text-lg">
        <span style={{ fontFamily: "ShareTechMono", fontSize: "1.2rem" }}>
          Rohan.
        </span>
        <div class="flex justify-between items-center gap-2">
          <Link
            href="mailto:rohanshah945@gmail.com"
            className="btn-primary w-max"
          >
            Let's Connect.
          </Link>
          <DarkModeSwitch
            className="ml-2 md:ml-4"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={27}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
