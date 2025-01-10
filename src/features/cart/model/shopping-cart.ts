import type { Product } from "~/features/product/model/product"

export type ShoppingCart = {
  product: Product[]
}

const key = "cart"

export const ShoppingCart = (): ShoppingCart => {
  const prev = sessionStorage.getItem("cart")
  const product = prev ? JSON.parse(prev) : []

  return {
    product,
  }
}

export const addProduct = (self: ShoppingCart, product: Product): ShoppingCart => {
  return {
    product: self.product.concat(product),
  }
}

export const persist = (self: ShoppingCart) => {
  sessionStorage.setItem(key, JSON.stringify(self))
}
