import { Button, Row, Typography } from "antd";
import { ListOrdemResponse, OrdemResponse, Order } from "../../services/types";

import { GetServerSideProps } from "next";
import OfferCard from "../OfferCard";
import React from "react";
import { getMostRecentOrders } from "../../services/ordem";
import { itemActionType } from "../../Constants";
import { useRouter } from "next/router";

// import { Container } from './styles';
interface Props {
  recentOrderList: OrdemResponse[];
}

const RecentOrders = ({ recentOrderList }: Props) => {
  const router = useRouter();
  return (
    <div style={{ padding: "3rem 3rem" }}>
      <Typography.Title level={2} style={{ color: "#08979C" }}>
        Últimos anúncios
      </Typography.Title>
      <Row justify="space-around" style={{ padding: "1rem 1rem" }}>
        {recentOrderList.map((card) => {
          return (
            <OfferCard
              key={card.id}
              cardData={{
                offerType: itemActionType[card.acao],
                title: card.item,
                university: card.nome_instituicao,
                subject: card.area_conhecimento,
                isBorrowing: card.emprestimo,
                id: card.id,
              }}
            />
          );
        })}
      </Row>
      <Row justify="center" style={{ marginTop: "2rem" }}>
        <Button
          key="creat_add"
          size="large"
          style={{
            backgroundColor: "#08979C",
            color: "white",
            width: 300,
            height: 40,
            borderRadius: 4
          }}
          onClick={() => router.push("/catalogo")}
        >
          Ver todos os anuncios
        </Button>
      </Row>
    </div>
  );
};

export default RecentOrders;
