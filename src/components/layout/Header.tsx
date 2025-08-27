import React from "react";
import styles from "./styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoField}>&quot;Cabeçalho&quot;</h1>
      <div className={styles.searchField}>
        <input type="text" className={styles.searchBar} />
      </div>
      <div className={styles.headerButtons}>
        <button>entrar</button> 
        <button>criar conta</button>
      </div>
    </header>
  );
};

export default Header;
