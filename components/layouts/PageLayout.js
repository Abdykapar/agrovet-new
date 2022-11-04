import Head from 'next/head'
import React from 'react'

export default function PageLayout({ title = '', children }) {
  return (
    <>
      <Head>
        <title>АГРОВЕТАЗИЯ {title && `| ${title}`}</title>
        <meta
          name='description'
          content={
            '«AgrovetAsia» — агрохимикатами и ветеринарной продукцией на всех регионах Республики Кыргызстан'
          }
        ></meta>
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      {children}
    </>
  )
}
