import Head from "next/head"
import { FC, PropsWithChildren } from 'react';

import { Navbar } from '../ui';
 
interface Props extends PropsWithChildren {
    title?: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="Cesar Vargas"/>
            <meta name="description" content={`Information about pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title },pokemon, pokedex`}/>
            <meta property="og:title" content={`Information about ${ title }`} />
            <meta property="og:description" content={`This page is about ${ title }`} />
            <meta property="og:image" content={`${ origin }img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
