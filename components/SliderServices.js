import React from "react";
import { motion } from "framer-motion";

function SliderServices() {
  const services = [
    {
      src: "/assets/img/services11.png",
      alt: "1",
      name: "Automated Content Creation",
    },
    {
      src: "/assets/img/services12.png",
      alt: "2",
      name: "AI-generated Images and Graphics",
    },
    {
      src: "/assets/img/services13.png",
      alt: "3",
      name: "AI-powered Social Media Management",
    },
    {
      src: "/assets/img/services14.png",
      alt: "4",
      name: "SEO Optimization and Data Analytics",
    },
  ];
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 2, delay: 0 },
  };
  const variants1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.8, delay: 1 },
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="w-10/12 max-sm:my-6 my-10 mx-auto flex flex-col gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={variants.transition}
          className="flex flex-col relative items-center justify-center text-center"
        >
          <span className="font-black md:text-2xl text-sm lg:text-4xl leading-[-130%]">
            Our Services
          </span>
          <div className="h-[3px] w-[81px] md:w-[200px] lg:w-[20px] xl:w-[200px] mt-3 m-auto md:m-4 md:mt-1 rounded-[20px] bg-[#144189]"></div>
        </motion.div>
        <div className="flex justify-center">
          <section className="grid lg:grid-cols-4 grid-cols-3 max-sm:grid-cols-2 max-sm:gap-5 gap-6 lg:gap-10 w-10/12">
            {services.map((service, index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants1}
                transition={variants1.transition}
                className="2xl:w-60 shadow p-4 group relative inline-block overflow-hidden rounded border text-2xl font-semibold text-slate-800 max-sm:font-normal max-sm:p-1 max-sm:text-base hover:text-violet-600"
                key={index}
              >
                <div className="relative">
                  <img
                    className="w-full max-sm:h-28 h-52 mx-auto rounded-tr-sm rounded-tl-sm object-cover cursor-pointer"
                    alt="services-image"
                    src={service.src}
                  />
                </div>
                <div className="pt-3 w-full">
                  <div className="flex gap-2 w-full">
                    <h1 className="font-medium text-center max-sm:font-normal max-sm:text-[11px] max-sm:leading-tight cursor-pointer 2xl:text-lg lg:text-xl md:text-lg max-md:text-base">
                      {service.name}
                    </h1>
                  </div>
                </div>
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SliderServices;
