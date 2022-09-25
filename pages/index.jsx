import Head from "next/head";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CTA from "../components/CTA";

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
