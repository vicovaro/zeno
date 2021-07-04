import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TopNav from "../components/TopNav";
import MainLandingPage from "../components/MainLandingPage";

export default function Home() {
  return (
    <div>
      <TopNav></TopNav>
      <MainLandingPage></MainLandingPage>
    </div>
  );
}
