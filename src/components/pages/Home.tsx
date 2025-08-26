import React from 'react';
import Header from '../layout/Header';
import Main from '../layout/Main';
import styles from './styles/Home.module.css'; // Import the CSS module


const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Main />
        </div>


    );
};

export default Home;