import React from 'react'
import Instagram from '../public/icons/instagram.svg'
import Youtube from '../public/icons/youtube.svg'
import Facebook from '../public/icons/facebook.svg'
import Tiktok from '../public/icons/tiktok.svg'
import Info from '../public/icons/info.svg'
import FileList from '../public/icons/file-list.svg'
import Location from '../public/icons/location.svg'
import Phone from '../public/icons/phone.svg'
import styled from 'styled-components'

export default function Footer() {
  return (
    <div>
      <WrapperTop>
        <div className='container mx-auto'>
          <div className='flex'>
            <div>
              <P>мы в соцсетях</P>
              <SocialWrapper>
                <Instagram />
                <Youtube />
                <Facebook />
                <Tiktok />
              </SocialWrapper>
              <P className='mt-[20px]'>горячая линия</P>
              <P>+996 776 30 99 55</P>
            </div>
            <List>
              <li>
                <Item href='#about-us'>
                  <Info /> О нас
                </Item>
              </li>
              <li>
                <Item href='#catalog'>
                  <FileList /> Каталог продукции
                </Item>
              </li>
              <li>
                <Item href='#locations'>
                  <Location /> Наши филиалы
                </Item>
              </li>
              <li>
                <Item href='#contacts'>
                  <Phone /> Контакты
                </Item>
              </li>
            </List>
          </div>
        </div>
      </WrapperTop>
      <WrapperBottom>
        <Text>Агроветазия 2022</Text>
      </WrapperBottom>
    </div>
  )
}

const WrapperTop = styled.div`
  height: 269px;
  background: #146c4a;
  display: flex;
  align-items: center;
`

const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;
`

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  width: 165px;
`
const List = styled.ul`
  display: grid;
  row-gap: 20px;
  margin-left: 141px;
`

const Item = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ffffff;

  svg {
    margin-right: 10px;
    path {
      fill: #fff;
    }
  }
`

const WrapperBottom = styled.div`
  height: 83px;
  background: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`
