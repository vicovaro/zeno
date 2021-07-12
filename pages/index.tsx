import React from "react";
import Head from "next/head";

import Header from "@components/Header";
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
      <main className="relative"></main>

      {/* Footer <Footer /> */}
    </div>
  );
}
