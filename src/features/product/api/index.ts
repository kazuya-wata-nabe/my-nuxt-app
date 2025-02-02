import type { ProductWithId } from "../model/product"
import type { ProductRepository } from "../model/repository"

const dummy: ProductWithId[] = [
  {
    name: "あ",
    price: 10_000,
    description: "",
  },
  {
    name: "い",
    price: 8_000,
    description: "亜種帆dsファおisjfncq２９３yp",
  },
].map((el, i) => ({ ...el, id: i.toString() }))

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

export const fetchProductStock = () => {

}
