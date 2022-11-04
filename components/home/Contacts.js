import React from 'react'
import styled from 'styled-components'

export default function Contacts({ data }) {
  return (
    <div className='container mx-auto px-5' id='contacts'>
      <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[163px] lg:mb-[74px]'>
        контакты
      </h2>

      <Wrapper>
        {data.map((i) => (
          <Item key={i._id}>
            <Profile image={i.image} />
            <Info>
              <div>
                <Bold>{i.owner}</Bold>
                <P>{i.position}</P>
              </div>
              <div>
                <Bold>Регион</Bold>
                <P>{i.region}</P>
              </div>
              <div>
                <Bold>Контакты</Bold>
                <P>{i.phones.map((i) => i.name).join(', ')}</P>
              </div>
            </Info>
          </Item>
        ))}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 163px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 50px;
  }
`

const Item = styled.div`
  padding: 35px 34px;
  border: 0.5px solid #d9d9d9;
  display: grid;
  grid-template-columns: 144px auto;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 78px auto;
    padding: 19px;
  }
`

const Profile = styled.div`
  height: 100%;
  background: #146c4a;
  ${({ image }) => image && `background-image: url('${image}');`}
  background-size: cover;
  background-position: center;
`

const Info = styled.div`
  display: grid;
  row-gap: 25px;
  margin-left: 28px;

  @media screen and (max-width: 1023px) {
    row-gap: 5px;
    margin-left: 8px;
  }
`

const Bold = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #146c4a;
  margin-bottom: 5px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 15px;
  }
`

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  @media screen and (max-width: 1023px) {
    font-size: 8px;
    line-height: 10px;
  }
`
