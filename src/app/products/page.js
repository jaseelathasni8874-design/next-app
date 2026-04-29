"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

// 🔹 Inner component (uses searchParams safely)
function ProductsContent() {
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  return (
    <div className={styles.container}>
      <h1>Products</h1>

      {search && <p>Showing results for: "{search}"</p>}

      <div className={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} className={styles.card}>
            <img src={p.thumbnail} className={styles.image} alt={p.title} />

            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.price}>₹{p.price}</p>

            <button
              className={styles.btn}
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>

            <Link href={`/products/${p.id}`} className={styles.link}>
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found 😢</p>
      )}
    </div>
  );
}

// 🔹 Wrap with Suspense (MAIN FIX)
export default function Products() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductsContent />
    </Suspense>
  );
}