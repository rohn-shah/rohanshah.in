"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LinkButton from "./LinkButton";

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
				<span style={{ fontFamily: "FiraMono", fontSize: "1.2rem" }}>
					Rohan.
				</span>
				<div class="flex justify-between items-center gap-2">
					<LinkButton href="mailto:rohanshah945@gmail.com" className="w-max">
						Let's Connect
					</LinkButton>
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
