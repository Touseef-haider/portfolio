/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = ({ images }) => {
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
    <Slider {...settings}>
      {images?.length > 0 &&
        images.map((i) => (
          <Image
            width={750}
            height={500}
            key={i?.image}
            alt=""
            src={i?.image}
          />
        ))}
    </Slider>
  );
};
export default ProjectSlider;
