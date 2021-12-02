import "antd/dist/antd.css";

import { Checkbox, Layout, Radio, Select, Space, Typography } from "antd";
import { ITEM_ACTION_TYPE, ITEM_TYPE, filterValues } from "../../Constants";
import React, { useEffect, useState } from "react";

import { DeleteOutlined } from "@ant-design/icons";
import styles from "./Sider.module.css";

const { Sider } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;

const SiderComponent = () => {
  const [filterQuantity, setFilterQuantity] = useState(0);
  const [offerType, setOfferType] = useState<ITEM_ACTION_TYPE>();
  const [borrowing, setIsBorrowing] = useState(false);
  const [areas, setAreas] = useState([])
  const [itemType, setItemType] = useState<ITEM_TYPE>()

  // const buildFilterObject = (): filterValues => {
  //   let filtersEnabled = [];
  //   let obj: filterValues;
  //   if (offerType) {
  //     filtersEnabled.push('acao');
  //     obj['acao'] = offerType
  //   }
  //   if(borrowing) {
  //     filtersEnabled.push('emprestimo')
  //     obj['emprestimo'] = borrowing;
  //   }
  //   if (areas.length) {
  //     filtersEnabled.push('areas')
  //     obj.area_do_conhecimento = areas;
  //   }

  //   return obj;
  // }

  // useEffect(() => {
  //   const filterObject = buildFilterObject();
  // }, [offerType, borrowing, areas, itemType])

  const offerTypeOptions = [
    { label: "Oferta", value: ITEM_ACTION_TYPE.OFERTA },
    { label: "Pedido", value: ITEM_ACTION_TYPE.PEDIDO },
  ];

  const handleOnChangeOfferType = (e) => {
    setOfferType(e.target.value);
  };

  const toogleBorrowing = () => {
    setIsBorrowing(!borrowing);
  };

  const subjectTypeOptions = [
    { label: "Biológicas", value: "Biológicas" },
    { label: "Exatas", value: "Exatas" },
    { label: "Humanas", value: "Humanas" },
    { label: "Tecnológicas", value: "Tecnologias" },
  ];

  const handleSelectedSubject = (selectedSubjects) => {
   setAreas(selectedSubjects);
  };

  const universityTypeOptions = [
    { label: "Unicamp", value: "Unicamp" },
    { label: "USP", value: "USP" },
    { label: "UNESP", value: "UNESP" },
    { label: "Unifesp", value: "Unifesp" },
  ];

  const handleSelecteduniversity = (selectedSubjects) => {
    console.log(selectedSubjects);
  };

  const itemTypeOptions = [
    { label: "Insumo", value: ITEM_TYPE.INSUMO },
    { label: "Livro", value: ITEM_TYPE.LIVRO },
  ];

  const handleSelectedItemType = (selectedSubjects) => {
    console.log(selectedSubjects);
  };

  return (
    <Sider width={264} style={{ background: "#FFF" }}>
      <Layout className={styles.container}>
        <Title level={4} className={styles.title}>
          Filtros
        </Title>
        <Space direction="vertical" size="large">
          <Space className={styles.space}>
            <Text className={styles.text}>
              {filterQuantity === 0
                ? "Nenhum filtro aplicado"
                : filterQuantity === 1
                ? "Um filtro aplicado"
                : `${filterQuantity} filtros aplicados`}{" "}
            </Text>

            <Space size="large" className={styles.space}>
              <DeleteOutlined />
              <Text className={styles.clear_text}>Limpar</Text>
            </Space>
          </Space>

          <div>
            <Title level={5} className={styles.section}>
              Tipo de anúncio
            </Title>
            <Radio.Group
              options={offerTypeOptions}
              onChange={handleOnChangeOfferType}
              value={offerType}
              optionType="button"
              buttonStyle="solid"
              
            />
            <Checkbox style={{ marginTop: "12px" }} onChange={toogleBorrowing}>
              Empréstimos
            </Checkbox>
          </div>

          <div>
            <Title level={5} className={styles.section}>
              Área do conhecimento
            </Title>
            <Checkbox.Group
              style={{ display: "flex", flexDirection: "column" }}
              onChange={handleSelectedSubject}
              options={subjectTypeOptions}
            />
          </div>
          <div>
            <Title level={5} className={styles.section}>
              Insituição
            </Title>
            <Select
              defaultValue="Unicamp"
              style={{ width: 120 }}
              onChange={handleSelecteduniversity}
            >
              {universityTypeOptions.map((item) => (
                <Option
                  key={item.value}
                  value={item.value}
                  disabled={false}
                >
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Title level={5} className={styles.section}>
              Tipo de item
            </Title>
            <Checkbox.Group
              style={{ display: "flex", flexDirection: "column" }}
              onChange={handleSelectedItemType}
              options={itemTypeOptions}
            />
          </div>
        </Space>
      </Layout>
    </Sider>
  );
};

export default SiderComponent;
