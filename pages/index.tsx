import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TopNav from "../components/TopNav";
import MainLandingBody from "../components/MainLandingBody";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <a className="">
        <TopNav></TopNav>
      </a>
      <a className="">
        <MainLandingBody></MainLandingBody>
      </a>
      <a className="">
        <Footer></Footer>
      </a>
    </div>
  );
}
