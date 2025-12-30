import React from "react";
import styles from "./partners.module.scss";
import { PARTNERS_CONTENT } from "@/utils/content";
import Button from "@/components/Button/Button";
const index = () => {
  const { heading, description, images, btn_text } = PARTNERS_CONTENT;
  return (
    <section className={styles.partners}>
      <div className={`container ${styles.partners__contianer}`}>
        <div className={styles.partners__content}>
          <h2 className={styles.partners__title}>{heading}</h2>
          <p className={styles.partners__desc}>{description}</p>
          <div className={styles.partners__logosDiv}>
            {images.map((image) => (
              <div
                key={image.id}
                className={styles.partners__logosDiv__logo}
              >
                <p className={styles.partners__logo__client}>{image.clinet}</p>
                <img
                  className={styles.partner__logo}
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
          <Button
            style={styles.partners__btn}
            text={btn_text}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
