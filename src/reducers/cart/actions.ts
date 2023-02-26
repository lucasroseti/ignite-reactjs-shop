import { ProductType } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_IN_CART_ACTION = 'ADD_PRODUCT_IN_CART_ACTION',
  REMOVE_PRODUCT_IN_CART_ACTION = 'REMOVE_PRODUCT_IN_CART_ACTION',
}

export function addProductInCartAction(product: ProductType) {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART_ACTION,
    payload: {
      product,
    },
  }
}

export function removeProductInCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_IN_CART_ACTION,
    payload: {
      productId,
    },
  }
}
