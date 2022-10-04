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
    <div className='container mx-auto' id='catalog'>
      <h2 className='sub-title mt-[140px] mb-[80px]'>Каталог продукции</h2>

      <div className='flex justify-between'>
        {items.map((i) => (
          <CatalogItem key={i.title} href={i.link}>
            <Image
              src={`/images/${i.img}`}
              alt={i.title}
              width='263px'
              height={295}
            />
            <P>{i.title}</P>
          </CatalogItem>
        ))}
      </div>
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
`
