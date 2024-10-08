import React from "react";
var $ = require("jquery");
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import "../styles/hover.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const imageSlider = [
  { src: "/assets/img/2.jpg", alt: "image" },
  { src: "/assets/img/9.jpg", alt: "image" },
];
const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 2 },
};
const variants2 = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 2 },
};
const variants3 = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 2 },
};
export default function Hero() {
  return (
    <div className="relative flex flex-col gap-10 lg:gap-20 max-sm:pb-0 overflow-hidden lg:h-[32rem] md:h-[30rem] max-2xl:h-[45rem] max-sm:h-60 ">
      <div className="relative">
        <div className="absolute inset-0 z-10 lg:mx-0 mx-10 lg:ml-52 flex flex-col pt-24 lg:pt-36 md:gap-2 max-sm:pt-10">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={variants.transition}
            className="text-sm lg:text-5xl font-semibold text-white uppercase custom-shadow"
          >
            welcome to us
          </motion.span>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants3}
            transition={variants3.transition}
            className="text-[#FF9844] font-medium text-3xl max-sm:text-sm uppercase py-3 custom-shadow"
          >
            ai media solution
          </motion.p>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={variants2}
            transition={variants2.transition}
            className="lg:text-base text-sm mb-10 text-white font-medium max-sm:text-xs break-words max-sm:mb-4 2xl:max-w-[50%] 2xl:text-lg custom-shadow"
          >
            We pride ourselves on being a trusted partner, helping businesses
            build and execute comprehensive communication strategies, from
            digital advertising, public relations, to creative content,
            enhancing brand value.
          </motion.span>
          <div class="text-box">
            <a
              href="/"
              class="btn btn-white btn-animate 2xl:text-2xl lg:text-xl md:text-lg max-sm:text-base"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="relative item h-[45rem] max-sm:h-[15rem] max-md:h-[22rem] overflow-hidden">
          <OwlCarousel
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={7000}
            autoplayHoverPause={true}
            responsive={{
              1: { items: 1 },
              900: { items: 1 },
              1025: { items: 1 },
            }}
          >
            {imageSlider.map((imageSlider, index) => (
              <div className="item" key={index}>
                <Image
                  src={imageSlider.src}
                  alt="Ocean"
                  className="w-full h-auto object-cover max-h-[45rem] max-sm:h-[15rem] max-md:h-[22rem] md:h-[32rem]"
                  width={1280}
                  height={700}
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
