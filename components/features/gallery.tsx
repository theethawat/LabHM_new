"use client";
import { useState } from "react";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Gallery({ images }: { images?: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="p-4  justify-center">
      <Swiper
        autoHeight={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {_.map(images, (each, index: number) => (
          <SwiperSlide key={index}>
            <img src={each} className="max-h-[600]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={_.size(images)}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper flex items-center justify-center mt-4"
      >
        {_.map(images, (each, index: number) => (
          <SwiperSlide key={index} className="">
            <img
              src={each}
              className="w-32 h-12 lg:w-32 lg:h-24 object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
