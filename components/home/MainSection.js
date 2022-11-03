import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Search from '../../public/icons/search.svg'
import Info from '../../public/icons/info.svg'
import FileList from '../../public/icons/file-list.svg'
import Location from '../../public/icons/location.svg'
import Phone from '../../public/icons/phone.svg'
import { useDebounce } from 'helpers/hooks'
import { searchProduct } from 'services/products.service'

export default function MainSection() {
  const [search, setSearch] = useState('')
  const [isShowSearchResult, setIsShowSearchResult] = useState(false)
  const debouncedSearch = useDebounce(search, 500)
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await searchProduct(`s=${search}`)
      setItems(res.items)
    }
    if (debouncedSearch) fetchData()
  }, [debouncedSearch])

  useEffect(() => {
    window.addEventListener('click', outsideClick)

    return () => {
      window.removeEventListener('click', outsideClick)
    }
  }, [])

  const outsideClick = (e) => {
    const input = document.getElementById('ipt')
    if (e.target.closest('#ipt') !== input) {
      setIsShowSearchResult(false)
    } else setIsShowSearchResult(true)
  }

  return (
    <MainWrapper>
      <Img src='/images/home-main.png' />
      <FormWrapper>
        <div className='container mx-auto h-full px-5'>
          <ContentWrapper>
            <P>
              Все для защиты
              <br />
              вашего скота и урожая
            </P>
            <Form>
              <InputWrapper id='ipt'>
                <Search />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Название продукции или состава'
                />

                <DropdownWrapper active={isShowSearchResult}>
                  <ul>
                    {items.map((i) => (
                      <li key={i._id}>
                        <a
                          href={`/${i.category?.parent?.title}/${i.category._id}/${i._id}`}
                        >
                          {i.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </DropdownWrapper>
              </InputWrapper>
              <Button>Искать</Button>
            </Form>
            <Menu>
              <li>
                <MenuItem href='/#about-us'>
                  <Info />О нас
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#catalog'>
                  <FileList />
                  Каталог продукции
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#locations'>
                  <Location />
                  Наши филиалы
                </MenuItem>
              </li>
              <li>
                <MenuItem href='/#contacts'>
                  <Phone />
                  Контакты
                </MenuItem>
              </li>
            </Menu>
          </ContentWrapper>
        </div>
      </FormWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  margin-top: -130px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1023px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 500px) {
    height: 812px;
    background-image: url('/images/main-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const DropdownWrapper = styled.div`
  ${({ active }) => (active ? 'display: block;' : 'display: none;')}

  position: absolute;
  left: 0;
  right: 0;
  top: 76px;
  background-color: #fff;

  ul {
  }

  li {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 10px 30px;
    border-bottom: 1px solid #e2e2e2;
    cursor: pointer;

    a {
      display: block;
      height: 100%;
      width: 100%;
    }

    &:hover {
      background-color: #f9f4f4;
    }
  }
`

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 1023px) {
    height: 683px;
    object-fit: cover;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const FormWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Menu = styled.ul`
  gap: 15px;
  display: none;

  @media screen and (max-width: 1023px) {
    display: grid;
  }

  > li {
    display: flex;
    align-items: center;
  }
`

const MenuItem = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  display: grid;
  grid-template-columns: 27px auto;
  align-items: center;
  transition: all 300ms ease-in-out;
  gap: 10px;
  background: #146c4a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 55px;
  width: 100%;
  padding: 0 14px;

  > svg path {
    fill: #ffffff;
  }

  &:hover {
    opacity: 0.8;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 1023px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 0 31px;
  }
`

const P = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
  margin-bottom: 29px;

  @media screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    margin-top: 35px;
  }
`

const Form = styled.form`
  display: flex;
  height: 75px;
  width: 675px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
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
