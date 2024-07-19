import Footer from '@/components/Footer'
import AboutUs from '@/components/home/AboutUs'
import Catalog from '@/components/home/Catalog'
import Contacts from '@/components/home/Contacts'
import MainSection from '@/components/home/MainSection'
import OurLocations from '@/components/home/OurLocations'
import OurPartners from '@/components/home/OurPartners'
import PageLayout from '@/components/layouts/PageLayout'
import { getImageUrl } from 'helpers/helpers'
import { getAddresses } from 'services/address.service'
import { getParentCategories } from 'services/categories.service'
import Header from '../components/Header'
import News from '@/components/home/News'

export default function Home({ data, contacts, error }) {
  return (
    <PageLayout>
      <Header data={data} />
      <MainSection />
      <AboutUs />
      <Catalog data={data} />
      {/* <News /> */}
      <OurPartners />
      <OurLocations />
      <Contacts data={contacts} />
      <Footer />
    </PageLayout>
  )
}

export async function getServerSideProps() {
  let data = [],
    contacts = []
  try {
    // const res = await Promise.all([getParentCategories(), getAddresses()])
    // console.log('res', res)
    // data = res[0]
    // contacts = res[1]
  } catch (err) {
    console.log('err', err)
    return {
      props: {
        error: err,
      }
    }
  }
  return {
    props: {
      data: [],
      contacts: []
      // data: data.map((i) => ({
      //   ...i,
      //   image: getImageUrl(i.image),
      // })),
      // contacts: contacts.map((i) => ({
      //   ...i,
      //   image: getImageUrl(i.image),
      // })),
    },
  }
}
