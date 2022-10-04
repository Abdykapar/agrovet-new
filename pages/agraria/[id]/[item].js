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
      <div className='container mx-auto'>
        <h2 className='sub-title mt-[117px] mb-[80px]'>
          агрария- ГЕРБИЦИДЫ- гезигард азия
        </h2>

        <Wrapper>
          <Image src={`/images/gerb.png`} width={433} height={433} />
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
              <Whatsapp />
              Получить консультацию
            </Button>
          </Info>
        </Wrapper>

        <WrapperDesc>
          <h2 className='sub-title mt-[80px] mb-[34px]'>описание</h2>

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
`

const Info = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`

const InfoItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #146c4a;
  margin-right: 15px;
`
const InfoDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #212121;
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

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 14px;
  }
`

const WrapperDesc = styled.div`
  margin-bottom: 100px;
`
