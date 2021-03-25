import React from 'react';
import Head from 'next/head'
import Header from '../Components/Header/Header'
import styles from '../styles/Home.module.css'

const Layout = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </div>
    );
};

export default Layout;