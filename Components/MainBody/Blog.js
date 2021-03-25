import React from 'react';
import blogStyle from './Blog.module.css';
import Link from 'next/link';

const Blog = ({blog}) => {
    const {title, _id, authorName, bodyContent} = blog;
    return (
        <div className={blogStyle.blog}>
            <div>
                <Link href={`/post/${_id}`}><h4 className={blogStyle.title}>{title}</h4></Link>
                <p className="font-weight-light">by {authorName}</p>
                <article className="text-justify text-secondary">{bodyContent}</article>
                <div className="my-3 d-flex justify-content-end">
                    <Link href={`/update/${_id}`}>
                        <button className="btn btn-outline-success mx-3">Edit Article</button>
                    </Link>   
                    <Link href={`/delete/${_id}`}>
                        <button className="btn btn-outline-danger mx-3">Delete Article</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;