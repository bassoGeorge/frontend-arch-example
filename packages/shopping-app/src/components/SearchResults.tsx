import { SimpleList, SimpleListItem } from "shopping-ds-react";
import React, { useContext, useMemo } from "react";
import { isSwitchStatement } from "typescript";
import LayoutContext from "../lib/LayoutContext";
import { Layout } from "../model/Layout";
import { Product, ProductView, SearchResults } from "../model/Search";
import ProductComponent from "./Product";
import "./SearchResults.css";

export interface Props {
  results: SearchResults;
  onAddToCart: (product: Product) => (event: MouseEvent) => void;
}

export default ({ results, onAddToCart }: Props) => {
  const layout = useContext(LayoutContext);
  let productView = ProductView.Expanded;
  switch(layout) {
      case Layout.Grid:
          productView = ProductView.Condensed
          break;
  }

  return useMemo(
    () => (
      <ol className={`products ${layout}`}>
        {results.products.map((result: Product) => {
          return (
            <li key={result.id}>
              <ProductComponent
                product={result}
                onAddToCart={onAddToCart(result)}
                view={productView}
              ></ProductComponent>
            </li>
          );
        })}
      </ol>
    ),
    [results.products, layout]
  );
};
