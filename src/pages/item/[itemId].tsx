import {
  BranchesOutlined,
  CalculatorOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  FlagOutlined,
  ReadOutlined,
  SmileOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Descriptions,
  Divider,
  Layout,
  PageHeader,
  Row,
  Tag,
  Typography,
  notification
} from "antd";

import AnimatedContainer from "../../components/AnimatedContainer";
import { GetServerSideProps } from "next";
import Head from "next/head";
import HeaderComponent from "../../components/Header";
import Image from "next/image";
import { Order } from "../../services/types";
import React from "react";
import { createNegotiation } from "../../services/negocio";
import { getOrderById } from "../../services/ordem";
import { itemType } from "../../Constants";
import moment from "moment";
import styles from "../../../styles/OrderDetails.module.css";
import { useRouter } from "next/router";

const { Content } = Layout;

interface Props {
  orderData: Order | null;
}

const routes = [
  {
    path: "/",
    breadcrumbName: "Início",
  },
  {
    path: "/catalogo",
    breadcrumbName: "Catálogo",
  },
  {
    path: "/item",
    breadcrumbName: "Detalhes da oferta",
  },
];

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

const Item = ({ orderData }: Props) => {
  const router = useRouter();

  const {
    area_conhecimento,
    emprestimo,
    tipo,
    quantidade,
    descricao,
    acao,
    nome_instituicao,
    data_validade,
    data_publicacao,
    nome,
    email,
    contato,
  } = orderData;

  const onBack = () => {
    router.back();
  };

  const getCardTags = () => {
    const tags = [];
    const subjectTag = (
      <Tag
        icon={subjectData[area_conhecimento].icon}
        color={subjectData[area_conhecimento].color}
      >
        {area_conhecimento}
      </Tag>
    );
    const isBorrowingTag = <Tag color="default">Empréstimo</Tag>;

    tags.push(subjectTag);
    if (emprestimo) tags.push(isBorrowingTag);

    return tags;
  };

  const getCoverImage = () => {
    return subjectData[area_conhecimento].img;
  };

  const message = {
    ['success']: {
      message: 'Pedido enviado',
      description:
        'Um email foi enviado para o proprietario do produto',
        icon: <SmileOutlined style={{ color: '#08979C' }} />,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    },
    ['failed']: {
      message: 'Pedido não pode ser enviado',
      description:
        'Tente novamente mais tarde',
        icon: <FlagOutlined style={{ color: '#08979C' }} />,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    }
  }

  const handleSelectItem = async () => {
    const status = await createNegotiation()
    const msg = status === 204 ? message['succes'] : message['failed']
    notification.open(msg);
  }

  const handleReportItem = () => {
    notification.open({
      message: 'Denuncia feita',
      description:
        'Os administradores do sistema irão verificar a ocorrência',
        icon: <FlagOutlined style={{ color: '#FF0000' }} />,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  return (
    <AnimatedContainer>
      <Head>
        <title>{orderData.item}</title>
        <meta name="description" content={orderData.descricao} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout style={{ backgroundColor: "#FAFAFA !important" }}>
        <HeaderComponent />
        <div
          style={{
            padding: "0px 160px",
            height: "100vh",
            backgroundColor: "#FAFAFA",
          }}
        >
          <PageHeader
            className={styles.create_offer_page_header}
            onBack={onBack}
            breadcrumb={{ routes }}
            title={"Detalhes da oferta"}
          />
          <Content className={styles.grid}>
            <div>
              <Typography.Title>{orderData.item}</Typography.Title>
              {getCardTags()}
              <Descriptions
                title="Características"
                column={1}
                size="middle"
                style={{ width: 500, marginTop: "2rem" }}
                labelStyle={{ fontWeight: "bold" }}
                contentStyle={{
                  textAlign: "right",
                  justifyContent: "flex-end",
                }}
              >
                <Descriptions.Item
                  label="Tipo de item"
                  style={{ borderBottom: "1px solid #F0F0F0" }}
                >
                  {itemType[tipo]}
                </Descriptions.Item>
                <Divider type="horizontal" />
                <Descriptions.Item
                  label="Quantidade"
                  style={{ borderBottom: "1px solid #F0F0F0" }}
                >
                  {quantidade ?? "-"}
                </Descriptions.Item>
                <Divider />

                <Descriptions.Item
                  label="Data de publicação"
                  style={{ borderBottom: "1px solid #F0F0F0" }}
                >
                  {moment(data_publicacao, "YYYY-MM-DD").format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Divider />

                <Descriptions.Item
                  label="Data de validade"
                  style={{ borderBottom: "1px solid #F0F0F0" }}
                >
                  {data_validade
                    ? moment(data_validade, "YYYY-MM-DD").format("DD/MM/YYYY")
                    : "-"}
                </Descriptions.Item>
              </Descriptions>
              <div className={styles.section}>
                <Typography.Title level={4} style={{ fontWeight: "bold" }}>
                  Descrição
                </Typography.Title>
                <Typography.Text>{descricao}</Typography.Text>
              </div>
              <div className={styles.section}>
                <Typography.Title level={4} style={{ fontWeight: "bold" }}>
                  Contato
                </Typography.Title>
                <div className={styles.contact}>
                  <div className={styles.img_container}>
                    <Image
                      alt="card image"
                      src="/cover.svg"
                      width={68}
                      height={68}
                    />
                  </div>
                  <div className={styles.contact_info}>
                    <Row>
                      <div>
                        <Typography.Title level={4}>{nome}</Typography.Title>
                        <div className={styles.instituicao}>
                          <EnvironmentOutlined /> {nome_instituicao}
                        </div>
                      </div>
                    </Row>
                    <Row justify="start">
                      <div className={styles.col}>
                        <Typography.Text className={styles.label}>
                          Email
                        </Typography.Text>
                        <Typography.Text>{email}</Typography.Text>
                      </div>
                      <div className={styles.col}>
                        <Typography.Text className={styles.label}>
                          Telefone
                        </Typography.Text>
                        <Typography.Text>{contato ?? "-"}</Typography.Text>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card
                style={{ width: 340,height: 340}}
                cover={
                  <Image
                    alt="card image"
                    src={getCoverImage()}
                    width={264}
                    height={150}
                  />
                }
              >
                <Button className={styles.button} htmlType="button" onClick={handleSelectItem}>
                  Preciso deste item
                </Button>
                <Button style ={{width: 300}} htmlType="button" type="default" onClick={handleReportItem}>
                  <FlagOutlined/> Denunciar anúncio
                </Button>
              </Card>
            </div>
          </Content>
        </div>
      </Layout>
    </AnimatedContainer>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps<Props, { itemId: string }> =
  async ({ params }) => {
    const id = params.itemId;
    const orderData = await getOrderById(Number(id));
    return {
      props: {
        orderData,
      },
    };
  };
