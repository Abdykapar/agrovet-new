import styled from 'styled-components'

export default function News() {
  return (
    <div className='container mx-auto px-5' id='catalog'>
      <h2 className='sub-title mt-[50px] mb-[30px] lg:mt-[140px] lg:mb-[80px]'>
        Новости
      </h2>

      <NewsWrapper>
        <NewsCard>
          <Img src='https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=' />
          <Title>Title</Title>
          <Description>lorem ipsum dasdas dasd a asdasd</Description>
          <Date>12.11.2022</Date>
        </NewsCard>
        <NewsCard>
          <Img src='https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75' />
          <Title>Title</Title>
          <Description>lorem ipsum dasdas dasd a asdasd</Description>
          <Date>12.11.2022</Date>
        </NewsCard>
        <NewsCard>
          <Img src='https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=' />
          <Title>Title</Title>
          <Description>lorem ipsum dasdas dasd a asdasd</Description>
          <Date>12.11.2022</Date>
        </NewsCard>
        <NewsCard>
          <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMvhO7lUJasSEpzg6Sx-q5vqQt2FbjKLW9IZgkkUN&s' />
          <Title>Title</Title>
          <Description>lorem ipsum dasdas dasd a asdasd</Description>
          <Date>12.11.2022</Date>
        </NewsCard>
        <NewsCard>
          <Img src='https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=' />
          <Title>Title</Title>
          <Description>lorem ipsum dasdas dasd a asdasd</Description>
          <Date>12.11.2022</Date>
        </NewsCard>
      </NewsWrapper>
    </div>
  )
}

const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const NewsCard = styled.div`
  display: grid;
  gap: 7px;
`

const Img = styled.img`
  /* width: 250px; */
  height: 250px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 767px) {
    height: auto;
  }
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #212121;
`
const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #212121;
`
const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #212121;
`
