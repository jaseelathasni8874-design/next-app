// app/layout.js
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ added
import { useState } from "react"; // ✅ added
import styles from "./layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
 
export default function RootLayout({ children }) {
  const router = useRouter(); // ✅ router
  const [search, setSearch] = useState(""); // ✅ state

  return (
    <html lang="en">
      <body className={styles.container}>
        <nav className={styles.navbar}>
          <h2 className={styles.logo}>jazzzzz</h2>

          {/* 🔍 SEARCH BAR */}
          <input
            type="text"
            placeholder="Search products..."
            className={styles.search}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              router.push(`/products?search=${e.target.value}`);
            }}
          
          />
          

          <div className={styles.navRight}></div>

          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/cart" className={styles.link}>Cart</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>

        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}