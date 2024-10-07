import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/hover.css";
function SliderProduct() {
  const products = [
    {
      src: "/assets/img/a1.jpg",
      alt: "1",
      name: "Animal chanel",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/a2.jpg",
      alt: "2",
      name: "Animal chanel",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/a3.jpg",
      alt: "3",
      name: "Animal chanel",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/a4.jpg",
      alt: "3",
      name: "Animal chanel",
      topic:
        "Thu Trang is one of the most well-known comedians in showbiz. Thanks to her hard work and efforts along with diverse performances, the actress has been invited to participate in many reality shows, game shows and movies. She is loved by fans, who nicknamed her",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/a5.jpg",
      alt: "3",
      name: "Animal chanel1",
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
        <span className="font-black text-sm lg:text-4xl leading-[-130%] md:text-2xl">
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
                    <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden max-sm:w-52 max-sm:h-52 ">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="220"
                      viewBox="0 0 270 190"
                      fill="none"
                      className="absolute top-[-10px] left-[-10px] w-[110%] h-[110%] max-sm:left-[-7px] max-sm:top-[-8px]"
                    >
                      <path
                        d="M239.61 17C234.38 8.88 226.1 3.34 215.79 0.18L215.21 0C216.59 1.83 217.9 3.69 219.21 5.6C226.62 8.6 232.41 13.14 236.21 19.08C242.58 28.92 243.01 41.86 238.11 56.37C235.53 63.7345 232.118 70.7802 227.94 77.37C213.81 100.11 189.29 124.04 157.69 143.69C126.09 163.34 93.5495 174.87 66.5495 177.69L64.7095 177.87C38.4695 180.26 18.3595 174.24 9.25954 160.18C2.32954 149.44 2.43954 135 8.86954 118.85C8.10954 117.103 7.39288 115.333 6.71954 113.54L6.54954 113.44L6.45954 114.08L5.69954 115.91C-1.55046 133.27 -2.30046 149.7 5.86954 162.28C16.4595 178.67 39.4295 184.52 67.0095 181.63C68.5295 181.47 70.0695 181.27 71.6195 181.06C98.3695 177.39 129.62 165.84 159.86 147.06C191.86 127.16 216.86 102.82 231.38 79.47C234.209 74.953 236.722 70.245 238.9 65.38C247.01 47.18 248.01 30 239.61 17Z"
                        fill="#DD1A5D"
                      />
                    </svg>
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
                    <a
                      href={product.link}
                      className="text-pink-500 font-bold flex items-center max-md:block"
                    >
                      READ MORE ABOUT
                      <h3 className="hover-1 2xl:ml-4 lg:mr-10 md:ml-4">
                        {product.name}
                      </h3>
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
