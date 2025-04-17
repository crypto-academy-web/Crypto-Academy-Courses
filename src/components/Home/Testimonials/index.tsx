"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideOne from "./Slides/SlideOne";

const Testimonials = () => {
  //   const swiper = useSwiper();

  //   const handleprevbtn = () => {
  //     swiper?.slidePrev();
  //   };

  //   const handleNextvbtn = () => {
  //     swiper?.slideNext();
  //   };

  return (
    <div className="parent-div">
      <div className="swiper-main-div">
        {/* <Image
          className="custom-prev"
          onClick={handleprevbtn}
          src={moveprevbtn}
          alt="moveprevbtn"
         
        /> */}

        <Swiper
          //   onSlideChange={handleSlideChange}
          slidesPerView={1}
          // activeIndex={activeIndex}
          initialSlide={1}
          spaceBetween={0}
          centeredSlides={true}
          pagination={true}
          speed={900}
          // slidesPerGroupSkip={3}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          // scrollbar={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
        </Swiper>

        {/* <Image
          className="custom-next"
          onClick={handleNextvbtn}
          src={movenextbtn}
          alt="movenextbtn"
         
        /> */}
      </div>
    </div>
  );
};

export default Testimonials;
