import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Trademark() {
    const trademark = [
        { src: '/assets/img/facebook.png', alt: '1' },
        { src: '/assets/img/deezer.png', alt: '2'},
        { src: '/assets/img/itunes.png', alt: '3' },
        { src: '/assets/img/spotify.png', alt: '4' },
        { src: '/assets/img/shazam.png', alt: '5' },
        { src: '/assets/img/soundclound.png', alt: '6' },
        { src: '/assets/img/spotify.png', alt: '7' },
        { src: '/assets/img/tiktok.png', alt: '8' },
        { src: '/assets/img/youtube.png', alt: '9' },
        { src: '/assets/img/7-digital.png', alt: '10' },
        { src: '/assets/img/beatport.png', alt: '11' },
      ];
  return (
    <div className='w-full flex flex-col items-center justify-between'>
        <div className='w-10/12 '>
        <Swiper
        spaceBetween={20} 
        slidesPerView={1} 
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 20 }, 
          640: { slidesPerView: 1, spaceBetween: 30 }, 
          768: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
          1440: { slidesPerView: 5, spaceBetween: 40 }, 
          1600: { slidesPerView: 5, spaceBetween: 40 },
        }}
        >
        {trademark.map((trademark, index) =>(
            <SwiperSlide key={index} className='flex flex-col items-center justify-between'>
                <div className='flex items-center justify-center'>
                <img
                    src={trademark.src}
                    alt={trademark.alt}
                    width={200} 
                    height={700}
                    className="object-cover max-w-full max-h-[700px]"
                />  
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    </div>
  )
}

export default Trademark