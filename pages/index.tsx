import React from "react";
import Head from "next/head";

import Header from "@components/Header";
import ZenoHomeBackgroundImage from "@components/ZenoHomeBackgroundImage";
import ZenoHomeBody1 from "@components/ZenoHomeBody1";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex justify-around flex-col content-start w-full">
      <Head>
        <title>Zeno</title>
        <meta name="viewport" />
      </Head>

      {/* Background images, it has to be first or everything breaks */}
      <ZenoHomeBackgroundImage/>

      {/* top and body div */}
      <Header/>
      <ZenoHomeBody1/>

      {/* footer */}
      <Footer/>
    </div>
  );
}
