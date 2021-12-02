import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Image
          className={styles.image}
          src="/Logos/unicamp.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/uni.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/capes.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <Divider />
      <div className={styles.row}>
        <Image
          className={styles.image}
          src="/Logos/rnp30.png"
          alt="Picture of the author"
          width={205}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/mturismo.png"
          alt="Picture of the author"
          width={116}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/mdefesa.png"
          alt="Picture of the author"
          width={116}
          height={100}
        />
        <Image
          className={styles.image}
          src="/Logos/msaude.png"
          alt="Picture of the author"
          width={114}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/meducacao.png"
          alt="Picture of the author"
          width={114}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/mciencia.png"
          alt="Picture of the author"
          width={160}
          height={100}
        />

        <Image
          className={styles.image}
          src="/Logos/brasil.png"
          alt="Picture of the author"
          width={216}
          height={100}
        />
      </div>
    </div>
  );
};

export default Logos;
