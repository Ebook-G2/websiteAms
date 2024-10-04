import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderProduct() {
  const products = [
    {
      src: "/assets/img/bg_footer.jpg",
      alt: "1",
      name: "Kênh Động vật",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/bg_footer.jpg",
      alt: "2",
      name: "Kênh Động vật",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/bg_footer.jpg",
      alt: "3",
      name: "Kênh Động vật",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/bg_footer.jpg",
      alt: "3",
      name: "Kênh Động vật",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/bg_footer.jpg",
      alt: "3",
      name: "Kênh Động vật1",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
  ];
  const formatNumber = (num) => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  return (
    <div className="item w-full flex flex-col relative items-center justify-center p-4 pb-20 font-roboto">
      <div className="flex flex-col relative items-center justify-center text-center pb-10">
        <span className="font-black text-sm lg:text-4xl leading-[-130%]">
          Products
        </span>
        <div className="h-[3px] w-[81px] md:w-[200px] lg:w-[250px] xl:w-[140px] mt-3 m-auto md:m-4 md:mt-1 rounded-[20px] bg-[#144189] max-sm:mb-2 max-sm:w-[4rem]"></div>
      </div>
      <div className="w-9/12">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 20 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row items-center md:flex-col w-11/12 max-sm:w-full justify-center">
                  <div className="relative mb-6 md:mb-0 md:mr-10 2xl:mb-0 2xl:mr-10">
                    <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden max-sm:w-52 max-sm:h-52">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-pink-500"></div>
                  </div>
                  <div className="text-left w-full 2xl:w-6/12 xl:w-6/12 lg:w-5/12 md:w-full max-sm:w-full md:text-justify md:pt-16 max-md:text-center 2xl:pl-20">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                      {product.name}
                    </h1>
                    <div className="flex flex-wrap items-center text-[#363B53] font-semibold mb-4 max-md:flex-row max-md:justify-center max-md:items-center">
                      <div className="flex items-center">
                        <span className="text-pink-500 font-bold text-lg mr-2">
                          {formatNumber(product.sub)}
                        </span>
                        FOLLOWERS TIMES
                      </div>
                      <span className="mx-4 2xl:block lg:block max-sm:hidden">
                        |
                      </span>
                      <div className="flex items-center ">
                        <span className="text-pink-500 font-bold text-lg mr-2">
                          {formatNumber(product.views)}
                        </span>
                        VIEWS STREAMING
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-justify">
                      {product.topic}
                    </p>
                    <a href="#" className="text-pink-500 font-bold">
                      READ MORE ABOUT
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default SliderProduct;
