"use client";
import { useEffect, useState } from "react";

// Components
import { FiArrowUpRight } from "react-icons/fi";
import Header from "./components/Header";

// Hooks
import useLocalStorage from "./hooks/useLocalStorage";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [previouslySelectedTheme, setPreviouslySelectedTheme] = useLocalStorage(
    "theme",
    ""
  );

  const handleClick = (redirectTo) => {
    let redirectURL = "";

    switch (redirectTo) {
      case "twitter":
        redirectURL = "https://twitter.com/rohn_shah";
        break;
      case "gitHub":
        redirectURL = "https://github.com/rohn-shah";
        break;
      case "linkedIn":
        redirectURL = "https://www.linkedin.com/in/rohn-shah/";
        break;

      default:
        break;
    }

    window.open(redirectURL, "_blank");
  };

  useEffect(() => {
    if (previouslySelectedTheme) {
      setTheme(previouslySelectedTheme);
    } else {
      // Fallback
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [previouslySelectedTheme]);

  return (
    <main className="min-h-screen flex flex-col" data-theme={theme}>
      <Header
        theme={theme}
        setTheme={setTheme}
        setPreviouslySelectedTheme={setPreviouslySelectedTheme}
      />
      <div className="flex flex-1 flex-col items-center justify-center p-8 lg:p-24 lg:pb-52 gap-1">
        <div className="w-full p-0 lg:w-7/12 lg:p-12 box-border gap-8 flex flex-col">
          <div
            className="text-2xl lg:text-3xl"
            style={{ fontFamily: "ShareTechMono" }}
          >{`Hello world! 👋`}</div>
          <div className="text-xs lg:text-sm textColor">
            My name is Rohan Shah. I am a Fullstack Developer from India having
            over three years of experience in web app development. I am
            currently working as a Frontend Engineer at
            <br />
            <i>Sequoia Consulting Group</i>.
            <br />
            <br />
            In my previous role at <i>200OK Solutions</i>, I helped a number of
            startups get off the ground by developing their websites and
            applications. I am proficient in a variety of technologies,
            including HTML, CSS, JavaScript, ReactJS, NextJS, and Node.js. I am
            also a strong problem solver and I am always willing to go the extra
            mile to help my clients succeed.
          </div>
          <div className="flex lg:gap-3 gap-2">
            <button
              onClick={() => handleClick("twitter")}
              className="btn-primary w-min shadows"
            >
              Twitter <FiArrowUpRight fontSize={22} />
            </button>
            <button
              onClick={() => handleClick("gitHub")}
              className="btn-primary w-min shadows"
            >
              GitHub <FiArrowUpRight fontSize={22} />
            </button>
            <button
              onClick={() => handleClick("linkedIn")}
              className="btn-primary w-min shadows"
            >
              LinkedIn <FiArrowUpRight fontSize={22} />
            </button>
          </div>
          <div class="tinyLineContainer">
            <div class="tinyLine tinyLine1"></div>
            <div class="tinyLine tinyLine2"></div>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
}
