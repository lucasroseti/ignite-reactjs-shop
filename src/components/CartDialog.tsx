// import Image from 'next/image'
import { ReactNode, useContext } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { CartContext } from '@/contexts/CartCheckout'

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

interface CartDialogProps {
  children: ReactNode
}

export function CartDialog({ children }: CartDialogProps) {
  const { cart, removeProductInCart } = useContext(CartContext)
  console.log(cart)

  function handleRemoveProductInChart(productId: string) {
    removeProductInCart(productId)
  }

  function totalProductItems() {
    const totalItems = cart.products.reduce(function (totalItems, product) {
      const price = parseFloat(product.price.replace(/[\D]+/g, '')) / 100
      const totalProduct = price * 1
      return totalItems + totalProduct
    }, 0)

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalItems)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Title>Sacola de compras</Title>

          <CartSection>
            <CartProducts>
              {cart.products.map((product) => (
                <CartProduct key={product.id}>
                  <ImageProduct>
                    <Image
                      src={product.imageUrl}
                      width={120}
                      height={110}
                      alt=""
                    />
                  </ImageProduct>

                  <CartDescription>
                    <span>{product.name}</span>
                    <span>
                      <b>{product.price}</b>
                    </span>
                    <button
                      onClick={() => handleRemoveProductInChart(product.id)}
                    >
                      Remover
                    </button>
                  </CartDescription>
                </CartProduct>
              ))}
            </CartProducts>

            <CartCheckout>
              <CartTotal>
                <div>
                  <span>Quantidade</span>
                  <CartTotalItens>{cart.products.length} itens</CartTotalItens>
                </div>
                <div>
                  <span>
                    <b>Valor Total</b>
                  </span>
                  <CartTotalPrice>{totalProductItems()}</CartTotalPrice>
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
    </Dialog.Root>
  )
}
