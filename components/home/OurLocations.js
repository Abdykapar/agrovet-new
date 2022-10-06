import React from 'react'
import styled from 'styled-components'

export default function OurLocations() {
  return (
    <div className='container mx-auto px-5' id='locations'>
      <h2 className='sub-title mt-[50px] mb-[70px] lg:mt-[164px] lg:mb-[80px]'>
        наши филиалы
      </h2>

      <MapWrapper className='ml-10'>
        <img className='big' src='icons/map.svg' />
        <img className='small' src='icons/map-small.svg' />
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
