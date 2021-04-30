import { getAllByPlaceholderText } from "@testing-library/react";
import { Cart } from "../model/Cart";
import { Product } from "../model/Search";

export default {
  getCart(): Promise<Cart> {
    return new Promise((resolve) => resolve(new Map()));
  },

  addProduct(product: Product): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
};
