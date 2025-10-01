import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./CartModal.module.css";
import { cartContext } from "../../store/cartContext";

export default function CartModal({ onClose }) {
  const { listItem, increaseCount, decreaseCount, removeItem } =
    useContext(cartContext);

  const total = listItem.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h2>🛒 Cart Items</h2>
          <button className={styles.close} onClick={() => onClose(false)}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {listItem.length === 0 && (
            <p className={styles.empty}>Your cart is empty 👜</p>
          )}
          {listItem.map((elem) => (
            <div className={styles.row} key={elem.id}>
              <h3>{elem.title}</h3>
              <div className={styles.controls}>
                <button onClick={() => decreaseCount(elem.id)}>-</button>
                <span>{elem.count}</span>
                <button onClick={() => increaseCount(elem.id)}>+</button>
                <button
                  className={styles.delete}
                  onClick={() => removeItem(elem.id)}
                >
                  🗑
                </button>
              </div>
              <p className={styles.price}>
                ${(elem.price * elem.count).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <span>Total Price:</span>
          <span className={styles.total}>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
