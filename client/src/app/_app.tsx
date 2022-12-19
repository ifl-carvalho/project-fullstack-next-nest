import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'

const Font = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'auto'
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={Font.className}>
      <Component {...pageProps} />
    </main>
  )
}
