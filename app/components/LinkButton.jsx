import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function LinkButton({
	href,
	children,
	external = false,
	showArrow = false,
	className = "",
}) {
	const externalProps = external
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<Link
			href={href}
			className={`flex text-xs lg:text-sm gap-2 items-center bg-opacity-5 p-2 px-4 rounded-lg bg-[var(--btn-primary-bg)] hover:border-[var(--btn-primary-border)] ${className}`}
			{...externalProps}
		>
			{children}
			{showArrow && <FiArrowUpRight fontSize={22} />}
		</Link>
	);
}
