import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TopNav from "../components/TopNav";
import MainLandingBody from "../components/MainLandingBody";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <a className="flex-initial">
        <TopNav></TopNav>
      </a>
      <a className="flex-auto h-full">
        <MainLandingBody></MainLandingBody>
      </a>
      <a className="flex-none">
        <Footer></Footer>
      </a>
    </div>
  );
}
