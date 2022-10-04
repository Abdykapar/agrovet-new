import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function OurPartners() {
  return (
    <div className='container mx-auto'>
      <h2 className='sub-title mt-[168px] mb-[80px]'>наши партнеры</h2>

      <div className='partners'>
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={true}
          centeredSlides={true}
          spaceBetween={49}
          slidesPerView={5}
          navigation={{
            nextEl: `.swiper-button-next-n`,
            prevEl: `.swiper-button-prev-p`,
          }}
          loop={true}
          //   autoplay={{
          //     delay: 3500,
          //     disableOnInteraction: false,
          //   }}
        >
          <SwiperSlide>
            <img src='/images/astronova.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/enza.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/yuksel.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/fito.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/atlantica.png' />
          </SwiperSlide>
        </Swiper>
        <div className='swiper-button-prev-p swiper-button-prev'></div>
        <div className='swiper-button-next-n swiper-button-next'></div>
      </div>
    </div>
  )
}
