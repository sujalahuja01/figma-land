"use client";

import React, { useState } from "react";
import styles from "./pricing.module.scss";
import Pricing from "@/components/pricingCard/index";
import { PRICING_CONTENT } from "@/utils/content";

const index = () => {
  const [activeId, setActiveid] = useState(0);

  const { heading, description, cards } = PRICING_CONTENT;
  return (
    <section className={`container ${styles.pricing__container}`}>
      <div className={styles.pricing}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{heading}</h1>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.pricing__card}>
          {cards.map((card) => (
            <Pricing
              isActive={activeId == card.id}
              key={card.id}
              card={card}
              onClick={() => setActiveid(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default index;
