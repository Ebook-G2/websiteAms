import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
export default function HeroAbout({ title, content }) {
  return (
    <div className="relative flex flex-col gap-10 lg:gap-20 max-sm:pb-0 overflow-hidden lg:h-[20rem] md:h-[36rem] max-2xl:h-[20rem] max-sm:h-60">
      <div className="relative text-center">
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={variants.transition}
            className="lg:text-5xl  font-semibold text-white uppercase custom-shadow 2xl:text-5xl md:text-3xl max-sm:text-xl"
          >
            {title}
          </motion.span>
          <div className="flex flex-row items-center justify-center whitespace-nowrap">
            <Link href={"/"}>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants3}
                transition={variants3.transition}
                className="text-white font-medium text-3xl max-sm:text-sm uppercase py-3 drop-shadow-lg custom-shadow 2xl:text-2xl lg:text-base xl:text-xl md:text-lg"
              >
                Home /
              </motion.p>
            </Link>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants2}
              transition={variants2.transition}
              className="lg:text-base text-sm text-blue-700 font-medium max-sm:text-xs 2xl:max-w-[50%] 2xl:text-2xl underline pl-2 custom-shadow"
            >
              {content}
            </motion.span>
          </div>
        </div>
        <div className="relative item  overflow-hidden">
          <Image
            src="/assets/img/ai2.jpg"
            alt="ai hero image"
            className="brightness-75 w-full h-auto object-cover lg:h-[20rem] md:h-[36rem] max-2xl:h-[20rem] max-sm:h-60 "
            width={1280}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
