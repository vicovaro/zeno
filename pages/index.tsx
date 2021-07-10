import React from "react";
import Head from "next/head";

import Header from "@components/Header";
import ZenoHome from "@components/ZenoHome";
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
      <main className="flex-grow">
        <ZenoHome></ZenoHome>
      </main>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
