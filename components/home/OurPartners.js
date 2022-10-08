import React, { lazy, Suspense, useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = lazy(() => import('./PartnersSlider'))

export default function OurPartners() {
  const [slider, setSlider] = useState(null)
  useEffect(() => {
    setSlider(<Slider />)
  }, [])
  return (
    <div className='container mx-auto px-5'>
      <h2 className='sub-title mt-[50px] mb-[0px] lg:mt-[168px] lg:mb-[80px]'>
        наши партнеры
      </h2>
      {slider}
    </div>
  )
}
