import BaseLayout from '@/components/templates/BaseLayout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300'] })
import 'antd/dist/reset.css'
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      {Component.woLayout ? (
        <Component {...pageProps} />
      ) : (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </main>
  )
}
