// import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  CartCheckout,
  CartDescription,
  CartProduct,
  CartProducts,
  CartSection,
  CartTotal,
  CartTotalItens,
  CartTotalPrice,
  Close,
  Content,
  ImageProduct,
  Overlay,
  Title,
} from './styles'

export function CartDialog() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Sacola de compras</Title>

        <CartSection>
          <CartProducts>
            <CartProduct>
              <ImageProduct>
                {/* <Image src={} width={120} height={110} alt="" /> */}
              </ImageProduct>

              <CartDescription>
                <span>Camiseta Beyond the Limits</span>
                <span>
                  <b>R$ 79,90</b>
                </span>
                <button>Remover</button>
              </CartDescription>
            </CartProduct>
          </CartProducts>

          <CartCheckout>
            <CartTotal>
              <div>
                <span>Quantidade</span>
                <CartTotalItens>3 itens</CartTotalItens>
              </div>
              <div>
                <span>
                  <b>Valor Total</b>
                </span>
                <CartTotalPrice>R$ 270,00</CartTotalPrice>
              </div>
            </CartTotal>

            <button>Finalizar Compra</button>
          </CartCheckout>
        </CartSection>

        <Close>
          <X size={24} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
