import '../globals.css'
import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { connectCIW } from 'css-in-web';
const font = Inter();

export default function App({ Component, pageProps }: AppProps) {
  // connectCIW({ url: "http://localhost:9000" });
  return (
    <>
      <style jsx global>{`
        html { font-family: ${font.style.fontFamily}; }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}