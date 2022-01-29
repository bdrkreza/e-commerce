import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
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
        {[].map((img) => {
          return (
            <SwiperSlide key={img}>
              <img src={image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
