import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageLayout from '@/components/layouts/PageLayout'
import React from 'react'
import { getParentCategories } from 'services/categories.service'
import { getImageUrl } from 'helpers/helpers'
import styled from 'styled-components'
import Search from '../public/icons/search.svg'
import CardItem from '@/components/cards/CardItem'
import { useRouter } from 'next/router'

export default function SearchResults({ data }) {
  const router = useRouter()
  const { q } = router.query

  return (
    <PageLayout>
      <Header data={data} />
      <div className='container mx-auto px-5 mt-[116px] mb-[80px]'>
        <Title>Результаты поиска</Title>
        <SearchForm>
          <SearchInputWrapper>
            <Search />
            <SearchInput value={q} />
          </SearchInputWrapper>
          <SearchButton>Искать</SearchButton>
        </SearchForm>
        <SearchCounter>Найдено результатов: 8</SearchCounter>

        <ResultWrapper>
          <CardItem
            item={{
              title: 'test',
              image:
                'https://images.unsplash.com/photo-1676412953081-89c8c48ad850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
              link: 'das',
            }}
          />
          <CardItem
            item={{
              title: 'test',
              image:
                'https://images.unsplash.com/photo-1676412953081-89c8c48ad850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
              link: 'das',
            }}
          />
          <CardItem
            item={{
              title: 'test',
              image:
                'https://images.unsplash.com/photo-1676412953081-89c8c48ad850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
              link: 'das',
            }}
          />
          <CardItem
            item={{
              title: 'test',
              image:
                'https://images.unsplash.com/photo-1676412953081-89c8c48ad850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
              link: 'das',
            }}
          />
          <CardItem
            item={{
              title: 'test',
              image:
                'https://images.unsplash.com/photo-1676412953081-89c8c48ad850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
              link: 'das',
            }}
          />
        </ResultWrapper>
      </div>
      <Footer />
    </PageLayout>
  )
}

export async function getServerSideProps() {
  let data = []
  try {
    const res = await Promise.all([getParentCategories()])
    data = res[0]
  } catch (err) {
    return {
      props: {
        data: [],
      },
      error: err,
    }
  }
  return {
    props: {
      data: data.map((i) => ({
        ...i,
        image: getImageUrl(i.image),
      })),
    },
  }
}

const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 80px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
`

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const SearchInputWrapper = styled.div`
  position: relative;

  > svg {
    position: absolute;
    left: 34px;
    top: 25px;
  }
`
const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #d9d9d9;
  height: 75px;
  min-width: 339px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
  padding: 0 30px 0 71px;
`
const SearchButton = styled.button`
  width: 192px;
  height: 75px;
  background: #146c4a;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #ffffff;
  transition: all 200ms ease-in;

  &:hover {
    background-color: #034732;
  }
`

const SearchCounter = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
`
