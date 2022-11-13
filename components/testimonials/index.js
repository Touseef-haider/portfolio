import styles from "./testimonials.module.css";
import TestimonialSlider from "../testimonialSlider/index";

const Testimonials = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.testimonials}>
        <h1>TESTIMONIALS</h1>
      </div>
      <div className={styles.reviews}>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonials;
