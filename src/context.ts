import { createContext, useContext } from "react";
import type { Vegetables } from "./types";

interface Cart {
  vegetable: Vegetables;
  qty: number;
}


interface AppContextValue {
    cart: Cart[]
    vegetables: Vegetables[]
    addToCart: (vegetable: Vegetables, qty: number) => void
    removeToCart: (id: number, qty: number) => void
    total: number
}



export const AppContext = createContext({} as AppContextValue)

export function useAppContext () {
    return useContext(AppContext)
}