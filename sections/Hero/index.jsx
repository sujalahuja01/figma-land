"use client";

import Button from "@/components/Button/Button";
import styles from "./hero.module.scss";
import Image from "next/image";
import { HERO_CONTENT } from "@/utils/content";

const hero = () => {
  const { heading, description, btn_text, image } = HERO_CONTENT;
  return (
    <section id="hero" className={styles.hero}>
      <Image
        className={styles.hero__bg__image}
        src={image.src}
        alt={image.alt}
        fill
        priority
      />
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>{heading}</h1>
          <p className={styles.hero__desc}>{description}</p>
          <div className={styles.hero__btn}>
            <Button text={btn_text} style="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
