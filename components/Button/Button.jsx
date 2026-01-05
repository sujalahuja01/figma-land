"use client";

import styles from "./Button.module.scss";

const Button = ({ text, size = "md", className = "", onClick }) => {
  let sizeClass = "";
  switch (size) {
    case "sm":
      sizeClass = styles["button--sm"];
      break;
    case "md":
      sizeClass = styles["button--md"];
      break;
    case "lg":
      sizeClass = styles["button--lg"];
      break;
  }

  return (
    <div>
      <button
        onClick={onClick}
        className={`${styles.button} ${sizeClass} ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
