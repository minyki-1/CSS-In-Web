import '../globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import cssInWeb from 'css-in-web';

const font = Inter();

export default function App({ Component, pageProps }: AppProps) {
  cssInWeb({ url: "http://localhost:9000/" });
  return (
    <>
      <style jsx global>{`
        html { font-family: ${font.style.fontFamily}; }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
