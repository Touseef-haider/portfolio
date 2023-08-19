/* eslint-disable react/jsx-key */
import styles from "./services.module.css";
import Image from "next/image";
import { services } from "../../utils/constant";

const Services = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.service}>
        <h1>SERVICES</h1>
      </div>
      <p>{services.intro}</p>
      <div className={styles.development}>
        {services.servicesGiven.map((service,ind) => (
          <div className={styles.card} key={ind}>
            <div className={styles.cardInner}>
              <div className={styles.frontPart}>
                <h3>{service.serviceName}</h3>
              </div>
              <div className={styles.backPart}>
                {service.details.map((detail) => (
                  <p>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
