import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <a href={props.href} className={styles.card}>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </a>
  );
}
