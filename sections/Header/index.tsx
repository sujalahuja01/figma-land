"use client";
import { HEADER_CONTENT } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./header.module.scss";
const Header = () => {
  const { logo, links, socials } = HEADER_CONTENT;
  return (
    <header className={` ${styles.header__container}`}>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.list}>
            <ul className={styles.navList}>
              {links.map((link) => (
                <li key={link}>
                  <Link
                    className={styles.navLink}
                    href={`#${link.toLocaleLowerCase()}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <Image src={logo.src} alt={logo.alt} height={78} width={246} />
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <Link key={social.platform} href={social.link}>
                <img src={social.src} alt={social.platform} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
