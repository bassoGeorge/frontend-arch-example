import { useEffect, useState } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import { Cart, CartActions } from "../../model/Cart";
import { Product } from "../../model/Search";
import cartRepo from "../../repo/Cart";

const cartActions = CartActions(cartRepo);

export function useCart(
  initialCart: Cart,
  dependencies: React.DependencyList
): [Cart, (product: Product) => void] {
  const [cart, setCart] = useState<Cart>(initialCart);

  useEffect(() => {
    (async () => {
      const cart: Cart = await cartActions.getCart();
      setCart(cart);
    })();
  }, dependencies);

  const addToCart = async (product: Product) => {
    const [newCart, update] = cartActions.addToCartOptimistically(
      cart,
      product
    );
    setCart(new Map(newCart));
    const result = await update;
    if (!result.status) {
      setCart(new Map(result.oldCart));
    }
  };

  return [cart, addToCart];
}
