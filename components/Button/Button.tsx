"use client";

import styles from "./Button.module.scss";

const Button = ({ text, style }: { text: string; style: string }) => {
  return (
    <div>
      <button className={`${styles.button} ${style}`}>{text}</button>
    </div>
  );
};

export default Button;
