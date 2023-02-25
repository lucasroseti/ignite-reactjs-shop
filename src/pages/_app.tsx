import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '@/assets/logo.svg'
import {
  CartButton,
  CartCounter,
  CartSection,
  Container,
  Header,
} from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'
import { CartDialog } from '@/components/CartDialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const countOfShirtsInCart = 0
  const isQuantityProdutsEmpty = pageProps.quantityProducts !== undefined

  return (
    <Container>
      <Header center={isQuantityProdutsEmpty}>
        <Image src={logoImg.src} width={129} height={52} alt="" />

        {!pageProps.quantityProducts && (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <CartSection>
                <CartButton>
                  <Handbag size={24} weight="bold" />
                </CartButton>

                {countOfShirtsInCart > 0 && (
                  <CartCounter>
                    <span>{countOfShirtsInCart}</span>
                  </CartCounter>
                )}
              </CartSection>
            </Dialog.Trigger>

            <CartDialog />
          </Dialog.Root>
        )}
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
