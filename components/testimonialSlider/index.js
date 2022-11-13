/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";

import "./testimonial.module.css";
import styles from "./testimonial.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider  dotsClass={`${styles.dots}`} {...settings}>
      <div className={styles.slider}>
        <Image
          height={120}
          width={120}
          src="https://picsum.photos/600/300?random=1"
        />
        <h2>Tanveer Haider</h2>
        <h4>Ceo Co-founder</h4>
        <p>
          {" "}
          Export tempor illum tamen malis malis eram quae irure esse labore quem
          cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
          noster fugiat irure amet legam anim culpa.{" "}
        </p>
      </div>
      <div className={styles.slider}>
        <Image
          height={120}
          width={120}
          src="https://picsum.photos/600/300?random=1"
        />
        <h2>Ateeq Haider</h2>
        <h4>Designer</h4>
        <p>
          {" "}
          Export tempor illum tamen malis malis eram quae irure esse labore quem
          cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
          noster fugiat irure amet legam anim culpa.{" "}
        </p>
      </div>
    </Slider>
  );
};
export default ImageSlider;
