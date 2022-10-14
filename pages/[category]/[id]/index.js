import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getImageUrl } from 'helpers/helpers'
import { useRouter } from 'next/router'
import React from 'react'
import {
  getCategoryById,
  getParentCategories,
} from 'services/categories.service'
import { getProducts } from 'services/products.service'
import styled from 'styled-components'

export default function AgrariaById({
  data,
  category,
  subCategory,
  categories,
}) {
  const getDefOfProduct = (i) => {
    switch (category) {
      case 'Агрария':
        return <Def>ДВ: {i.activeIngredient}</Def>
      default:
        return ''
    }
  }

  return (
    <>
      <Header data={categories} />
      <div className='container mx-auto px-5'>
        <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[116px] lg:mb-[80px]'>
          {category} - {subCategory}
        </h2>

        <Wrapper>
          {data.map((i) => (
            <Item key={i._id} href={i.link}>
              <Img src={i.image} />
              <P>{i.title}</P>
              {getDefOfProduct(i)}
            </Item>
          ))}
        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ query, resolvedUrl }) {
  let data = [],
    sub = {},
    categories = []
  try {
    const prom = await Promise.all([
      getParentCategories(),
      getProducts({ categoryId: query.id }),
      getCategoryById(query.id),
    ])
    categories = prom[0]
    sub = prom[2]
    data = prom[1].map((i) => ({
      ...i,
      image: getImageUrl(i.image),
      link: `${resolvedUrl}/${i._id}`,
    }))
  } catch (err) {
    console.log(err)
    return {
      props: {
        data: [],
        category: query.category,
        subCategory: sub.title,
        categories,
      },
    }
  }
  return {
    props: {
      data,
      category: query.category,
      subCategory: sub.title,
      categories,
    },
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 225px;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-bottom: 50px;
  }
`

const Img = styled.img`
  transition: all 300ms ease-in-out;
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

const Item = styled.a`
  max-width: 159px;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`

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
