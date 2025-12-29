"use client";

import { useState } from "react";
import styles from "./testimonials.module.scss";
import Testimonial from "@/components/testimonialscard/index";

import { TESTIMONIALS_CONTENT } from "@/utils/content";

const index = () => {
  const { heading, testimonials, left_arrow, right_arrow } =
    TESTIMONIALS_CONTENT;

  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => {
    setCurrentIdx((i) => (i < testimonials.length - 1 ? i + 1 : i));
  };

  const prev = () => {
    setCurrentIdx((i) => (i > 0 ? i - 1 : i));
  };
  return (
    <section className={`container ${styles.testimonials_container}`}>
      <div className={styles.testmonials}>
        <h2 className={styles.testmonials__title}>{heading}</h2>
        <div className={styles.testimonial__viewport}>
          <div
            className={`${styles.testimonial__slider}`}
            style={{ transform: `translateX(-${currentIdx * 100}%)` }}
          >
            {testimonials.map((testimonnial) => (
              <div className={styles.testimonial__card} key={testimonnial.id}>
                <Testimonial info={testimonnial} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.testimonial__pagination}>
          <img
            onClick={prev}
            className={styles.slider__btn}
            src={left_arrow.src}
            alt={left_arrow.alt}
          />
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${
                  i === currentIdx ? styles.active : ""
                }`}
                onClick={() => setCurrentIdx(i)}
              />
            ))}
          </div>
          <img
            onClick={next}
            className={styles.slider__btn}
            src={right_arrow.src}
            alt={right_arrow.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
