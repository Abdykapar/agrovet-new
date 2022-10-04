import Footer from '@/components/Footer'
import AboutUs from '@/components/home/AboutUs'
import Catalog from '@/components/home/Catalog'
import Contacts from '@/components/home/Contacts'
import MainSection from '@/components/home/MainSection'
import OurLocations from '@/components/home/OurLocations'
import OurPartners from '@/components/home/OurPartners'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutUs />
      <Catalog />
      <OurPartners />
      <OurLocations />
      <Contacts />
      <Footer />
    </div>
  )
}
