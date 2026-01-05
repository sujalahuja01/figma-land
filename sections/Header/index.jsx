"use client";
import { HEADER_CONTENT } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
const Header = () => {
  const { logo, links, socials } = HEADER_CONTENT;

  const Navigation = () => {
    return (
      <>
        {links.map((link) => (
          <li key={link}>
            <Link
              className={styles.header__list__links}
              href={`#${link.toLocaleLowerCase()}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </>
    );
  };

  const Socials = () => {
    return (
      <>
        {socials.map((social) => (
          <Link
            key={social.platform}
            href={social.link}
          >
            <img
              src={social.src}
              alt={social.platform}
            />
          </Link>
        ))}
      </>
    );
  };
  const [isOpen, setIsOopen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.header__container}`}>
        <div className={styles.header__desktop}>
          <ul
            className={`${styles.header__list} ${styles["header__list--desktop"]}`}
          >
            <Navigation />
          </ul>

          <Image
            src={logo.src}
            alt={logo.alt}
            height={78}
            width={246}
          />
        </div>
        <div
          className={`${styles.header__socials} ${styles["header__socials--desktop"]}`}
        >
          <Socials />
        </div>
        <div
          className={styles.header__menu}
          onClick={() => setIsOopen(!isOpen)}
        >
          <img
            src="/menu.svg"
            alt=""
          />
        </div>
      </nav>
      {isOpen && (
        <div className={styles.header__mobile}>
          <ul
            className={`${styles.header__list} ${styles["header__list--mobile"]}`}
          >
            <Navigation />
          </ul>
          <div
            className={`${styles.header__socials} ${styles["header__socials--mobile"]}`}
          >
            <Socials />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
