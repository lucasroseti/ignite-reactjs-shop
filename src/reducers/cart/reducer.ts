import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

export interface Cart {
  products: ProductType[]
}

interface CartState {
  cart: Cart
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART_ACTION: {
      return produce(state, (draft) => {
        draft.cart.products.push(action.payload.product)
      })
    }
    case ActionTypes.REMOVE_PRODUCT_IN_CART_ACTION: {
      const productSelectedIndex = state.cart.products.findIndex((product) => {
        return product.id === action.payload.productId
      })

      if (productSelectedIndex < 0) return state

      return produce(state, (draft) => {
        draft.cart.products.splice(productSelectedIndex, 1)
      })
    }
    default:
      return state
  }
}
