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

      {/* top navigation bar */}
      <Header></Header>

      {/* body */}
      <main className="relative">
        <ZenoHomeBody1></ZenoHomeBody1>
      </main>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
