import { createContext, ReactElement, useState } from "react";

export type ProductType = {
  id: number;
  img: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    id: 1,
    img: "img1",
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 120,
  },
  {
    id: 2,
    img: "img2",
    name: "Nike Air Max 270 Men's Running Shoes",
    price: 120,
  },
  {
    id: 3,
    img: "img3",
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 140,
  },
  {
    id: 4,
    img: "img4",
    name: "Puma X Aka Boku Future Rider sneakers",
    price: 120,
  },
  {
    id: 5,
    img: "img5",
    name: "Under Armor Curry 8 Men's Sneakers",
    price: 170,
  },
  {
    id: 6,
    img: "img6",
    name: "Nike Kyrie 7 Men's Sneakers",
    price: 120,
  },
  {
    id: 7,
    img: "img7",
    name: "Jordan Air Jordan 11 Men's Sneakers",
    price: 110,
  },
  {
    id: 8,
    img: "img8",
    name: "Nike LeBron XVIII Men's Sneakers",
    price: 140,
  },
  {
    id: 9,
    img: "img9",
    name: "Nike Lebron XVIII Low Men's Sneakers",
    price: 120,
  },
  {
    id: 10,
    img: "img10",
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 120,
  },
  {
    id: 11,
    img: "img11",
    name: "Puma X Aka Boku Future Rider sneakers",
    price: 180,
  },
  {
    id: 12,
    img: "img12",
    name: "Nike Kyrie Flytrap IV Men's Sneakers",
    price: 120,
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
