import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export default function AgrariaById() {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <h2 className='sub-title mt-[116px] mb-[80px]'>Агрария- ГЕРБИЦИДЫ</h2>

        <Wrapper>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
            <P>Гезигард Азия</P>
            <Def>ДВ: Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
            <Def>Прометрина 500г/л</Def>
          </Item>
          <Item href='#'>
            <Image src={`/images/gerb.png`} width={297} height={297} />
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
`
const P = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #146c4a;
  margin-top: 15px;
  margin-bottom: 2px;
`

const Item = styled.a``

const Def = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #212121;
`
