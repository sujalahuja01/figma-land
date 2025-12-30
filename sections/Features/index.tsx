import { FEATURES_CONTENT } from "@/utils/content";
import styles from "./features.module.scss";
import Image from "next/image";
const features = () => {
  const { heading, description, image, features } = FEATURES_CONTENT;
  return (
    <section id="about" className={styles.features}>
      <div className={`container ${styles.features__container}`}>
        <div className={styles.features__content}>
          <h2 className={styles.features__title}>{heading}</h2>
          <p className={styles.features__desc}>{description}</p>
        </div>
        <div className={styles.features__cards__container}>
          {features.map((feature) => (
            <div className={styles.features__card} key={feature.id}>
              <img src={feature.logo} alt={feature.alt} />
              <h3 className={styles.features__card__title}>{feature.title}</h3>
              <p className={styles.features__card__desc}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <Image
          className={styles.features__image}
          src={image.src}
          alt={image.alt}
          height={660}
          width={1177}
          priority
        />
      </div>
    </section>
  );
};

export default features;
