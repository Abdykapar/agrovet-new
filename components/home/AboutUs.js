import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function AboutUs() {
  return (
    <div className='container mx-auto px-5' id='about-us'>
      <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[70px] lg:mb-[80px]'>
        о нас
      </h2>
      <Wrapper>
        <P>
          Компания ОсОО Агроветазия основана в 2014 году и в настоящее время
          является ведущей компанией в области продвижения, реализации и
          обеспечении агрохимикатами и ветеринарной продукцией на всех регионах
          Республики Кыргызстан. По заявкам животноводческих хозяйств наши
          специалисты проводят качественное диагностирование и лечение сельхоз
          животных так же проводят разъяснительные беседы, консультируют
          животноводов о важности профилактических мероприятии, предупреждении
          инфекционных и инвазионных заболевании. Мы также работаем в тестной
          связке с фермерами в области земледелия, проводим объемные работы по
          своевременному внесению пестицидов и удобрении. Наши филиалы размещены
          по всем областям и на всех районах республики где работают
          высококвалифицированные специалисты компания является дистрибьютором
          ведущих мировых производителей средств защиты растений, комплексных
          органоминеральных удобрений и лекарственных препаратов для сельхоз
          животных. Мы за безопасное применение препаратов квалифицированное
          обслуживание наших клиентов, обеспечение продукцией высокого качества
          и плодотворное сотрудничество с партнерами. ОсОО Агроветазия
        </P>

        <div>
          <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Img src='/images/home-slider.png' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src='/images/home-slider.png' />
            </SwiperSlide>
          </Swiper>
        </div>
      </Wrapper>
    </div>
  )
}

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #212121;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 155.9%;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`

const Img = styled.img`
  @media screen and (max-width: 1023px) {
    width: 199px;
    height: 150px;
  }
`
