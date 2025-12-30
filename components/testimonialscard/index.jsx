import React from "react";
import styles from "./testimonialscard.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

const index = ({ testimonial }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonial.map((info) => (
        <SwiperSlide>
          <div className={styles.testimonial__card}>
            <img
              src={info.logo.src}
              alt={info.logo.alt}
              className={styles.testimonialCard__image}
            />
            <p className={styles.testimonialCard__desc}>{info.desc}</p>
            <div className={styles.testimonialCard__profile}>
              <img
                src={info.profile}
                alt=""
              />
              <div className={styles.testimonialCard__text}>
                <p className={styles.testimonialCard__title}>{info.title}</p>
                <p className={styles.testimonialCard__role}>{info.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default index;
