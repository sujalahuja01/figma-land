import React from "react";
import styles from "./light.module.scss";
import Button from "@/components/Button/Button";
import { LIGHT_CONTENT } from "@/utils/content";
import Image from "next/image";
const index = () => {
  const { heading, desc_1, desc_3, desc_2, image, btn_text, input_text } =
    LIGHT_CONTENT;

  return (
    <section className={`container ${styles.light__container}`}>
      <div className={styles.light}>
        <div className={styles.light__imageDiv}>
          <Image
            className={styles.light__image}
            src={image.src}
            alt={image.alt}
            height={514}
            width={677}
          />
        </div>
        <div className={styles.heading}>
          <p className={styles.light__desc1}>{desc_1}</p>
          <h2 className={styles.light__title}>{heading}</h2>
          <p className={styles.light__desc2}>{desc_2}</p>
          <p className={styles.light__desc3}>{desc_3}</p>
          <div className={styles.light__sub}>
            <input
              type="email"
              placeholder={input_text}
              className={styles.light__input}
            />
            <Button text={btn_text} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
