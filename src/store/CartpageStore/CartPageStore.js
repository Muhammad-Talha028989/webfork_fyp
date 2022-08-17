import create from "zustand";
import produce from "immer";
import { persist, devtools } from "zustand/middleware";
import { axios } from "axios";

// define the store
let CartPageStore = (set, get) => ({
  CartPageStoreObject: [],
  totalCartitem: 0,
  countCartItem: (payload) =>
    set((state) => {
      state.totalCartItem = state?.totalCartItem + payload;
    }),
  Page: (payload) =>
    set(
      produce((draft) => {
        draft?.CartPageStoreObject?.push(payload);
      }),
    ),
  removeCartPage: (payload) =>
    set(
      produce((draft) => {
        const cartIndex = draft?.CartPageStoreObject?.findIndex(
          (el) => el.id === payload,
        );
        draft?.CartPageStoreObject?.splice(cartIndex, 1);
      }),
    ),
});

CartPageStore = devtools(CartPageStore, {});
// CartPageStore = persist(CartPageStore, {
//   name: "cart",
// });
export const useCartPageStore = create(CartPageStore);
export default useCartPageStore;
