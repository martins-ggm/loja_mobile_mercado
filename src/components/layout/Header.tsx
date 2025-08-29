import React from "react";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoField}>
        <img src="/logo_mobile.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.searchField}>
        <label htmlFor="search">Encontre os produtos que busca:</label>
        <div className={styles.inputField}>
          <input name="search" type="text" className={styles.searchBar} />
          <button className={styles.searchButton}> busca </button>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <button className={styles.singinButton}>entrar</button>
        <button className={styles.singupButton}>criar conta</button>
      </div>
    </header>
  );
};

export default Header;
