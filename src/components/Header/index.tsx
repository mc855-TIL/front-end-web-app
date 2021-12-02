import "antd/dist/antd.css";

import { Button, Input, Layout } from "antd";

import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

const { Header } = Layout;

const HeaderComponent = () => {
  const router = useRouter()
  const onSearch = (value: string) => router.push(`/catalogo?search=${value}`)

  const handleLogoClick = () => {
    router.push('/')
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <Image
          src="/logo.png"
          height={48}
          width={164}
          alt="logo"
          className={styles.logo}
        />
      </div>

      <Input.Search
        placeholder="Procure um item"
        style={{ width: "70%" }}
        size={"large"}
        onSearch={onSearch}
      />

      <div className={styles.toolBar}>
        <InfoCircleOutlined style={{ color: "#FFF", fontSize: "16px" }} />
        <Button>Acessar</Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
