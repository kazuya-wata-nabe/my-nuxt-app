export const PRODUCT_COLOR = {
  red: "red",
  blue: "blue",
  yello: "yello",
} as const

export type ProductColor = typeof PRODUCT_COLOR[keyof typeof PRODUCT_COLOR]
