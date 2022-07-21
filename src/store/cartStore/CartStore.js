import create from "zustand";
import produce from "immer";
import { persist, devtools } from "zustand/middleware";
// define the store
let cartStore = (set) => ({
  CartState: [
    {
      id: 1,
      image: "/images/screenshot.png",
      name: "Gym-Free",
      category: "Gym",
      price: "50Rs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde beatae fuga ipsa? Temporibus, asperiores!",
    },
  ],
  addCarts: (paylaod) =>
    set(
      produce((draft) => {
        draft.CartState.push(paylaod);
      }),
    ),
  removeCart: (payload) =>
    set(
      produce((draft) => {
        const cartIndex = draft.CartState.findIndex((el) => el.id === payload);
        draft.CartState.splice(cartIndex, 1);
      }),
    ),
});

cartStore = devtools(cartStore, {});
cartStore = persist(cartStore, {
  name: "cart",
});
export const useCartStore = create(cartStore);
export default useCartStore;
