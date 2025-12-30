"use client";
import React, { useState } from "react";
import styles from "./newsletter.module.scss";
import Button from "@/components/Button/Button";
import { LIGHT_CONTENT } from "@/utils/content";
import Image from "next/image";
const index = () => {
  const { heading, desc_1, desc_3, desc_2, image, btn_text, input_text } =
    LIGHT_CONTENT;

  const [email, setEmail] = useState("");

  return (
    <section className={styles.newsletter}>
      <div className={`container ${styles.newsletter__container}`}>
        <div className={styles.newsletter__imageDiv}>
          <Image
            className={styles.newsletter__imageDiv__image}
            src={image.src}
            alt={image.alt}
            height={514}
            width={677}
          />
        </div>
        <div className={styles.newsletter__content}>
          <p className={styles.newsletter__subTitle}>{desc_1}</p>
          <h2 className={styles.newsletter__title}>{heading}</h2>
          <p className={styles.newsletter__subscribe}>{desc_2}</p>
          <p className={styles.newsletter__availability}>{desc_3}</p>
          <div className={styles.newsletter__sub}>
            <input
              type="email"
              value={email}
              placeholder={input_text}
              className={styles.newsletter__input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <a
              className={styles.newsletter__btn}
              href={`mailto:${email}`}
            >
              {btn_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
