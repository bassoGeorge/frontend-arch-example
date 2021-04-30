import { Filter } from "./Filters";

export type SearchResults =  {
    products: Product[],
    facets: Filter[]
}

export type Product = {
    id: number,
    title: string,
    subtitle: string,
    price: string,
    discountedPrice: string,
    attributes: Map<string, any>,
    isSponsored: boolean,
    isPrime: boolean,
    deliveryBy: {
        from: string,
        to: string
    },
    image: string,
    category: string,
    inCart: boolean
};

export enum ProductView {
    Condensed = 'condensed',
    Expanded = 'expanded'
}