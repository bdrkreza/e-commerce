import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { BACKEND_URL } from "../../helpers/helpers";
/**
 * @author
 * @function ProductImg
 **/
SwiperCore.use([Autoplay, Pagination, Navigation]);
export const ProductImg = ({ image }) => {
  return (
    <>
      <Swiper
        spaceBetween={200}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="swiper-slide"
      >
        {image.map((img) => {
          return (
            <SwiperSlide key={img.attributes.url}>
              <img src={`${BACKEND_URL + img.attributes.url}`} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
