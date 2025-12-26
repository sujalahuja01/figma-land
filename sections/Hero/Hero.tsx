"use client";

import Button from "@/components/Button/Button";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { HERO_CONTENT } from "@/utils/content";

const hero = () => {
  const { heading, description, text } = HERO_CONTENT;
  return (
    <>
      <Image
        className={styles.bgImage}
        src="/hero-bg.png"
        alt="back"
        fill
        priority
      />
      <section className="container">
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__heading}>{heading}</h1>
            <p className={styles.hero__para}>{description}</p>
            <div className={styles.hero__btn}>
              <Button text={text} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
