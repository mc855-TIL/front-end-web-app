import "antd/dist/antd.css";

import { Button, Layout } from "antd";

import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

const { Header } = Layout;

const HeaderComponent = () => {

  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo-lp.png"
          height={48}
          width={164}
          alt="logo"
          className={styles.logo}
        />
      </div>


      <div className={styles.toolBar}>
        <Button className={styles.button}>Acessar</Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
