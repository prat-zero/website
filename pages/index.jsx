import Head from "next/head";
import Hero from "../components/Hero.home";
import Banner from "../components/Banner.home";
import CTA from "../components/CTA.home";

export default function Home() {
  return (
    <div className="font-firacode">
      <Head>
        <title>Pratyush - Welcome</title>
      </Head>
      <div id="main">
        <Banner />
        <Hero />
        <CTA />
      </div>
    </div>
  );
}
