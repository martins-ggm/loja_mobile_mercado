import React from "react";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoField}>&quot;Cabeçalho&quot;</h1>
      <div className={styles.searchField}>
        <label htmlFor="search">Encontre os produtos que busca:</label>
        <input name="search" type="text" className={styles.searchBar} />
      </div>
      <div className={styles.headerButtons}>
        <button className={styles.singinButton}>entrar</button> 
        <button className={styles.singupButton}>criar conta</button>
      </div>
    </header>
  );
};

export default Header;
