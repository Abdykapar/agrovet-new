import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const items = [
  {
    title: 'Гербициды',
    img: 'gerbitsidy.png',
    link: '#',
  },
  {
    title: 'Инсектициды',
    img: 'insektitsidy.png',
    link: '#',
  },
  {
    title: 'Фунгициды',
    img: 'fungitsidy.png',
    link: '#',
  },
  {
    title: 'Акарициды',
    img: 'akaritsidy.png',
    link: '#',
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
              <Img src={`/images/${i.img}`} width={263} height={295} />
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

  @media screen and (max-width: 1023px) {
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
  @media screen and (max-width: 1023px) {
    width: 146px;
    height: 164px;
  }
`

const Item = styled.a``
