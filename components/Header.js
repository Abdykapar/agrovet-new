import Image from 'next/image'
import React, { lazy } from 'react'
import styled from 'styled-components'
import Info from '../public/icons/info.svg'
import FileList from '../public/icons/file-list.svg'
import Location from '../public/icons/location.svg'
import Phone from '../public/icons/phone.svg'

export default function Header() {
  return (
    <div className='container mx-auto relative z-10'>
      <HeaderWrapper>
        <Logo href='/'>
          <Image src={'/images/logo.png'} height='100px' width={'100px'} />
          <Title>АГРОВЕТАЗИЯ</Title>
        </Logo>
        <Menu>
          <li>
            <MenuItem href='#'>
              <Info />О нас
            </MenuItem>
          </li>
          <li>
            <MenuItem href='#'>
              <FileList />
              Каталог продукции
            </MenuItem>
          </li>
          <li>
            <MenuItem href='#'>
              <Location />
              Наши филиалы
            </MenuItem>
          </li>
          <li>
            <MenuItem href='#'>
              <Phone />
              Контакты
            </MenuItem>
          </li>
        </Menu>
      </HeaderWrapper>
    </div>
  )
}

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
const Title = styled.span`
  font-family: 'Avanti';
  font-weight: 700;
  font-size: 36px;
  line-height: 39px;
  color: #146c4a;
  margin-left: 11px;
`

const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 44px;

  > li {
    display: flex;
    align-items: center;
  }
`

const MenuItem = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #146c4a;
  display: flex;
  align-items: center;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    margin-right: 10px;
  }
`
