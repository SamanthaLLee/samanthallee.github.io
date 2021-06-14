import Head from 'next/head';
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import React from 'react';
import NavigationBar from './NavigationBar';

export const siteTitle = 'LGBTQ+ Policy Map'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    // className = { styles.container }
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavigationBar>

      </NavigationBar>

      {!home && (
        // className = { styles.backToHome }
        <div >
          <Link href="/">
            <a>← Back to map</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
    </div>
  )
}

// questions:
// mapping stateData
// table styling
// 
