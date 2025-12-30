import React from "react";
import styles from "./pricingCard.module.scss";
import Button from "../Button/Button";

const index = ({ card, isActive, onClick }) => {
  return (
    <div
      className={`${styles.pricing__card} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <h3 className={styles.pricing__pack}>{card.pack}</h3>
      <h5 className={styles.pricing__desc}>{card.description}</h5>
      <div className={styles.pricing__cardPricing}>
        <h1 className={styles.price}>{card.price}</h1>
        <div className={styles.price__text}>
          <h3 className={styles.price__currency}>{card.currency}</h3>
          <h5 className={styles.price__tenure}>{card.tenure}</h5>
        </div>
      </div>
      <ul className={styles.pricing__cardList}>
        {card.benefits.map((benefit, idx) => (
          <li className={styles.list__item} key={idx}>
            {benefit}
          </li>
        ))}
      </ul>
      <Button
        style={isActive ? styles.pricing__btn : ""}
        text={card.btn_text}
        onClick={onClick}
      />
    </div>
  );
};

export default index;
