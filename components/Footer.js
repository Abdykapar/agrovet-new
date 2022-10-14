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
          <div className='flex md:flex-row'>
            <div className='flex flex-col-reverse md:flex-col'>
              <div className='mt-[46px] md:mt-0'>
                <P>мы в соцсетях</P>
                <SocialWrapper>
                  <Social
                    href='https://www.instagram.com/agrovetasia_kg/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Box>
                      <Instagram />
                    </Box>
                    <Label>agrovetasia_kg</Label>
                  </Social>
                  <Social
                    href='https://www.youtube.com/channel/UCRtOQpu7FCHIYpsZYewl7JA'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Box>
                      <Youtube />
                    </Box>
                    <Label>agrovetasia KG</Label>
                  </Social>
                  <Social
                    href='https://www.facebook.com/agrovetaziakg'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Box>
                      <Facebook />
                    </Box>
                    <Label>agrovetasia</Label>
                  </Social>
                  <Social href='#'>
                    <Box>
                      <Tiktok />
                    </Box>
                    <Label>agrovetasia_kgz</Label>
                  </Social>
                </SocialWrapper>
              </div>
              <div>
                <P className='mt-[20px]'>горячая линия</P>
                <P>
                  <a href='tel:+996776309955'>+996 776 30 99 55</a>
                </P>
              </div>
            </div>
            <List>
              <li>
                <Item href='/#about-us'>
                  <Info /> О нас
                </Item>
              </li>
              <li>
                <Item href='/#catalog'>
                  <FileList /> Каталог продукции
                </Item>
              </li>
              <li>
                <Item href='/#locations'>
                  <Location /> Наши филиалы
                </Item>
              </li>
              <li>
                <Item href='/#contacts'>
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
  min-height: 269px;
  background: #146c4a;
  display: flex;
  align-items: center;
  padding: 40px 20px;
`

const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;

  a {
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 27px;
  }
`

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  width: 165px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 28px;
  }
`
const List = styled.ul`
  display: grid;
  row-gap: 0px;
  margin-left: 141px;

  @media screen and (max-width: 767px) {
    margin-left: 0;
    display: none;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 50px;
  }
`

const Social = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  text-transform: lowercase;
  color: #ffffff;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  svg {
    @media screen and (max-width: 767px) {
      margin-right: 10px;
    }
  }
`

const Label = styled.span`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`

const Item = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 300ms ease-in-out;
  border-radius: 6px;
  padding: 10px;

  &:hover {
    background-color: #1d875e;
  }

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
