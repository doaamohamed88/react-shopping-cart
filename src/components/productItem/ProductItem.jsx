import React, { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import styles from "./ProductItem.module.css";

export default function ProductItem({ data }) {
  const { addItemTOList } = useContext(cartContext);

  return (
    <div className={styles.item}>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <span className={styles.price}>${data.price}</span>
      <p>{data.description}</p>
      <button onClick={() => addItemTOList(data)}>Add to Cart</button>
    </div>
  );
}
