import React from "react";
import Head from "next/head";
import Image from "next/image";

import TopNav from "@components/TopNav";
import LandingPageBody1 from "@components/LandingPageBody1";
import LandingPageBody2 from "@components/LandingPageBody2";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex justify-between flex-col content-start	w-full">
      <Head>
        <title>Zeno</title>
        <meta name="viewport" />
      </Head>
      <TopNav></TopNav>
      <LandingPageBody1></LandingPageBody1>
      <LandingPageBody2></LandingPageBody2>
      <Footer></Footer>
    </div>
  );
}
