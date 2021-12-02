import { Button, Card, Modal } from "antd";
import { HeartOutlined, NotificationOutlined } from "@ant-design/icons";

import React from "react";
import styles from "./Modal.module.css";
import { useRouter } from "next/router";

interface Props {
  isVisible: boolean;
  onCancel: () => void;
}

const CreateOrderModal = ({ isVisible, onCancel }: Props) => {
  const router = useRouter()

  const handleCreateOffer = () => {
    router.push('criar-oferta')
  }

  const handleCreateWish = {}
  
  return (
    <Modal
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancelar
        </Button>,
      ]}
      width={550}
      bodyStyle={{ display: "flex", justifyContent: "space-between" }}
      title="Criar um anúncio"
    >
      <Card
        cover={
          <div className={styles.cover}>
            <NotificationOutlined style={{ color: "#08979C", fontSize: 25 }} />
          </div>
        }
        hoverable
        onClick={handleCreateOffer}
        style={{ width: 246, height: 210 }}
      >
        <Card.Meta
          title="Ofertar um item"
          description="Se você tem um item que pode oferecer à comunidade, anuncie-o aqui."
        />
      </Card>
      <Card
        cover={
          <div className={styles.cover}>
            <HeartOutlined style={{ color: "#08979C", fontSize: 25 }} />
          </div>
        }
        hoverable
        style={{ width: 246, height: 210 }}
      >
        <Card.Meta
          title="Fazer um pedido"
          description="Peça à comunidade por um item que você precisa para sua precisa."
        />
      </Card>
    </Modal>
  );
};

export default CreateOrderModal;
