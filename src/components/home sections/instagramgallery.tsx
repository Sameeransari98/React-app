import React, { useEffect, useState } from "react";
import { getUserImages } from "../../../public/api/apiClient";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const InstagramImages: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await getUserImages();
        setImages(fetchedImages);
      } catch (err) {
        setError("Failed to fetch images");
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container py-5">
      <h1>Instagram Images</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.media_url}
                alt={image.caption || "Instagram Image"}
                width="1080"
                height="1080"
                style={{ width: "100%", height: "auto" }}
                className="img-fluid"
              />
              <p>{image.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InstagramImages;
