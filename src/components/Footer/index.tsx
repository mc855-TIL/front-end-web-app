import {Layout, Typography} from 'antd';
import {
    MailOutlined,
    PhoneOutlined
} from '@ant-design/icons';

import React from 'react';
import styles from './Footer.module.css';

const {Footer} = Layout;

const FooterComponent = () => {



  return <Footer className={styles.container} >
      <ul className={styles.list}>
        <Typography.Title level={4} style={{color: 'white'}}>Mapa do Site</Typography.Title>
        <li>Início</li>
        <li>Conheça</li>
        <li>Insumos e materiais</li>
        <li>Contato</li>
      </ul>

      <ul className={styles.list}>
        <Typography.Title level={4} style={{color: 'white'}}>Contatos</Typography.Title>

        <li><PhoneOutlined/> 0800 722 0216</li>
        <li><MailOutlined /> atendimento@rnp.br</li>
        
      </ul>
  </Footer>;
}

export default FooterComponent;