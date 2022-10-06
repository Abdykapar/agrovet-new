import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export default function AgrariaById() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[116px] lg:mb-[80px]'>
          Агрария- ГЕРБИЦИДЫ
        </h2>

        <Wrapper>
          <Item href='#'>
            <Img src={`/images/gerb.png`} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Img src={`/images/gerb.png`} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Img src={`/images/gerb.png`} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Img src={`/images/gerb.png`} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Img src={`/images/gerb.png`} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 225px;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 50px;
  }
`

const Img = styled.img`
  @media screen and (max-width: 1023px) {
    width: 159px;
    height: 159px;
  }
`

const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #146c4a;
  margin-top: 15px;
  margin-bottom: 2px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 15px;
    margin-top: 5px;
  }
`

const Item = styled.a``

const Def = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #212121;

  @media screen and (max-width: 1023px) {
    font-size: 8px;
    line-height: 112.9%;
  }
`
