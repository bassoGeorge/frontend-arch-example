import React from "react";
import { IconButtonWithBubble } from "shopping-ds-react";
import { Cart } from "../model/Cart";

export interface Props {
  items: Cart
}

export default ({ items }: Props) => {
  return (
    <IconButtonWithBubble bubbleText={items.size}></IconButtonWithBubble>
  );
};
