"use client";

import styles from "./testimonials.module.scss";
import Testimonial from "@/components/testimonialscard/index";

import { TESTIMONIALS_CONTENT } from "@/utils/content";

const index = () => {
  const { heading, testimonials } = TESTIMONIALS_CONTENT;

  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.testimonials__container}`}>
        <h2 className={styles.testmonials__title}>{heading}</h2>
        <Testimonial testimonial={testimonials} />
      </div>
    </section>
  );
};

export default index;
