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
      <div className='container mx-auto'>
        <h2 className='sub-title mt-[116px] mb-[80px]'>агрария</h2>

        <Wrapper>
          {items.map((i) => (
            <Item key={i.title} href={i.link}>
              <Image src={`/images/${i.img}`} width={263} height={295} />
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
`
const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #146c4a;
  margin-top: 15px;
`

const Item = styled.a``
