import React from 'react'
import styled from 'styled-components'

export default function CardItem({ item }) {
  console.log(item)
  return (
    <Item href={`${item.link}`}>
      <ImgWrapper>
        <Img src={`${item.image}`} />
      </ImgWrapper>
      <Title>{item.title}</Title>
      <P>Sub title</P>
    </Item>
  )
}

const Item = styled.a``
const ImgWrapper = styled.div`
  border: 1px solid #d9d9d9;
  width: 280px;
  height: 280px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-variant: small-caps;
  color: #146c4a;
  display: block;
  margin-top: 15px;
  margin-bottom: 2px;
`
const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  font-variant: small-caps;
  color: #212121;
`
