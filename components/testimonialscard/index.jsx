import React from "react";
import styles from "./testimonialscard.module.scss";

const index = ({ info }) => {
  return (
    <div className={styles.testimonial__card}>
      <img
        src={info.logo.src}
        alt={info.logo.alt}
        className={styles.testimonialCard__image}
      />
      <p className={styles.testimonialCard__desc}>{info.desc}</p>
      <div className={styles.testimonialCard__profile}>
        <img src={info.profile} alt="" />
        <div className={styles.testimonialCard__text}>
          <p className={styles.testimonialCard__title}>{info.title}</p>
          <p className={styles.testimonialCard__role}>{info.role}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
