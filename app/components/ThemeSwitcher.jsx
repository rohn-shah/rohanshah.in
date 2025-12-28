"use client";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const currentTheme = document.documentElement.dataset.theme || "light";
		setTheme(currentTheme);
	}, []);

	const toggleDarkMode = (checked) => {
		const newTheme = checked ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.dataset.theme = newTheme;
		localStorage.setItem("theme", JSON.stringify(newTheme));
	};

	return (
		<DarkModeSwitch
			className="ml-2 md:ml-4"
			checked={theme === "dark"}
			onChange={toggleDarkMode}
			size={27}
		/>
	);
};

export default ThemeSwitcher;
