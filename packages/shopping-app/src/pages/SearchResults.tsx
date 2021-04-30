import React, { useContext, useEffect, useMemo, useState } from "react";
import { Product, SearchResults } from "../model/Search";
import { search } from "../repo/Search";
import { SimpleList, SimpleListItem, PrimaryButton } from "shopping-ds-react";
import { Filter } from "../model/Filters";
import SearchResultsPage from "../layouts/SearchResultsPage";
import ProductView from "../components/Product";
import SearchResultsView from "../components/SearchResults";
import { Layout } from "../model/Layout";
import LayoutContext from "../lib/LayoutContext";
import LayoutSwitch from "../components/LayoutSwitch";
import CartContext from "../lib/CartContext";
import { Cart, checkProductInCart } from "../model/Cart";
import { useTransform } from "../lib/TransformHook";

export interface Props {
  addToCart: (product: Product) => void;
}

function searchProducts(filters: Filter[]): () => Promise<SearchResults> {
  return async () => {
    return await search("", filters);
  };
}

function mapToCart(cart: Cart): (searchResults: SearchResults) => SearchResults {
  return (searchResults: SearchResults) => {
    searchResults.products = searchResults.products.map(checkProductInCart(cart));
    return searchResults;
  }
}

export default ({ addToCart }: Props) => {
  const [results, setResults] = useState<SearchResults>({
    products: [],
    facets: [],
  });
  const [filters, setFilters] = useState<Filter[]>([]);
  const [filtersUpdated, setFiltersUpdated] = useState<Boolean>(false);
  const [layout, setLayout] = useState<Layout>(Layout.List);
  const cart = useContext(CartContext);

  const changeLayout = (layout: Layout) => {
    setLayout(layout);
  };

  useTransform(
    searchProducts(filters),
    mapToCart(cart),
    (results: SearchResults) => {
      setResults(results);
      setFilters(results.facets);
    },
    [filtersUpdated]
  );

  const onAddToCart = (product: Product) => (event: MouseEvent) => {
    addToCart(product);
  };

  const setFilter = (selectedFilter: string) => {
    if (filters.length > 0) {
      setFilters(
        filters.map((filter) => {
          filter.options = filter.options.map((option) => {
            if (option.value === selectedFilter) {
              option.isSelected = !option.isSelected;
            }
            return option;
          });
          return filter;
        })
      );
      setFiltersUpdated(!filtersUpdated);
    }
  };

  const facets = () => {
    return (
      <div>
        <input
          id="facet-prime"
          type="checkbox"
          checked={filters.length > 0 && filters[0].options[0].isSelected}
          onChange={() => setFilter("prime")}
        ></input>
        <label htmlFor="facet-prime">Prime</label>
      </div>
    );
  };

  const sponsored = () => {
    return <div></div>;
  };

  return (
    <LayoutContext.Provider value={layout}>
      <SearchResultsPage
        facets={facets}
        sponsored={sponsored}
        layoutSwitcher={() => (
          <LayoutSwitch
            selectedLayout={layout}
            onLayoutChange={changeLayout}
          ></LayoutSwitch>
        )}
        results={() => (
          <SearchResultsView
            results={results}
            onAddToCart={onAddToCart}
          ></SearchResultsView>
        )}
      />
    </LayoutContext.Provider>
  );
};



  // useEffect(() => {
  //   let isMounted = true;
  //   (async () => {
  //     const results: SearchResults = await search("", filters);
  //     results.products = results.products.map(checkProductInCart(cart));
  //     isMounted && setResults(results);
  //     isMounted && setFilters(results.facets);
  //   })();
  //   return () => { isMounted = false };
  // }, [filtersUpdated]);