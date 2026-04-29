import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>About Us</h1>

      <p className={styles.text}>
        Welcome to <strong>Jazzz</strong> 🛒 — your one-stop online shopping destination.
        We provide high-quality products at affordable prices.
      </p>

      <h2 className={styles.subtitle}>Our Mission</h2>
      <p className={styles.text}>
        Our mission is to make online shopping simple, fast, and enjoyable for everyone.
      </p>

      <h2 className={styles.subtitle}>What We Offer</h2>
      <ul className={styles.list}>
        <li>📱 Electronics</li>
        <li>👗 Fashion</li>
        <li>💎 Jewelry</li>
        <li>👟 Footwear</li>
      </ul>

      <h2 className={styles.subtitle}>Why Choose Us?</h2>
      <div className={styles.features}>
        <div>🚚 Free Delivery</div>
        <div>🔄 Easy Returns</div>
        <div>🔒 Secure Payment</div>
      </div>

      <h2 className={styles.subtitle}>Contact Us</h2>
      <p className={styles.text}>
        📧 Email: support@shopeasy.com <br />
        📞 Phone: +91 9876543210
      </p>

    </div>
  );
}