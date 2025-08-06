import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '@/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const metaTitle = router.pathname === '/' ? "Home" : router.pathname.replace('/','')
  return (
      <RootLayout metaTitle={metaTitle}>
        <Component {...pageProps} />
      </RootLayout>   
  )


}
