import type { ShoppingCart } from "./shopping-cart"
import type { Product } from "~/features/product/model/product"

export type CartApi = {
  read: () => Promise<ShoppingCart>
  update: (product: Product) => Promise<ShoppingCart>
}
