import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Founder() {
  // const refs = useRef([]);
  // const scrollToCard = (index) => {
  //   refs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };
  const person = [
    { src: '/assets/img/t.jpg', alt: '1', name: 'Nguyễn Minh Trường', position: "PT manager" },
    { src: '/assets/img/tt.jpg', alt: '2', name: 'Nguyễn Minh Trường', position: "Leader Marketing" },
    { src: '/assets/img/person.jpg', alt: '3', name: 'Nguyễn Văn C', position: "Chức vụ" },
    { src: '/assets/img/founder.jpg', alt: '4', name: 'Nguyễn Văn D', position: "Chức vụ" },
    { src: '/assets/img/founder.jpg', alt: '5', name: 'Nguyễn Văn E', position: "Chức vụ" }
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
    <div className="w-10/12 py-20 pb-20">
    <div className='flex flex-col relative items-center justify-center text-center pb-9'>
        <span className='font-black text-sm lg:text-4xl leading-[-130%]'>Founders & Leaders</span>
        <div className="h-[4px] w-[81px] md:w-36 lg:w-72 xl:w-80 mt-3 m-auto md:m-4 md:mt-1 rounded-[20px] bg-[#144189] max-sm:mb-2 max-sm:w-[4rem] 2xl:w-80 sm:text-sm sm:font-normal md:h-[3px] sm:w-32"></div>
    </div>
      <Swiper
        spaceBetween={20} 
        slidesPerView={1} 
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 20 }, 
          640: { slidesPerView: 1, spaceBetween: 30 }, 
          768: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 3, spaceBetween: 40 }, 
          1600: { slidesPerView: 3, spaceBetween: 50 },
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
    </div>
  </div>
  )
}

export default Founder