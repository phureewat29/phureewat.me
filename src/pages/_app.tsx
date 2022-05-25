import '@/styles/globals.css'
import '@/styles/codeblock.css'

import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
