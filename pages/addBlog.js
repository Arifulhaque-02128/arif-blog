import React from 'react';
import AddBlog from '../Components/AddBlog/AddBlog';
import Footer from '../Components/Footer/Footer';
import Layout from '../Layout/Layout';
import styles from '../styles/Home.module.css';

const addBlog = () => {
    return (
        <div>
            <Layout />
            <main className={styles.main}>
                <AddBlog />
            </main>
            <Footer />
        </div>
    );
};

export default addBlog;