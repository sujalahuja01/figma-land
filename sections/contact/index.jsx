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
    <section
      id="contact"
      className={styles.contact}
    >
      <div className={`container ${styles.contact__section}`}>
        <div className={styles.contact__heading}>
          <h2 className={styles.contact__title}>{heading}</h2>
          <p className={styles.contact__desc}>{description}</p>
        </div>
        <div className={styles.contact__content}>
          <form className={styles.contact__form}>
            <h4 className={styles.contact__form__heading}>
              {placeholder.head}
            </h4>
            <input
              className={styles.contact__form__input}
              type="text"
              placeholder={placeholder.name}
            />
            <input
              className={styles.contact__form__input}
              type="email"
              placeholder={placeholder.email}
            />
            <textarea
              className={`${styles.contact__form__textarea} ${styles.contact__form__input}`}
              placeholder={placeholder.message}
            ></textarea>

            <Button
              style=""
              text={btn_text}
            />
          </form>
          <div className={styles.contact__location}>
            <div className={styles.contact__infoText}>
              {information.map((info, idx) => (
                <div
                  key={idx}
                  className={styles.contact__infoText__content}
                >
                  <img
                    className={styles.contact__infoText__image}
                    src={info.src}
                    alt={info.alt}
                  />
                  <p className={styles.contact__infoText__desc}>{info.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.contact__infoMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2221227134355!2d-84.39161078915801!3d33.78076173190584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5047ca6128797%3A0x54e8c2be6c22549!2sSpring%20St%20NW%2C%20Atlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sin!4v1767096323658!5m2!1sen!2sin"
                width="516"
                height="324"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={styles.contact__socials}>
              {socials.map((icon) => (
                <img
                  className={styles.contact__socials__image}
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
