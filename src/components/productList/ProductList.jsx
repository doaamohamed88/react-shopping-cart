import { DUMMY_PRODUCTS } from "../../dummy-products";
import React from "react";
import styles from "./ProductList.module.css";
import ProductItem from "../productItem/ProductItem";

export default function ProductList() {
  return (
    <section className={styles.products}>
      <h1>Elegant Clothing For Everyone</h1>
      <div className={styles.grid}>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
