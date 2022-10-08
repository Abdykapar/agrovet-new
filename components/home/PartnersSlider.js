import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import styled from 'styled-components'

export default function PartnersSlider() {
  return (
    <div className='partners'>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={true}
        centeredSlides={false}
        spaceBetween={28}
        slidesPerView={2}
        breakpoints={{
          1024: {
            spaceBetween: 49,
            slidesPerView: 5,
            centeredSlides: true,
          },
          728: {
            spaceBetween: 28,
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
        navigation={{
          nextEl: `.swiper-button-next-n`,
          prevEl: `.swiper-button-prev-p`,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Img src='/images/astronova.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/images/enza.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/images/yuksel.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/images/fito.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Img src='/images/atlantica.png' />
        </SwiperSlide>
      </Swiper>
      <div className='swiper-button-prev-p swiper-button-prev'></div>
      <div className='swiper-button-next-n swiper-button-next'></div>
    </div>
  )
}

const Img = styled.img`
  @media screen and (max-width: 1023px) {
    /* width: 81px; */
    height: 97px;
    object-fit: cover;
  }
`
