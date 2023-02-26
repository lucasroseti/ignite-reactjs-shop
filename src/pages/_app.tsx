import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

import { CartContextProvider } from '@/contexts/CartCheckout'

import { CartDialog } from '@/components/CartDialog'
import { Counter } from '@/components/Counter'

import logoImg from '@/assets/logo.svg'
import { CartButton, CartSection, Container, Header } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const isQuantityProdutsEmpty = pageProps.quantityProducts !== undefined

  return (
    <Container>
      <CartContextProvider>
        <Header center={isQuantityProdutsEmpty}>
          <Link href="/" prefetch={false}>
            <Image src={logoImg.src} width={129} height={52} alt="" />
          </Link>

          {!pageProps.quantityProducts && (
            <CartDialog>
              <CartSection>
                <CartButton>
                  <Handbag size={24} weight="bold" />
                </CartButton>
                <Counter />
              </CartSection>
            </CartDialog>
          )}
        </Header>

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
