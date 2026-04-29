"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
      />

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
    </div>
  );
}