import {IProducts} from "./IProducts.ts";

export interface  IProduct{
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}