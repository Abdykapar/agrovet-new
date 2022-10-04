import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Search from '../../public/icons/search.svg'

export default function MainSection() {
  return (
    <MainWrapper>
      <Img src='/images/home-main.png' />
      <FormWrapper>
        <div className='container mx-auto'>
          <P>
            Все для защиты
            <br />
            вашего скота и урожая
          </P>
          <Form>
            <InputWrapper>
              <Search />
              <Input placeholder='Название продукции или состава' />
            </InputWrapper>
            <Button>Искать</Button>
          </Form>
        </div>
      </FormWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  /* background: url('/images/home-main.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 800px; */
  margin-top: -130px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

const Img = styled.img`
  width: 100%;
`

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`

const P = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
  margin-bottom: 29px;
`

const Form = styled.form`
  display: flex;
  height: 75px;
  width: 675px;
`
const Button = styled.button`
  width: 192px;
  background: #146c4a;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #ffffff;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
const InputWrapper = styled.div`
  position: relative;
  width: 443px;

  svg {
    position: absolute;
    top: 25px;
    left: 34px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 71px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
  outline: none;
`
