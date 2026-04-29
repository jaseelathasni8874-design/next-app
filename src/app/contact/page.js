import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}