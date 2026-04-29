"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import wall1 from "../asset/wall1.jpg";
import wall2 from "../asset/wall2.jpg";
import wall3 from "../asset/wall3.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);

  // ✅ Load Bootstrap JS + Fetch products
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // ✅ FIXED
  }, []);

  return (
    <div>

      {/* 🎯 HERO CAROUSEL */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* 🔘 Indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={wall1.src} className="d-block w-100" height="400" alt="slide1" />
          </div>

          <div className="carousel-item">
            <img src={wall2.src} className="d-block w-100" height="400" alt="slide2" />
          </div>

          <div className="carousel-item">
            <img src={wall3.src} className="d-block w-100" height="400" alt="slide3" />
          </div>
        </div>

        {/* ⬅️ Prev */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* ➡️ Next */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      🛍 PRODUCTS
      <div className={styles.products}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* ✅ FIXED IMAGE */}
            <img src={item.thumbnail} className={styles.productImg} />

            <h4>{item.title.slice(0, 40)}...</h4>
            <p className={styles.price}>₹{item.price}</p>

            <button className={styles.btn}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* 🚚 WHY SECTION */}
      <div className={styles.why}>
        <div>🚚 Free Delivery</div>
        <div>🔄 Easy Returns</div>
        <div>🔒 Secure Payment</div>
      </div>

      {/* 📨 NEWSLETTER */}
      <div className={styles.newsletter}>
        <h3>Subscribe for Offers</h3>
        <input placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      {/* 📍 FOOTER */}
      <footer className={styles.footer}>
        <p>© 2026  Jazzzzz</p>
      </footer>

    </div>
  );
}