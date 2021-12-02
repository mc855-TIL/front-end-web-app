import { Layout, Typography } from "antd";

import React from "react";
import styles from "./ScienceBanner.module.css";

const ScienceBanner = () => {
  return (
    <Layout style={{ backgroundColor: "white", paddingTop: "5rem" }}>
      <div className={styles.container}>
        <div className={styles.image}></div>

        <div className={styles.bannerText}>
          <Typography.Title level={2} style={{ color: "#08979C" }}>
            Conheça o Solidariedade
          </Typography.Title>
          <Typography.Paragraph>
            O Solidariedade à Pesquisa é a plataforma que facilita a comunicação
            entre alunos e professores das instituições de ensino superior, com
            o objetivo de otimizar o uso de recursos públicos para o
            desenvolvimento de pesquisas.
          </Typography.Paragraph>
          <Typography.Paragraph>
            A colaboração entre os participantes é a essência do Solidariedade à
            Pesquisa, aproximando quem tem com quem precisa de insumos
          </Typography.Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default ScienceBanner;
