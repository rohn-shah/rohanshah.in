"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = ({ theme, setTheme, setPreviouslySelectedTheme }) => {
	const toggleDarkMode = (checked) => {
		const selectedTheme = checked ? "dark" : "light";
		setTheme(selectedTheme);
		setPreviouslySelectedTheme(selectedTheme);
	};

	const isDarkMode = theme === "dark";

	return (
		<DarkModeSwitch
			className="ml-2 md:ml-4"
			checked={isDarkMode}
			onChange={toggleDarkMode}
			size={27}
		/>
	);
};

export default ThemeSwitcher;
