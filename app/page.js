import Header from "./components/Header";
import Divider from "./components/Divider";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<div className="flex-1 grid place-items-center p-8">
				<div className="w-full lg:w-7/12 gap-8 flex flex-col">
					<div className="text-2xl lg:text-3xl font-[FiraMono]">{`Hello world! 👋`}</div>
					<div className="text-xs lg:text-sm textColor">
						My name is Rohan Shah. I am a Fullstack Developer from India having
						over three years of experience in web app development. I am
						currently working as a Frontend Engineer at <i>Sequoia</i>.
						<br />
						<br />
						In my previous role at <i>200OK Solutions</i>, I helped a number of
						startups get off the ground by developing their websites and
						applications. I am proficient in a variety of technologies,
						including HTML, CSS, JavaScript, ReactJS, NextJS, and Node.js. I am
						also a strong problem solver and I am always willing to go the extra
						mile to help my clients succeed.
					</div>
					<SocialMediaLinks />
					<Divider />
					<br />
				</div>
			</div>
		</main>
	);
}
