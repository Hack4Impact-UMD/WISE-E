import React from 'react';
import { Container } from '@material-ui/core';
import styles from "./styles.module.css";

/**
 * Home page
 */
const Home = () => {
    return (
        <>
            <div className={styles['banner-img']}></div>
            
            <Container>
                {/*TODO: Add home page*/}
                <h1>Home</h1>
                <p>
                    This is your home page.
                </p>
            </Container>
        </>
    );
}

export default Home;