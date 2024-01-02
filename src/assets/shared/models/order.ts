import { Product } from "./product"

export interface Order {
  id: number,
  date: Date,
  status: string,
  productsList: Product[]
}
