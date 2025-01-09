import type { Product, ProductWithId } from "./product"

export type ProductRepository = {
  list: () => Promise<ProductWithId[]>
  create: (product: Product) => void
  read: (id: ProductWithId["id"]) => Promise<ProductWithId>
  update: (product: ProductWithId) => Promise<ProductWithId>
  delete: (id: ProductWithId["id"]) => void
}
