import { createContext, ReactElement, useMemo, useReducer } from "react";

export type CartItemType = {
  id: number;
  img: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QTY: "QTY",
  CHECKOUT: "CHECKOUT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD reducer");
      }

      const { id, img, name, price } = action.payload;

      const filteredProducts: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      const qty = itemExists ? itemExists.qty + 1 : 1;

      return {
        ...state,
        cart: [...filteredProducts, { id, img, name, price, qty }],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE reducer");
      }

      const { id } = action.payload;

      const filteredProducts: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredProducts] };
    }
    case REDUCER_ACTION_TYPE.QTY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QTY reducer");
      }

      const { id, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      if (!itemExists) {
        throw new Error("Add at least one item!");
      }

      const updateCart: CartItemType = { ...itemExists, qty };

      const filteredProducts: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredProducts, updateCart] };
    }
    case REDUCER_ACTION_TYPE.CHECKOUT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unknown reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce((prev, cartItem) => {
    return prev + cartItem.qty;
  }, 0);

  const totalPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((prev, cartItem) => {
      return prev + cartItem.qty * cartItem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    return a.id - b.id;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type useCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: useCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<useCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
