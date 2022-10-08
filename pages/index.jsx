import Head from "next/head";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import SkydivingCat from "../components/SkydivingCat";
import { useHotkeys } from "react-hotkeys-hook";
import scripts from "../scripts";

export default function Home() {
  scripts();

  useHotkeys("ctrl+0", (e) => {
    e.preventDefault();

    const element = document.getElementById("main");
    if (element.classList.contains("-rotate-6")) {
      element.classList.remove("-rotate-6", "cursor-help");
    } else {
      element.classList.add("-rotate-6", "cursor-help");
    }
  });

  useHotkeys("ctrl+9", (e) => {
    e.preventDefault();

    const element = document.getElementById("skydivingcat");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });

  return (
    <div
      className="font-firacode bg-black overflow-hidden accent-indigo-600"
      id="container"
    >
      <Head>
        <title>PratZero - Welcome</title>
      </Head>
      <div id="main">
        <Banner />
        <Hero />
        <CTA />
      </div>
      <SkydivingCat />
    </div>
  );
}
