// import Image from 'next/image'
import { ReactNode, useContext, useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import axios from 'axios'

import { CartContext } from '@/contexts/CartCheckout'
import { priceFormatter } from '@/utils/formatter'

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

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      const products = cart.products.map((product) => {
        return {
          price: product.defaultPriceId,
          quantity: 1,
        }
      })
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', { products })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function handleRemoveProductInChart(productId: string) {
    removeProductInCart(productId)
  }

  function totalProductItems() {
    const totalItems = cart.products.reduce(function (totalItems, product) {
      const price = parseFloat(product.price.replace(/[\D]+/g, '')) / 100
      const totalProduct = price * 1
      return totalItems + totalProduct
    }, 0)

    return priceFormatter.format(totalItems)
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

              <button
                disabled={isCreatingCheckoutSession}
                onClick={handleBuyProduct}
              >
                Finalizar Compra
              </button>
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
