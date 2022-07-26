import create from "zustand";
import produce from "immer";
import { persist, devtools } from "zustand/middleware";
// define the store
let CartPageStore = (set, get) => ({
  CartPageStoreObject: [],
  addCartPage: (paylaod) =>
    set(
      produce((draft) => {
        draft.CartPageStoreObject.push(paylaod);
      }),
    ),
  removeCartPage: (payload) =>
    set(
      produce((draft) => {
        const cartIndex = draft.CartPageStoreObject.findIndex(
          (el) => el.id === payload,
        );
        draft.CartPageStoreObject.splice(cartIndex, 1);
      }),
    ),
});

CartPageStore = devtools(CartPageStore, {});
// CartPageStore = persist(CartPageStore, {
//   name: "cartPage",
// });
export const useCartPageStore = create(CartPageStore);
export default useCartPageStore;
