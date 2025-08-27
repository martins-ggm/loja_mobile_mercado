import React from "react";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoField}>&quot;Cabeçalho&quot;</h1>
      <div className={styles.searchField}>
        <h1>Encontre os produtos que busca:</h1>
      </div>
    </header>
  );
};

export default Header;
