"use client";

import styles from "./Button.module.scss";

const Button = ({ text, style, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`${styles.button} ${style}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
