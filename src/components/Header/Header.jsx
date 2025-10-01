import React, { useContext, useState } from "react";
import { cartContext } from "../../store/cartContext";
import styles from "./Header.module.css";
import CartModal from "../modal/CartModal";

export default function Header() {
  const { listItem } = useContext(cartContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="logo" />
          <h1>Shop</h1>
        </div>
        <button className={styles.cartBtn} onClick={() => setOpen(true)}>
          🛒 Cart ({listItem.length})
        </button>
      </header>

      {isOpen && <CartModal onClose={setOpen} />}
    </>
  );
}
