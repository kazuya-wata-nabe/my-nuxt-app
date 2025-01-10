import type { CartApi } from "../model/repository"
import type { ShoppingCart } from "../model/shopping-cart"

const key = "cart"
const shoppingCart: ShoppingCart = {
  product: [],
}

export const fetchCart: CartApi["read"] = () => {
  const cart = sessionStorage.getItem(key)
  const product = cart ? JSON.parse(cart) : []

  Object.assign(shoppingCart)

  return Promise.resolve({
    product,
  })
}

export const updateCart: CartApi["update"] = (product) => {
  shoppingCart.product.push(product)

  return Promise.resolve({ ...shoppingCart })
}
