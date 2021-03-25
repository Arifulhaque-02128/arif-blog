import React from 'react';
import Layout from '../../Layout/Layout';
import styles from '../../styles/Home.module.css';
import Footer from '../../Components/Footer/Footer';
import EditBlog from '../../Components/EditBlog/EditBlog';

const update = ({singlePostById}) => {
    return (
        <div>
            <Layout />
            <main className={styles.main}>
                <EditBlog postInfo={singlePostById} />
            </main>
            <Footer />
        </div>
    );
};

export default update;

export const getStaticPaths = async () => {
    
    const baseURL = 'http://localhost:4200/blog/';
    const res = await fetch(baseURL);
    const allPosts = await res.json();

    const paths = allPosts.map( post => ({
        params: {id: post._id.toString()}
    }));

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async (context) => {
    const url = `http://localhost:4200/blog/${context.params.id}`;
    const res = await fetch(url);
    const singlePostById = await res.json();

    return {
        props : { singlePostById, },
    }
}