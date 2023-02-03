import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingProduct) {
        state.cartItems.push({
          id: newItem.id,
          poductName: newItem.productName,
          price: newItem.price,
          quantity: 1,
          imgUrl: newItem.imgUrl,
          totalPrice: newItem.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          Number(existingProduct.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);

      if (existingProduct) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingProduct.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
