import React, {useContext, useMemo} from "react";
import LayoutContext from "../lib/LayoutContext";
import {Layout} from "../model/Layout";
import {Product, ProductView, SearchResults} from "../model/Search";
import ProductComponent from "./Product";
import "./SearchResults.css";

export interface Props {
  results: SearchResults;
  onAddToCart: (product: Product) => (event: MouseEvent) => void;
}

export default ({ results, onAddToCart }: Props) => {
  const layout = useContext(LayoutContext);
  const productView: ProductView = layout == Layout.Grid ? ProductView.Expanded : ProductView.Condensed;

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
