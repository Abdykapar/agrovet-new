import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageLayout from '@/components/layouts/PageLayout'
import { getImageUrl } from 'helpers/helpers'
import React from 'react'
import {
  getCategoryById,
  getParentCategories,
} from 'services/categories.service'
import { getProductById } from 'services/products.service'
import styled from 'styled-components'

export default function agrariaItem({
  category,
  subCategory,
  product,
  categories,
}) {
  const getProductDesc = (i) => {
    switch (category) {
      case 'Агрария':
        return (
          <InfoWrapper>
            <div className='flex'>
              <InfoItem>Действующее вещество:</InfoItem>
              <InfoDesc>{i.activeIngredient}</InfoDesc>
            </div>
            <div className='flex'>
              <InfoItem>Препаративная форма:</InfoItem>
              <InfoDesc>{i.preparationForm}</InfoDesc>
            </div>
            <div className='flex'>
              <InfoItem>Способ проникновения:</InfoItem>
              <InfoDesc>{i.methodEntry}</InfoDesc>
            </div>
            <div className='flex'>
              <InfoItem>Химический класс:</InfoItem>
              <InfoDesc>{i.chemicalClass}</InfoDesc>
            </div>
            <div className='flex'>
              <InfoItem>Класс опасности:</InfoItem>
              <InfoDesc>{i.dangerClass}</InfoDesc>
            </div>
          </InfoWrapper>
        )
      case 'Ветеринария':
        return (
          <InfoWrapper>
            <div className='flex'>
              <InfoItem>Состав:</InfoItem>
              <InfoDesc>{i.consist}</InfoDesc>
            </div>
            <div className='flex'>
              <InfoItem>Раствор:</InfoItem>
              <InfoDesc>{i.fluid}</InfoDesc>
            </div>
          </InfoWrapper>
        )
      case 'Удобрения':
        return (
          <InfoWrapper>
            <div className='flex'>
              <InfoItem>Состав:</InfoItem>
              <InfoDesc>{i.consist}</InfoDesc>
            </div>
          </InfoWrapper>
        )
      default:
        return ''
    }
  }
  return (
    <PageLayout title={`${category} - ${subCategory} - ${product.title}`}>
      <Header data={categories} />
      <div className='container mx-auto px-5'>
        <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[117px] lg:mb-[80px]'>
          {category} - {subCategory} - {product.title}
        </h2>

        <Wrapper>
          <Img src={`${product.image}`} />
          <Info>
            <div>
              <Title>{product.title}</Title>
              {getProductDesc(product)}
            </div>
            <Button href='https://wa.me/+996706309955' target='_blank'>
              <img src='/icons/whatsapp.svg' />
              Получить консультацию
            </Button>
          </Info>
        </Wrapper>

        <WrapperDesc>
          <h2 className='sub-title mt-[60px] mb-[30px] lg:mt-[80px] lg:mb-[34px]'>
            описание
          </h2>

          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </WrapperDesc>
      </div>
      <Footer />
    </PageLayout>
  )
}

export async function getServerSideProps({ query }) {
  let sub = {},
    product = {},
    categories = []
  try {
    const r = await Promise.all([
      getCategoryById(query.id),
      getParentCategories(),
      getProductById(query.item),
    ])
    categories = r[1]
    sub = r[0]
    product = { ...r[2], image: getImageUrl(r[2].image) }
  } catch (err) {
    console.log(err)
    return {
      props: {
        category: query.category,
        subCategory: '',
        product: {},
        categories,
      },
    }
  }
  return {
    props: {
      category: query.category,
      subCategory: sub.title,
      product,
      categories,
    },
  }
}

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const Img = styled.img`
  width: 433px;
  @media screen and (max-width: 1023px) {
    width: 335px;
    margin-bottom: 30px;
  }
`

const Info = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    margin-left: 0px;
  }
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #146c4a;
  margin-bottom: 30px;
`

const InfoWrapper = styled.div`
  display: grid;
  row-gap: 20px;

  @media screen and (max-width: 1023px) {
    row-gap: 15px;
  }
`

const InfoItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #146c4a;
  margin-right: 15px;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 15px;
  }
`
const InfoDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #212121;

  @media screen and (max-width: 1023px) {
    font-size: 12px;
    line-height: 155.9%;
  }
`

const Button = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  width: 356px;
  height: 75px;
  background: #146c4a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;

  @media screen and (max-width: 1023px) {
    margin-top: 30px;
    font-size: 14px;
    line-height: 17px;
    height: 58px;
    width: 335px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }

  img {
    margin-right: 14px;
  }
`

const WrapperDesc = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1023px) {
    margin-bottom: 50px;
  }
`
