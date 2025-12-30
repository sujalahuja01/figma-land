import React from "react";
import styles from "./footer.module.scss";
import FooterList from "@/components/footerList/index";
import { FOOTER_CONTENT } from "@/utils/content";
const index = () => {
  const { links, location, socials } = FOOTER_CONTENT;
  return (
    <section className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__links}>
          {links.map((link, idx) => (
            <FooterList
              key={idx}
              item={link}
            />
          ))}
        </div>
        <div className={styles.footer__icon}>
          <div className={styles.footer__location}>
            {location.map((item, idx) => (
              <div
                key={idx}
                className={styles.footer__location__info}
              >
                <img
                  className={styles.footer__location__image}
                  src={item.src}
                  alt={item.alt}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.footer__socials}>
            {socials.map((item) => (
              <a
                key={item.platform}
                href={item.link}
              >
                <img
                  src={item.src}
                  alt={item.platform}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
