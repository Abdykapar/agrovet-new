import Footer from '@/components/Footer'
import AboutUs from '@/components/home/AboutUs'
import Catalog from '@/components/home/Catalog'
import Contacts from '@/components/home/Contacts'
import MainSection from '@/components/home/MainSection'
import OurLocations from '@/components/home/OurLocations'
import OurPartners from '@/components/home/OurPartners'
import { getImageUrl } from 'helpers/helpers'
import { getParentCategories } from 'services/categories.service'
import Header from '../components/Header'

export default function Home({ data, error }) {
  return (
    <div>
      <Header data={data} />
      <MainSection />
      <AboutUs />
      <Catalog data={data} />
      <OurPartners />
      <OurLocations />
      <Contacts />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  let data = []
  try {
    data = await getParentCategories()
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
