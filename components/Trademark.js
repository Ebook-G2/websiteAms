import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Trademark() {
  const trademark = [
    { src: "/assets/img/facebook.png", alt: "1", css: "translate-y-0" },
    { src: "/assets/img/deezer.png", alt: "2", css: "translate-y-2" },
    { src: "/assets/img/itunes.png", alt: "3", css: "translate-y-0" },
    { src: "/assets/img/spotify.png", alt: "4", css: "translate-y-0" },
    { src: "/assets/img/shazam.png", alt: "5", css: "translate-y-2" },
    { src: "/assets/img/soundclound.png", alt: "6", css: "translate-y-0" },
    { src: "/assets/img/tiktok.png", alt: "8", css: "translate-y-0" },
    { src: "/assets/img/youtube.png", alt: "9", css: "translate-y-0" },
    { src: "/assets/img/7-digital.png", alt: "10", css: "translate-y-0" },
    { src: "/assets/img/beatport.png", alt: "11", css: "translate-y-3" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="w-10/12">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {trademark.map((trademark, index) => (
            <SwiperSlide
              key={index}
              className={`flex flex-col items-center justify-center`}
            >
              <div className="flex items-center justify-center">
                <img
                  src={trademark.src}
                  alt={trademark.alt}
                  width={200}
                  height={700}
                  className={`transform object-cover max-w-full max-h-[700px] ${trademark.css}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Trademark;
