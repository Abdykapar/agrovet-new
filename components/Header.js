import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Info from '../public/icons/info.svg'
import FileList from '../public/icons/file-list.svg'
import Location from '../public/icons/location.svg'
import Phone from '../public/icons/phone.svg'
import BurgerMenu from '../public/icons/burger.svg'
import Instagram from '../public/icons/instagram.svg'
import Youtube from '../public/icons/youtube.svg'
import Facebook from '../public/icons/facebook.svg'
import Tiktok from '../public/icons/tiktok.svg'
import Link from 'next/link'

export default function Header() {
  const [isBurgerHide, setIsBurgerHide] = useState(true)

  return (
    <div className='container mx-auto relative z-10 px-5'>
      <HeaderWrapper active={!isBurgerHide}>
        <Logo href='/'>
          <Box>
            <img src={'/images/logo.png'} />
          </Box>
          <Title active={!isBurgerHide}>АГРОВЕТАЗИЯ</Title>
        </Logo>
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
        <Burger
          active={!isBurgerHide}
          onClick={() => setIsBurgerHide(!isBurgerHide)}
        >
          <BurgerMenu />
        </Burger>
      </HeaderWrapper>
      <ExtraSpace active={!isBurgerHide} />
      <BurgerMenuWrapper active={!isBurgerHide}>
        <ul>
          <li>
            <Link href='/agraria'>
              <a className='burger-link'>Агрария</a>
            </Link>
          </li>
          <li>
            <a className='burger-link' href='#'>
              ветеринария
            </a>
          </li>
          <li>
            <a className='burger-link' href='#'>
              семена
            </a>
          </li>
          <li>
            <a className='burger-link' href='#'>
              удобрения
            </a>
          </li>
        </ul>
        <SocialWrapper>
          <li>
            <a href='#'>
              <Instagram />
            </a>
          </li>
          <li>
            <a href='#'>
              <Youtube />
            </a>
          </li>
          <li>
            <a href='#'>
              <Facebook />
            </a>
          </li>
          <li>
            <a href='#'>
              <Tiktok />
            </a>
          </li>
        </SocialWrapper>
      </BurgerMenuWrapper>
    </div>
  )
}

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  position: relative;
  z-index: 20;

  @media screen and (max-width: 1023px) {
    height: 60px;
    margin-top: 20px;

    ${({ active }) => (active ? fixedHeader : '')}
  }
`

const ExtraSpace = styled.div`
  @media screen and (max-width: 1023px) {
    ${({ active }) => (active ? 'height: 80px;' : '')}
  }
`

const fixedHeader = `
    position: fixed;
    top: 0;
    left: 20px;
    right: 20px;
`

const Box = styled.div`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 1023px) {
    width: 60px;
    height: 60px;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 17px 20px;
  background: #212121;

  a {
    &:hover {
      opacity: 0.8;
    }
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
const Title = styled.h1`
  font-family: 'Avanti';
  font-weight: 700;
  font-size: 36px;
  line-height: 39px;
  color: #146c4a;
  margin-left: 11px;

  @media screen and (max-width: 1023px) {
    font-size: 21px;
    line-height: 23px;
  }

  @media screen and (max-width: 1023px) {
    ${({ active }) => (active ? 'color: #fff;' : '')}
  }
`

const BurgerMenuWrapper = styled.div`
  position: fixed;
  top: -475px;
  right: 0;
  width: 375px;
  background: #146c4a;
  z-index: -1;
  display: none;
  transition: top 300ms ease-in-out;

  .burger-link {
    transition: all 300ms ease-in-out;
    padding: 10px;
    border-radius: 6px;

    &:hover {
      background-color: #1d875e;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    display: block;

    ${({ active }) => (active ? 'top: 0px;' : '')}
  }

  ul {
    display: grid;
    row-gap: 33px;
    margin: 130px 20px 75px;
  }

  li {
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-transform: uppercase;
    color: #ffffff;
  }
`

const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 24px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }

  > li {
    display: flex;
    align-items: center;
  }
`

const MenuItem = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #146c4a;
  display: grid;
  grid-template-columns: 27px auto;
  align-items: center;
  transition: all 300ms ease-in-out;
  gap: 10px;
  border-radius: 6px;
  padding: 10px;

  &:hover {
    background-color: #f6f6f6;
  }
`

const Burger = styled.button`
  display: none;
  border: none;
  background: inherit;

  svg path {
    transition: all 300ms ease-in-out;
  }

  ${({ active }) => (active ? `svg path { fill: #fff; }` : '')}

  @media screen and (max-width: 1023px) {
    display: block;
  }
`
