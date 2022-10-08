import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { ImgWrapper } from '../styles/styles'

const items = [
  {
    title: 'агрария',
    img: 'agraria.png',
    link: '/agraria',
  },
  {
    title: 'Ветеринария',
    img: 'veterinaria.png',
    link: '/veterinaria',
  },
  {
    title: 'Семена',
    img: 'semena.png',
    link: '/semena',
  },
  {
    title: 'Удобрения',
    img: 'udobreniya.png',
    link: '/udobreniya',
  },
]

export default function Catalog() {
  return (
    <div className='container mx-auto px-5' id='catalog'>
      <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[140px] lg:mb-[80px]'>
        Каталог продукции
      </h2>

      <CatalogWrapper>
        {items.map((i) => (
          <CatalogItem key={i.title} href={i.link}>
            <ImgWrapper>
              <Img src={`/images/${i.img}`} alt={i.title} />
            </ImgWrapper>
            <P>{i.title}</P>
          </CatalogItem>
        ))}
      </CatalogWrapper>
    </div>
  )
}

const CatalogItem = styled.a`
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: capitalize;
  color: #146c4a;
  margin: 25px 0 0;
  padding: 0;

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

const CatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1279px) {
    flex-wrap: wrap;
  }
`
