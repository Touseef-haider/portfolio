/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";

import "./testimonial.module.css";
import styles from "./testimonial.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { slider } from "../../utils/constant";

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
    <Slider dotsClass={`${styles.dots}`} {...settings}>
      {slider.map((data) => (
        <div className={styles.slider} key={data?.image}>
          <Image height={120} width={120} src={data?.image} />
          <h2>{data?.clientName}</h2>
          <h4>{data?.role}</h4>
          <p>{data?.review}</p>
        </div>
      ))}
    </Slider>
  );
};
export default ImageSlider;
