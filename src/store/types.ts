export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
}