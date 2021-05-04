import Button from "./Button";

import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Remoteando</h1>
      </header>
      <Button className="btn btnGreen btnFixed">
          Publicar un trabajo
      </Button>
    </>
  );
}
