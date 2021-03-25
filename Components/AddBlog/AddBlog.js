import React, { useState } from 'react';
import addBlogStyle from './AddBlog.module.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBlog = () => {

    const [isPosted, setIsPosted] = useState(false);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, event) =>{
        const newPost = { authorName: data.authorName, title: data.title, bodyContent: data.bodyContent}
        axios.post('http://localhost:4200/blog/post', newPost)
        .then(response => console.log(response))
        .catch(err => console.log(err));

        setIsPosted(true);
        event.target.reset();
    };

    return (
        <main className={addBlogStyle.addBlogBody}>
            <h4 className="text-center mb-4"> Add New Article </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control p-3" name="authorName" ref={register({ required: true })} placeholder="Author's name..." />
                {errors.authorName && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control p-3" name="title" ref={register({ required: true })} placeholder="Title of the article..." />
                {errors.title && <span className="text-danger">This field is required</span>}
                <br/>
                <textarea className="form-control p-3" rows="10" cols="60" name="bodyContent" ref={register({ required: true })} placeholder="Your article..." />
                {errors.bodyContent && <span className="text-danger">This field is required</span>}
                <br/>

                <input className="btn btn-info" type="submit" />
            </form>
            {
                
                isPosted && <h4 className="text-center text-success m-5"> Post is updated successfully...</h4> 
                
            }
        </main>
    );
};

export default AddBlog;