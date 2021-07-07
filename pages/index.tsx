import Head from "next/head";
import Image from "next/image";

import TopNav from "@components/TopNav";
import LandingPageBody1 from "@components/LandingPageBody1";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="">
      <TopNav></TopNav>
      <LandingPageBody1></LandingPageBody1>
      <Footer></Footer>
    </div>
  );
}
