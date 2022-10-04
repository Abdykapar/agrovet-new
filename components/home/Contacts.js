import React from 'react'
import styled from 'styled-components'

export default function Contacts() {
  return (
    <div className='container mx-auto' id='contacts'>
      <h2 className='sub-title mt-[163px] mb-[74px]'>контакты</h2>

      <Wrapper>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
        <Item>
          <Profile />
          <Info>
            <div>
              <Bold>Абдивалиев алмазбек калмаматович</Bold>
              <P>Генеральный директор ОсОО “Агроветазия”</P>
            </div>
            <div>
              <Bold>Регион</Bold>
              <P>Бишкек, Кыргызстан</P>
            </div>
            <div>
              <Bold>Контакты</Bold>
              <P>+996 708 31 55 83</P>
            </div>
          </Info>
        </Item>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 163px;
`

const Item = styled.div`
  padding: 35px 34px;
  border: 0.5px solid #d9d9d9;
  display: grid;
  grid-template-columns: 144px auto;
`

const Profile = styled.div`
  height: 100%;
  background: #146c4a;
`

const Info = styled.div`
  display: grid;
  row-gap: 25px;
  margin-left: 28px;
`

const Bold = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #146c4a;
  margin-bottom: 5px;
`

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`
