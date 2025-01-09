import type { ProductWithId } from "../model/product"
import type { ProductRepository } from "../model/repository"
import { uuidV4 } from "~/shared/utils/uuid"

const dummy: ProductWithId[] = [
  {
    name: "あ",
    price: 10_000,
  },
  {
    name: "い",
    price: 8_000,
  },
].map(el => ({ ...el, id: uuidV4() }))

export const fetchProductList: ProductRepository["list"] = () => {
  return Promise.resolve([
    ...dummy,
  ])
}

export const fetchProduct: ProductRepository["read"] = (id) => {
  const product = dummy.find(d => d.id === id)
  if (!product) {
    throw { status: 404 }
  }

  return Promise.resolve(product)
}
