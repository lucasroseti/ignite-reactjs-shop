import { createContext, ReactNode, useReducer } from 'react'

import {
  addProductInCartAction,
  removeProductInCartAction,
} from '../reducers/cart/actions'
import { cartReducer, Cart, ProductType } from '../reducers/cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Cart
  addProductInCart: (data: ProductType) => void
  removeProductInCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const contextInitialize = {
    cart: {
      products: [],
    },
  }

  const [cartState, dispatch] = useReducer(cartReducer, contextInitialize)

  const { cart } = cartState

  function addProductInCart(data: ProductType) {
    dispatch(addProductInCartAction(data))
  }

  function removeProductInCart(id: string) {
    dispatch(removeProductInCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        removeProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
