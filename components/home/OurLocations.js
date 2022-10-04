import React from 'react'
import Map from '../../public/icons/map.svg'

export default function OurLocations() {
  return (
    <div className='container mx-auto' id='locations'>
      <h2 className='sub-title mt-[164px] mb-[80px]'>наши филиалы</h2>

      <div className='ml-10'>
        <Map />
      </div>
    </div>
  )
}
