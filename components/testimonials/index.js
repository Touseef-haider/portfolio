import styles from "./testimonials.module.css";
import TestimonialSlider from "../testimonialSlider/index";

const Testimonials = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.testimonials}>
        <h1>TESTIMONIALS</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.reviews}>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonials;
