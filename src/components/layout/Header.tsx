import React from "react";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoField}>&quot;Cabeçalho&quot;</h1>
      <div className={styles.searchField}>
        <input type="text" className={styles.searchBar}/>
      </div>
      <div className={styles.headerButtons}>
        <h3>entrar</h3>
        <h3>criar conta</h3>
      </div>
    </header>
  );
};

export default Header;
