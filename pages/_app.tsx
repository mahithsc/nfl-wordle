import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Title from '../components/Title'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
  <div>
    <Title/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
