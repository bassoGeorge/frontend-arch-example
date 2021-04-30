import { PrimaryButton, SimpleListItem } from 'shopping-ds-react';
import React, { useContext } from 'react';
import LayoutContext from '../lib/LayoutContext';
import { Product, ProductView } from '../model/Search';
import './Product.css';

export interface Props {
    product: Product,
    onAddToCart: (event: MouseEvent) => void,
    view: ProductView 
}

export default ({ product, onAddToCart, view }: Props) => {
    return (
        <div className={`product ${view}`}>
            <img className="product-image" src={`/assets/${product.image}`} />
            <div className="details">
                <span className="product-title">{product.title}</span>
                <PrimaryButton label="Add to cart" onClick={onAddToCart}></PrimaryButton>
            </div>
        </div>
    )
}