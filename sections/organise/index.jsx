import React from "react";
import styles from "./organise.module.scss";
import Image from "next/image";
import { ORGANISE_CONTENT } from "@/utils/content";
import Button from "@/components/Button/Button";

const index = () => {
  const { heading, description, image, btn_text } = ORGANISE_CONTENT;
  return (
    <section id="product" className={styles.organise}>
      <div className={`container ${styles.organise__container}`}>
        <div className={styles.organise__content}>
          <h2 className={styles.organise__title}>{heading}</h2>
          <p className={styles.organise__desc}>{description}</p>
          <Button text={btn_text} />
        </div>
        <div className={styles.organise__imageDiv}>
          <Image
            className={styles.organise__imageDiv__image}
            priority
            src={image.src}
            alt={image.alt}
            height={386}
            width={661}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
