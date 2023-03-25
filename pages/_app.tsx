import type { AppProps } from 'next/app'

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import { darkTheme } from '@/themes';

import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <NextUIProvider theme={ darkTheme } >
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
