import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Founder() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.5 },
  };
  const variants1 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.5 },
  };
  const person = [
    {
      src: "/assets/img/founder.jpg",
      alt: "CEO",
      name: "Nguyễn Văn A",
      position: "CEO",
    },
    {
      src: "/assets/img/person.jpg",
      alt: "COO",
      name: "Nguyễn Văn B",
      position: "COO",
    },
    {
      src: "/assets/img/founder.jpg",
      alt: "HR Manager",
      name: "Nguyễn Văn C",
      position: "HR Manager",
    },
    {
      src: "/assets/img/person.jpg",
      alt: "Sales Manage",
      name: "Nguyễn Văn D",
      position: "Sales Manage",
    },
    {
      src: "/assets/img/founder.jpg",
      alt: "Marketing Manager",
      name: "Nguyễn Văn E",
      position: "Marketing Manager",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10/12 py-20 pb-20">
        <div className="flex flex-col relative items-center justify-center text-center pb-9">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={variants.transition}
            className="font-black md:text-2xl text-sm lg:text-4xl leading-[-130%]"
          >
            Founders & Leaders
          </motion.span>
        </div>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={variants1}
          transition={variants1.transition}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {person.map((person, index) => (
              <SwiperSlide key={index} className="relative group">
                <div className="flex flex-col items-center justify-center text-center rounded-3xl shadow-2xl border border-gray-300 relative p-6 md:p-8 sm:p-12 lg:p-8 xl:p-9 2xl:p-9 max-w-md mx-auto bg-white">
                  <img
                    src={person.src}
                    alt={person.alt}
                    width={400}
                    height={700}
                    className="transition-transform duration-1000 hover:scale-110 rounded-3xl object-cover w-[400px] h-[540px] mx-auto sm:pt-2 max-sm:mt-3"
                  />
                  <p className="text-center font-medium pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 text-sm lg:text-lg xl:text-xl 2xl:text-2xl max-sm:pt-10">
                    {person.name}
                  </p>
                  <p className="text-center pt-2 text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600">
                    {person.position}
                  </p>
                </div>
                <div className="swiper-overlay"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Founder;
