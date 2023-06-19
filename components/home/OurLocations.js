import React from 'react'
import styled from 'styled-components'

export default function OurLocations() {
  return (
    <div className='container mx-auto px-5' id='locations'>
      <h2 className='sub-title mt-[50px] mb-[70px] lg:mt-[164px] lg:mb-[80px]'>
        наши филиалы
      </h2>

      <MapWrapper>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* <a
            href='https://yandex.com/maps/10309/bishkek/search/agrovetasia/?utm_medium=mapframe&utm_source=maps'
            style='color:#eee;font-size:12px;position:absolute;top:0px;'
          >
            agrovetasia в Бишкеке
          </a>
          <a
            href='https://yandex.com/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps'
            style='color:#eee;font-size:12px;position:absolute;top:14px;'
          >
            Бишкек
          </a> */}
          <iframe
            src='https://yandex.com/map-widget/v1/?ll=76.002408%2C42.056543&mode=search&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJ9N4YAoABVUARhh4xem5fQ0AiBgABAgMEBSgKOABAnwFIAWoCdWGdAc3MTD2gAQCoAQC9Ae4V3zvCAWXogoyY%2BwPgiZ6S5QPX45P0sAPYm%2BSY%2BgTu7LurnAX1uuqV6QW%2Fi7vWFZ%2FprtXrAsrO8cfsAZKMxcvnAe225%2BS8A%2FejrvGYAuuC7t2bAZ%2F98fS0A%2Bvmn8b1AeOGlI%2FtA8qt3IWLAeoBAPIBAPgBAIICC2Fncm92ZXRhc2lhigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=76.002408%2C42.056543&sspn=11.256761%2C5.870136&text=agrovetasia&z=6.9'
            width='100%'
            height='400'
            frameborder='1'
            allowfullscreen='true'
            style={{ position: 'relative' }}
          ></iframe>
        </div>
        {/* <iframe
          src='https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=136147304808'
          width='100%'
          height='400'
          frameborder='0'
        ></iframe> */}
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
