import { createContext } from 'react';
import { Cart } from '../model/Cart';

export default createContext<Cart>(new Map());