import React from "react";
import Head from "next/head";

import Header from "@components/Header";
import LandingPageSection1 from "@components/LandingPageSection1";
import LandingPageSection2 from "@components/LandingPageSection2";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex justify-around flex-col content-start w-full">
      <Head>
        <title>Zeno</title>
        <meta name="viewport" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative">
        <LandingPageSection1 />
        <LandingPageSection2 />
      </main>

      {/* Footer <Footer /> */}
    </div>
  );
}
