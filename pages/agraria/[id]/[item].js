import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Whatsapp from '../../../public/icons/whatsapp.svg'

export default function agrariaItem() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[117px] lg:mb-[80px]'>
          агрария- ГЕРБИЦИДЫ- гезигард азия
        </h2>

        <Wrapper>
          <Img src={`/images/gerb.png`} />
          <Info>
            <div>
              <Title>Гезигард азия</Title>
              <InfoWrapper>
                <div className='flex'>
                  <InfoItem>Действующее вещество:</InfoItem>
                  <InfoDesc>Прометрина 500г/л</InfoDesc>
                </div>
                <div className='flex'>
                  <InfoItem>Действующее вещество:</InfoItem>
                  <InfoDesc>Прометрина 500г/л</InfoDesc>
                </div>
                <div className='flex'>
                  <InfoItem>Действующее вещество:</InfoItem>
                  <InfoDesc>Прометрина 500г/л</InfoDesc>
                </div>
              </InfoWrapper>
            </div>
            <Button>
              {/* <Whatsapp /> */}
              <img src='/icons/whatsapp.svg' />
              Получить консультацию
            </Button>
          </Info>
        </Wrapper>

        <WrapperDesc>
          <h2 className='sub-title mt-[60px] mb-[30px] lg:mt-[80px] lg:mb-[34px]'>
            описание
          </h2>

          <p>
            Разнообразный и богатый опыт дальнейшее развитие различных форм
            деятельности создаёт предпосылки качественно новых шагов для
            соответствующих условий активизации. Равным образом
            социально-экономическое развитие требует определения и уточнения
            ключевых компонентов планируемого обновления. Дорогие друзья,
            социально-экономическое развитие позволяет оценить значение
            экономической целесообразности принимаемых решений. Разнообразный и
            богатый опыт постоянное информационно-техническое обеспечение нашей
            деятельности играет важную роль в формировании системы масштабного
            изменения ряда параметров. Соображения высшего порядка, а также курс
            на социально-ориентированный национальный проект напрямую зависит от
            модели развития. Таким образом, постоянный количественный рост и
            сфера нашей активности обеспечивает актуальность ключевых
            компонентов планируемого обновления? Разнообразный и богатый опыт
            сложившаяся структура организации способствует повышению
            актуальности форм воздействия.
          </p>
        </WrapperDesc>
      </div>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const Img = styled.img`
  @media screen and (max-width: 1023px) {
    width: 335px;
    margin-bottom: 30px;
  }
`

const Info = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    margin-left: 0px;
  }
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
  margin-bottom: 30px;
`

const InfoWrapper = styled.div`
  display: grid;
  row-gap: 20px;

  @media screen and (max-width: 1023px) {
    row-gap: 15px;
  }
`

const InfoItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #146c4a;
  margin-right: 15px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 15px;
  }
`
const InfoDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #212121;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 155.9%;
  }
`

const Button = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  width: 356px;
  height: 75px;
  background: #146c4a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1023px) {
    margin-top: 30px;
    font-size: 14px;
    line-height: 17px;
    height: 58px;
    width: 335px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 25px;
      height: 25px;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  img {
    margin-right: 14px;
  }
`

const WrapperDesc = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 50px;
  }
`
