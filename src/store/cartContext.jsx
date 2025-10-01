import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const cartContext = createContext();
export default function CartContextProvider({ children }) {
  const [listItem, setlistItem] = useState([]);

  function addItemTOList(newitem) {
    const existingItem = listItem.find((elem) => elem.id === newitem.id);
    if (existingItem) {
      toast.error("This item has already been added to cart!");
    } else {
      setlistItem((prev) => [
        ...prev,
        {
          id: newitem.id,
          title: newitem.title,
          price: newitem.price,
          description: newitem.description,
          count: 1,
        },
      ]);
      toast.success("Item has been added to cart!");
    }
  }

  function increaseCount(id) {
    setlistItem((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, count: +elem.count + 1 } : elem
      )
    );
  }
  function decreaseCount(id) {
    setlistItem((prev) =>
      prev.map((elem) =>
        elem.id === id && elem.count > 1
          ? { ...elem, count: +elem.count - 1 }
          : elem
      )
    );
  }

  function removeItem(id) {
    const updatedList = listItem.filter((elem) => elem.id !== id);

    setlistItem(updatedList);
  }
  return (
    <cartContext.Provider
      value={{
        listItem,
        addItemTOList,
        removeItem,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
