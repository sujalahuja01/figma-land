import { FEATURES_CONTENT } from "@/utils/content";
import styles from "./Features.module.scss";
const features = () => {
  const { heading, description, features } = FEATURES_CONTENT;
  return (
    <section className="container">
      <div className={styles.section_container}>
        <div>
          <h2 className={styles.features__heading}>{heading}</h2>
          <p className={styles.features__desc}>{description}</p>
        </div>
        <div className={styles.features__card}>
          {features.map((feature) => (
            <div key={feature.id}>
              <img src={feature.logo} alt="" />
              <h3 className={styles.features__cardHead}>{feature.title}</h3>
              <p className={styles.features__cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default features;
