import { AREAS, ITEM_TYPE } from "../../../Constants";
import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";

import { getOrdersByName } from "../../../services/ordem";
import styles from "./SearchBox.module.css";
import { useRouter } from "next/router";

// import { Container } from './styles';

type formItems = {
  college?: string;
  itemName: string;
  itemType: typeof ITEM_TYPE;
  subject: typeof AREAS;
};

const SearchBox = () => {
  const router = useRouter();

  const onFinish = async (values: formItems) => {
    router.push(`/catalogo?search=${values.itemName}`);
    //const data = await getOrdersByName(values.itemName, true)
    //console.log("Success:", data);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className={styles.container}>
      <Typography.Title level={1} className={styles.title}>
        Sua pesquisa não pode parar!
      </Typography.Title>
      <Typography.Paragraph className={styles.subtitle}>
        O Solidariedade à Pesquisa é uma plataforma de compartilhamento de
        insumos, materiais e equipamentos, unindo pesquisadores em todo o
        Brasil.
      </Typography.Paragraph>

      <Form
        layout="vertical"
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Col className={styles.c}>
          <Form.Item
            label="O que você procura?"
            name="itemName"
            rules={[{ required: true, message: "Insira o nome do item" }]}
          >
            <Input placeholder="Procure um item" />
          </Form.Item>

          <div className={styles.row}>
            <Form.Item
              label="Universidade"
              name="college"
              style={{ flex: 1, paddingRight: 8 }}
            >
              <Input placeholder="Procure um item" />
            </Form.Item>
            <Form.Item
              label="Área"
              name="subject"
              rules={[{ required: true, message: "Selecione uma área" }]}
              style={{ flex: 1, paddingRight: 8 }}
            >
              <Select>
                {(Object.keys(AREAS) as Array<keyof typeof AREAS>).map(
                  (value) => (
                    <Select.Option key={value} value={AREAS[value]}>
                      {value}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
            <Form.Item
              label="Tipo de item"
              name="itemType"
              style={{ flex: 1 }}
              rules={[{ required: true, message: "Selecione o tipo do item" }]}
            >
              <Select>
                {(Object.keys(ITEM_TYPE) as Array<keyof typeof ITEM_TYPE>).map(
                  (value) => (
                    <Select.Option key={value} value={ITEM_TYPE[value]}>
                      {value}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </div>
        </Col>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} type="primary" htmlType="submit">
            Procurar insumo
          </Button>
          <Typography.Link
            href="/catalogo"
            style={{ color: "#08979C", textDecoration: "underline" }}
          >
            Ver catálogo de insumos
          </Typography.Link>
        </div>
      </Form>
    </Layout>
  );
};

export default SearchBox;
