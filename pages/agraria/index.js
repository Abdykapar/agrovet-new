import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ImgWrapper } from '@/components/styles/styles'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const items = [
  {
    title: 'Гербициды',
    img: 'gerbitsidy.png',
    link: '/agraria/1',
  },
  {
    title: 'Инсектициды',
    img: 'insektitsidy.png',
    link: '/agraria/1',
  },
  {
    title: 'Фунгициды',
    img: 'fungitsidy.png',
    link: '/agraria/1',
  },
  {
    title: 'Акарициды',
    img: 'akaritsidy.png',
    link: '/agraria/1',
  },
]

export default function index() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[116px] lg:mb-[80px]'>
          агрария
        </h2>

        <Wrapper>
          {items.map((i) => (
            <Item key={i.title} href={i.link}>
              <ImgWrapper>
                <Img src={`/images/${i.img}`} width={263} height={295} />
              </ImgWrapper>
              <P>{i.title}</P>
            </Item>
          ))}
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 76px;
  margin-bottom: 225px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
  }
`
const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #146c4a;
  margin-top: 15px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 15px;
    margin-top: 8px;
  }
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
  transition: all 300ms ease-in-out;
`

const Item = styled.a`
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
