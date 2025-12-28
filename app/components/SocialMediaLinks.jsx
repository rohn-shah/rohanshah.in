import LinkButton from "./LinkButton";

const socialLinks = [
	{ name: "Twitter", href: "https://twitter.com/rohn_shah" },
	{ name: "GitHub", href: "https://github.com/rohn-shah" },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/rohn-shah/" },
];

export default function SocialMediaLinks() {
	return (
		<div className="flex lg:gap-3 gap-2">
			{socialLinks.map((link) => (
				<LinkButton
					key={link.name}
					href={link.href}
					external
					showArrow
					className="w-min"
				>
					{link.name}
				</LinkButton>
			))}
		</div>
	);
}
