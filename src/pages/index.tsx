import "antd/dist/antd.css";

import AnimatedContainer from "../components/AnimatedContainer";
import Footer from "../components/Footer";
import { GetServerSideProps } from "next";
import Head from "next/head";
import HeaderComponent from "../components/LandingPage/Header";
import { Layout } from "antd";
import { ListOrdemResponse } from "../services/types";
import Logos from "../components/Logos";
import RecentOrders from "../components/RecentOrders";
import ScienceBanner from "../components/LandingPage/ScienceBanner";
import SearchBox from "../components/LandingPage/SearchBox";
import { getMostRecentOrders } from "../services/ordem";
import styles from "../../styles/Home.module.css";

interface Props {
  recentOrderList: ListOrdemResponse;
}

export default function Home({recentOrderList}: Props) {

  return (
    <AnimatedContainer>
      <Head>
        <title>Solidariedade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.fcm.unicamp.br/fcm/sites/default/files/favicon-transparent.ico" />
      </Head>
      <Layout>
        <Layout className={styles.main}>
          <HeaderComponent />
          <SearchBox />
          <ScienceBanner />
          <RecentOrders recentOrderList={recentOrderList.itens.slice(0, 4)} />
          <Logos />
        </Layout>
        <Layout className={styles.footer}>
          <Footer />
        </Layout>
      </Layout>
    </AnimatedContainer>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await getMostRecentOrders();

  return {
    props: {
      recentOrderList: data,
    },
  };
};
