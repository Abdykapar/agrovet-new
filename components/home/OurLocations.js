import React from 'react'
import styled from 'styled-components'

export default function OurLocations() {
  return (
    <div className='container mx-auto px-5' id='locations'>
      <h2 className='sub-title mt-[50px] mb-[70px] lg:mt-[164px] lg:mb-[80px]'>
        наши филиалы
      </h2>

      <MapWrapper>
        {/* <img className='big' src='icons/map.svg' />
        <img className='small' src='icons/map-small.svg' /> */}
        <iframe
          src='https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=136147304808'
          width='100%'
          height='400'
          frameborder='0'
        ></iframe>
      </MapWrapper>
    </div>
  )
}

const MapWrapper = styled.div`
  .small {
    display: none;
  }
  .big {
    display: block;
  }
  @media screen and (max-width: 1023px) {
    .big {
      display: none;
    }
    .small {
      display: block;
      width: 100%;
    }
  }
`
