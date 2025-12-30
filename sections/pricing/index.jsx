"use client";

import React, { useState } from "react";
import styles from "./pricing.module.scss";
import Pricing from "@/components/pricingCard/index";
import { PRICING_CONTENT } from "@/utils/content";

const index = () => {
  const { heading, description, cards } = PRICING_CONTENT;
  return (
    <section
      className={styles.pricing}
      id="pricing"
    >
      <div className={` container ${styles.pricing__container}`}>
        <div className={styles.pricing__content}>
          <h1 className={styles.pricing__title}>{heading}</h1>
          <p className={styles.pricing__desc}>{description}</p>
        </div>
        <div className={styles.pricing__cards}>
          {cards.map((card) => (
            <Pricing
              isActive={card.featured}
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default index;
