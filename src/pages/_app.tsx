import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import logoImg from '@/assets/logo.svg'
import { ChartButton, Container, Header } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={129} height={52} alt="" />
        <ChartButton>
          <Handbag size={24} weight="bold" />
        </ChartButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
