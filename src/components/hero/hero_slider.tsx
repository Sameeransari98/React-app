import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
interface HeroSliderProps {
  images: string[];
  titles: string[];
  descriptions: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  images,
  titles,
  descriptions,
}) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} />
          <div className="slide-content">
            <h2>{titles[index]}</h2>
            <p>{descriptions[index]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
