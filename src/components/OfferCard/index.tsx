import "antd/dist/antd.css";

import {
  BranchesOutlined,
  CalculatorOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Card, Tag } from "antd";

import Image from "next/image";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Router } from "next/dist/client/router";
import Text from "antd/lib/typography/Text";
import { getOrderById } from "../../services/ordem";
import {useRouter} from "next/router";

const subjectData = {
  Biológicas: {
    img: "/Biológicas-cover.png",
    icon: <ExperimentOutlined />,
    color: "success",
  },
  Biologicas: {
    img: "/Biológicas-cover.png",
    icon: <ExperimentOutlined />,
    color: "success",
  },
  Biologica: {
    img: "/Biológicas-cover.png",
    icon: <ExperimentOutlined />,
    color: "success",
  },
  Exatas: {
    img: "/Exatas-cover.png",
    icon: <CalculatorOutlined />,
    color: "magenta",
  },
  Humanas: {
    img: "/Humanas-cover.png",
    icon: <ReadOutlined />,
    color: "orange",
  },
  Tecnológicas: {
    img: "/Tecnológicas-cover.png",
    icon: <BranchesOutlined />,
    color: "cyan",
  },
};

interface Props {
  cardData: {
    id: number;
    offerType: string;
    title: string;
    university: string;
    subject: string;
    isBorrowing: boolean;
    offerImg?: string;
  };
}

function OfferCard({ cardData }: Props) {
  const { id, offerType, title, university, subject, isBorrowing, offerImg } =
    cardData;

  const router = useRouter()
  const getCoverImage = () => {
    return subjectData[subject].img;
  };

  const getCardTags = () => {
    const tags = [];
    const subjectTag = (
      <Tag icon={subjectData[subject].icon} color={subjectData[subject].color}>
        {subject}
      </Tag>
    );
    const isBorrowingTag = <Tag color="default">Empréstimo</Tag>;

    tags.push(subjectTag);
    if (isBorrowing) tags.push(isBorrowingTag);

    return tags;
  };

  const handleCardClick = async () => {
    const data = await getOrderById(cardData.id)
    console.log(data)
    router.push(`item/${cardData.id}`)
  }

  return (
    <Card
      style={{ width: 264, cursor: 'pointer'}}
      cover={
        <Image
          alt="card image"
          src={getCoverImage()}
          width={264}
          height={150}
        />
      }
      actions={getCardTags()}
      onClick={handleCardClick}
    >
      <Text>{offerType}</Text>
      <Meta
        title={title}
        description={
          <Tag
            style={{ border: "none", background: "none", paddingLeft: 0 }}
            icon={<EnvironmentOutlined />}
          >
            {university}
          </Tag>
        }
      />
    </Card>
  );
}

export default OfferCard;
