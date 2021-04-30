import { Product } from "./Search";

export type Cart = Map<number, CartItem>;

export type CartItem = {
  product: Product;
  count: number;
};

interface CartService {
  getCart: () => Promise<Cart>;
  addProduct: (product: Product) => Promise<boolean>;
}

interface CartActions {
  getCart: () => Promise<Cart>;
  addToCartOptimistically: (
    cart: Cart,
    product: Product
  ) => [Cart, Promise<{ status: boolean; oldCart: Cart }>];
}

export function checkProductInCart(cart: Cart) {
  return (product: Product) => {
    product.inCart = !!cart.get(product.id);
    return product;
  };
}

export function CartActions(cartService: CartService): CartActions {
  return {
    getCart: (): Promise<Cart> => {
      return cartService.getCart();
    },

    addToCartOptimistically: (
      cart: Cart,
      product: Product
    ): [Cart, Promise<{ status: boolean; oldCart: Cart }>] => {
      const productInCart = cart.get(product.id);
      if (productInCart) {
        productInCart.count += 1;
      } else {
        cart.set(product.id, { product, count: 1 });
      }
      return [
          cart,
          new Promise((resolve, reject) => {})
      ];
    },
  };
}
