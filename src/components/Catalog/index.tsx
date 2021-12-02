import "antd/dist/antd.css";

import { Button, Col, Input, Layout, PageHeader, Row } from "antd";
import { ITEM_ACTION_TYPE, itemActionType } from "../../Constants";
import React, { useState } from "react";

import CreateOrderModal from "../CreateOrderModal";
import { NotificationOutlined } from "@ant-design/icons";
import OfferCard from "../OfferCard";
import { OrdemResponse } from "../../services/types";
import styles from "./Catalog.module.css";

const { Header } = Layout;

interface Props {
  items: OrdemResponse[];
}

function Catalog({ items }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const routes = [
    {
      path: "/",
      breadcrumbName: "Início",
    },
    {
      path: "catalogo",
      breadcrumbName: "Catálogo",
    },
  ];

  const openModal = () => {
    setIsModalVisible(true);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <PageHeader
        className={styles.catalog_page_header}
        breadcrumb={{ routes }}
        title={"Catálogo"}
        subTitle={`${items.length} resultados`}
        extra={[
          <Button
            key="creat_add"
            size="large"
            className={styles.create_offer_button}
            icon={<NotificationOutlined />}
            onClick={openModal}
          >
            Criar anúncio
          </Button>,
        ]}
      />
      <Row gutter={[16, 24]} justify="start" style={{ paddingLeft: "1rem" }}>
        {items.map((card, i) => (
          <Col key={card.id} xs={24} sm={18} md={14} lg={10} xl={6}>
            <OfferCard
              cardData={{
                offerType: itemActionType[card.acao],
                title: card.item,
                university: card.nome_instituicao,
                subject: card.area_conhecimento,
                isBorrowing: card.emprestimo,
                id: card.id,
              }}
            />
          </Col>
        ))}
      </Row>
      <CreateOrderModal isVisible={isModalVisible} onCancel={onCancel} />
    </Layout>
  );
}

export default Catalog;
