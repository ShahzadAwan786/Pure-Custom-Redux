import { createSlice } from "./createSlice";
import { createStore } from "./createStore";
import { productList } from "./productlist";

export let initialState = {
  productList: productList,
  cartList: [],
  wishList: [],
};
// const ADD_CART_ITEM = "cart/addItem";

// export function addCartItem(payload) {
//   return { type: ADD_CART_ITEM, payload: { ...payload, quantity: 1 } };
// }
// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_CART_ITEM:
//       return { ...state, cartList: [...state.cartList, action.payload] };
//     default:
//       state;
//   }
// }
const products = createSlice({
  name: "cart",
  state: initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartList.push(action.payload);
    },
  },
});
const reducer = products.reducer;
export const { addCartItem } = products.actions;
export const store = createStore(reducer);
