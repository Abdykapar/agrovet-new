import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

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
            <Img src={`/images/${i.img}`} alt={i.title} />
            <P>{i.title}</P>
          </CatalogItem>
        ))}
      </CatalogWrapper>
    </div>
  )
}

const CatalogItem = styled.a``
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
  @media screen and (max-width: 1023px) {
    width: 146px;
    height: 164px;
  }
`

const CatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`
