import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderProduct() {
  const products = [
    {
      src: "/assets/img/product.jpg",
      alt: "1",
      name: "Kênh Động vật",
      topic: "Chủ đề",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/product.jpg",
      alt: "2",
      name: "Kênh Động vật",
      topic: "Chủ đề",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/img/product.jpg",
      alt: "3",
      name: "Kênh Động vật",
      topic: "Chủ đề",
      sub: "1234",
      views: "123",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <div className="item w-full flex flex-col relative items-center justify-center p-4 pb-20">
      <div className="flex flex-col relative items-center justify-center text-center">
        <span className="font-black text-sm lg:text-4xl leading-[-130%]">
          Products
        </span>
        <div className="h-[3px] w-[81px] md:w-[200px] lg:w-[250px] xl:w-[140px] mt-3 m-auto md:m-4 md:mt-1 rounded-[20px] bg-[#144189] max-sm:mb-2 max-sm:w-[4rem]"></div>
      </div>

      <div className="w-8/12">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[350px] lg:h-[400px] xl:h-[500px] flex flex-col group card">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
                    width={1280}
                    height={700}
                    priority="true"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 rounded-xl opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10">
                  <h1 className="font-bold text-xl sm:text-lg md:text-xl lg:text-2xl mt-auto">
                    {product.name}
                  </h1>
                </div>

                <div className="absolute inset-0 flex flex-col text-white p-4 rounded-xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-20">
                  <h1 className="font-bold text-lg sm:text-base md:text-lg lg:text-xl mb-2">
                    {product.name}
                  </h1>
                  <p className="text-sm sm:text-xs md:text-sm lg:text-base mb-2">
                    Topic: {product.topic}
                  </p>
                  <p className="text-sm sm:text-xs md:text-sm lg:text-base mb-2">
                    {product.views} views
                  </p>
                  <p className="text-sm sm:text-xs md:text-sm lg:text-base mb-2">
                    {product.sub} subscribe
                  </p>
                  <div className="mt-auto flex items-center justify-center w-full">
                    <Link href={product.link} className="w-10/12">
                      <div className="flex flex-row p-2 bg-[#3f71fe] text-center items-center justify-center rounded-lg">
                        <h1 className="text-sm font-medium w-8/12">
                          Go to view
                        </h1>
                        <div className="w-4/12 ml-auto">
                          <img
                            className="w-4 h-4 text-white"
                            alt="arrow-right"
                            src="assets/svg/arrow-right.svg"
                          />
                        </div>
                      </div>
                    </Link>
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
