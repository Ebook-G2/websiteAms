import React from 'react';
var $ = require('jquery');
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
const imageSlider =[
  { src: '/assets/img/2.jpg', alt: 'image'},
  { src: '/assets/img/9.jpg', alt: 'image'},
];
  const variants = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { opacity: 1, y: 0 },
    transition: { duration: 2 },  
  };
  const variants1 = {
    hidden: { opacity: 0, y: 100 }, 
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
    <div className='relative flex flex-col gap-10 lg:gap-20 max-sm:pb-0 overflow-hidden lg:h-[45rem] md:h-[36rem] max-2xl:h-[45rem] max-sm:h-60 '>
  <div className="relative">
    <div className="absolute inset-0 z-10 lg:mx-0 mx-10 lg:ml-52 flex flex-col pt-24 lg:pt-36 md:gap-2 max-sm:pt-10">
      <motion.span 
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={variants.transition}
        className="text-sm lg:text-5xl font-semibold text-white uppercase custom-shadow">
        welcome to us
      </motion.span>
      <motion.p 
        initial="hidden"
        animate="visible"
        variants={variants3}
        transition={variants3.transition}
        className="text-[#FF9844] font-medium text-3xl max-sm:text-sm uppercase py-3 custom-shadow">
        ai media solution
      </motion.p>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={variants2}
        transition={variants2.transition}
        className="lg:text-base text-sm mb-10 text-white font-medium max-sm:text-xs break-words max-sm:mb-4 2xl:max-w-[50%] 2xl:text-lg custom-shadow">
        We pride ourselves on being a trusted partner, helping businesses build and execute comprehensive communication strategies, from digital advertising, public relations, to creative content, enhancing brand value.
      </motion.span>
      <Link href={'/'}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants1}
          transition={variants1.transition}
          className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200 px-4 py-3 text-2xl font-semibold text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white max-sm:font-normal max-sm:p-1 max-sm:text-base">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
          Contact now
        </motion.div>
      </Link>
    </div>

    {/* Phần hình ảnh */}
    <div className="relative item h-[45rem] overflow-hidden">
      <OwlCarousel 
        items={1}
        loop={true}
        autoplay={true}
        autoplayTimeout={7000}
        autoplayHoverPause={true}
        margin={70}
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
              className="w-full h-auto object-cover max-h-[45rem] max-sm:h-[15rem] max-md:h-[22rem]" 
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
