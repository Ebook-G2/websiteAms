import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import { delay, motion, useInView } from 'framer-motion';
function Achievement() {
  const achievement = [
    { src: '/assets/svg/view.svg', alt: '1', content: 'Channels are being developed under our management', data: '123' },
    { src: '/assets/svg/channel.svg', alt: '2', content: 'Total views of channels we manage', data: '6868686868' },
    { src: '/assets/svg/ai.svg', alt: '3', content: 'AI tool support during work', data: '123' },
    { src: '/assets/svg/cart.svg', alt: '4', content: 'Total finished goods and customer transactions', data: '6868' }
  ];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const variants = {
        hidden: { opacity: 0, x: -200 }, 
        visible: { opacity: 1, x: 0 },
        transition: { duration: 1.5 },  
      };
  
  const NumberFormatter = ({ number }) => {
    const formatNumber = (num) => {
      if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
      } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
      } else {
        return num.toString();
      }
    };

    return <span>+ {formatNumber(number)}</span>;
  };

  const Counter = ({ endValue, totalDuration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / totalDuration, 1); 
        const increment = Math.round(progress * endValue); 

        setCount(increment);

        if (increment >= endValue) {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }, [endValue, totalDuration]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold 2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg sm:text-lg max-sm:text-lg max-sm:text-center"
      >
        <NumberFormatter number={count} />
      </motion.div>
    );
  };
  const totalDuration = 3500; 
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-full py-14'>
      <div className='grid lg:grid-cols-4 grid-cols-3 max-sm:grid-cols-2 max-sm:gap-5 gap-6 lg:gap-10 w-10/12'>
        {achievement.map((achieve, index) => (
          <section className='w-full max-sm:my-16 flex flex-col md:mt-16 max-md:mt-20' key={index}>
            <div className='relative h-[220px] max-sm:h-[270px] md:h-[260px]'>
              <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
              transition={variants.transition}
              className='rounded-full bg-blue-600 w-24 h-24 flex items-center justify-center z-20 relative hover:bg-pink-500 transition-colors duration-300 max-sm:mx-auto'>
                <img
                  className="w-16 h-16 object-cover rounded-full max-sm:w-12 max-sm:h-12 transition-transform duration-1000 transform"
                  alt={achieve.alt}
                  src={achieve.src}
                  width={100}
                  height={100}
                  style={{
                    transform: 'rotateY(0deg)',
                    transition: 'transform 1s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(360deg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                />
              </motion.div>
              <div className='bg-[#f8f8f8] w-10/12 h-full -mt-10 pl-10 group relative inline-block overflow-hidden px-4 py-3 text-2xl font-semibold text-slate-800 hover:text-violet-600 max-sm:font-normal max-sm:p-1 max-sm:text-base max-sm:w-full max-sm:px-4 md:w-full'>
                <h2 className='pt-16'>
                  <Counter endValue={parseInt(achieve.data)} totalDuration={totalDuration} />
                </h2>
                <div className='py-4'>
                  <span className='font-medium text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg max-sm:text-lg'>{achieve.content}</span>
                </div>
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-1000 group-hover:w-full z-10"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-1000 group-hover:h-full z-10"></span>
              </div>
            </div> 
          </section>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
