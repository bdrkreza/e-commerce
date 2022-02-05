import React from "react";
import { useCart } from "react-use-cart";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./hero.css";
/**
 * @author
 * @function ProductImg
 **/
SwiperCore.use([Autoplay, Pagination, Navigation]);
export const Hero = ({ data }) => {
  const { addItem } = useCart();

  return (
    <div className="banne">
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
        {data?.map((img) => {
          const { image, name, price, title, _id } = img;
          const addToCart = () => {
            addItem({
              id: _id,
              name,
              title,
              price,
              img: image,
            });
          };
          return (
            <div className="banner container center-align">
              <SwiperSlide key={img}>
                <div class="hero-image"
                style={{backgroundImage: `url(${image})`, width:"1000px" }}
                >
                  <div class="hero-text">
                    <h1>{name}</h1>
                    <p>{title}</p>
                    <button onClick={addToCart}>addToCart</button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
