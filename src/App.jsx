import React from "react";

import Shop from "./components/Shop";
import CartContextProvider from "./store/cartContext";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <CartContextProvider>
        <Shop />
        <Toaster position="top-center" reverseOrder={false} />
      </CartContextProvider>
    </>
  );
}
