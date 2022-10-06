import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Search from '../../public/icons/search.svg'
import Info from '../../public/icons/info.svg'
import FileList from '../../public/icons/file-list.svg'
import Location from '../../public/icons/location.svg'
import Phone from '../../public/icons/phone.svg'

export default function MainSection() {
  return (
    <MainWrapper>
      <Img src='/images/home-main.png' />
      <FormWrapper>
        <div className='container mx-auto h-full px-5'>
          <ContentWrapper>
            <P>
              Все для защиты
              <br />
              вашего скота и урожая
            </P>
            <Form>
              <InputWrapper>
                <Search />
                <Input placeholder='Название продукции или состава' />
              </InputWrapper>
              <Button>Искать</Button>
            </Form>
            <Menu>
              <li>
                <MenuItem href='/#about-us'>
                  <Info />О нас
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#catalog'>
                  <FileList />
                  Каталог продукции
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#locations'>
                  <Location />
                  Наши филиалы
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#contacts'>
                  <Phone />
                  Контакты
                </MenuItem>
              </li>
            </Menu>
          </ContentWrapper>
        </div>
      </FormWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  margin-top: -130px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1023px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 500px) {
    height: 812px;
    background-image: url('/images/main-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 1023px) {
    height: 683px;
    object-fit: cover;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Menu = styled.ul`
  gap: 15px;
  display: none;

  @media screen and (max-width: 1023px) {
    display: grid;
  }

  > li {
    display: flex;
    align-items: center;
  }
`

const MenuItem = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  display: grid;
  grid-template-columns: 27px auto;
  align-items: center;
  transition: all 300ms ease-in-out;
  gap: 10px;
  background: #146c4a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 55px;
  width: 100%;
  padding: 0 14px;

  > svg path {
    fill: #ffffff;
  }

  &:hover {
    opacity: 0.8;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 1023px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 0 31px;
  }
`

const P = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
  margin-bottom: 29px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    margin-top: 35px;
  }
`

const Form = styled.form`
  display: flex;
  height: 75px;
  width: 675px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`
const Button = styled.button`
  width: 192px;
  background: #146c4a;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #ffffff;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
const InputWrapper = styled.div`
  position: relative;
  width: 443px;

  svg {
    position: absolute;
    top: 25px;
    left: 34px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 71px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
  outline: none;
`
