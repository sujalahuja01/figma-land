import React from "react";
import styles from "./footerList.module.scss";

const FooterList = ({ item }) => {
  return (
    <div className={styles.footer__about}>
      <h3 className={styles.footer__head}>{item.heading}</h3>
      <ul className={styles.footer__list}>
        {item.links.map((link, idx) => (
          <li key={link.name}>
            <a className={styles.footer__item} href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* {list.map(
        (item, idx) => item.type === "social" && <Socials key={idx} {...item} />
      )} */}
    </div>
  );
};

export default FooterList;
