import React from "react";
import styles from "./contact.module.scss";
import { CONTACT_CONTENT } from "@/utils/content";
import Button from "@/components/Button/Button";
import Image from "next/image";
const index = () => {
  const {
    heading,
    description,
    placeholder,
    socials,
    information,
    btn_text,
    map,
  } = CONTACT_CONTENT;

  return (
    <section className={`container ${styles.contact__section}`}>
      <div className={styles.contact}>
        <div className={styles.contact__heading}>
          <h2 className={styles.contact__title}>{heading}</h2>
          <p className={styles.contact__desc}>{description}</p>
        </div>
        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <form className={styles.contact__form} action="">
              <h4 className={styles.contact__formHead}>{placeholder.head}</h4>
              <input
                className={styles.form__input}
                type="text"
                placeholder={placeholder.name}
              />
              <input
                className={styles.form__input}
                type="email"
                placeholder={placeholder.email}
              />
              <textarea
                className={`${styles.form__messageInput} ${styles.form__input}`}
                placeholder={placeholder.message}
              ></textarea>

              <Button style="" text={btn_text} />
            </form>
          </div>
          <div className={styles.contact__location}>
            <div className={styles.contact__infoText}>
              {information.map((info, idx) => (
                <div key={idx}>
                  <img
                    className={styles.infoText__image}
                    src={info.src}
                    alt={info.alt}
                  />
                  <p className={styles.infoText__desc}>{info.text}</p>{" "}
                </div>
              ))}
            </div>
            <div className={styles.contact__infoMap}>
              <img src={map.src} alt={map.alt} />
            </div>
            <div className={styles.contact__socials}>
              {socials.map((icon) => (
                <img
                  className={styles.contact__socialsImage}
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
