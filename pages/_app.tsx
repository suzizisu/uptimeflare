import '@mantine/core/styles.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import NoSsr from '@/components/NoSsr'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <MantineProvider defaultColorScheme="auto">
        <style jsx global>{`
          .Header_header__072v2 {
            display: none !important;
          }
          p.mantine-focus-auto {
            display: none !important;
          }
        `}</style>
        <Component {...pageProps} />
      </MantineProvider>
    </NoSsr>
  )
}
