import LinkButton from "./LinkButton";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
	return (
		<nav className="p-5">
			<div className="container mx-auto flex flex-wrap items-center justify-between text-lg">
				<span className="font-[FiraMono] text-[1.5rem]">Rohan.</span>
				<div className="flex justify-between items-center gap-2">
					<LinkButton href="mailto:me@rohanshah.in" classNameName="w-max">
						Let's Connect
					</LinkButton>
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	);
};

export default Header;
