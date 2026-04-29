"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Remove item
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <h4><b>Your Cart</b> </h4>

      {cart.length === 0 ? (
        <p className={styles.empty}>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className={styles.card}>
             <img
  src={item.thumbnail || item.image}
  alt={item.title}
  style={{ width: "100px" }}
/>

              <div>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
<button
  className={styles.btn}
  onClick={() => removeItem(index)}
>
  Remove
</button>
              </div>
            </div>
          ))}

          <h2 className={styles.total}>Total: ₹{total.toFixed(2)}</h2>

        <button
  className={styles.clearBtn}
  onClick={clearCart}
>
  Clear Cart
</button>
        </>
      )}
    </div>
  );
}