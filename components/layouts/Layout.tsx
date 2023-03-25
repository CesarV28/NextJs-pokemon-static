import Head from "next/head"
import { FC, PropsWithChildren } from 'react';

import { Navbar } from '../ui';
 
interface Props extends PropsWithChildren {
    title?: string;
}


export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="Cesar Vargas"/>
            <meta name="description" content={`Information about pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title },pokemon, pokedex`}/>
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
