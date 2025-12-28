import "./globals.css";
import { Inter } from "next/font/google";
import ThemeScript from "./components/ThemeScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rohan Shah",
	description:
		"Front-end developer with half a decade of experience, currently at Sequoia in Bangalore — building clean, performant web experiences.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ThemeScript />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
