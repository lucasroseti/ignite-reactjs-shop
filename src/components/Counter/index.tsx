import { useContext } from 'react'

import { CartContext } from '@/contexts/CartCheckout'

import { CounterContainer } from './styles'

export function Counter() {
  const { cart } = useContext(CartContext)
  const countOfProductsInCart = cart.products.length

  return (
    <>
      {countOfProductsInCart > 0 && (
        <CounterContainer>
          <span>{countOfProductsInCart}</span>
        </CounterContainer>
      )}
    </>
  )
}
