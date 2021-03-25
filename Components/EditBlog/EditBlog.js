import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import editPageStyle from './EditBlog.module.css'
import axios from 'axios'

const EditBlog = ({postInfo}) => {

    const [authorName, setAuthorName] = useState(postInfo.authorName);
    const [title, setTitle] = useState(postInfo.title);
    const [bodyContent, setBodyContent] = useState(postInfo.bodyContent);

    const [isUpdated, setIsUpdated] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, ev) =>{

        const updatedPost = { authorName: data.authorName, title: data.title, bodyContent: data.bodyContent}
        const url = `http://localhost:4200/blog/update/${postInfo._id}`;

        axios.put(url, updatedPost)
        .then(response => console.log(response))
        .catch(err => console.log(err));

        setIsUpdated(true);
        setAuthorName("");
        setTitle("");
        setBodyContent("");
    };

    return (
        <main className={editPageStyle.editBlog}>
            <h4 className="text-center mb-4"> Edit the article </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className="form-control p-3" onChange={ (e) => setAuthorName(e.target.value)} value={authorName} name="authorName" ref={register({ required: true })} placeholder="Author's name..." />
                {errors.authorName && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control p-3" onChange={ (e) => setTitle(e.target.value)} value={title} name="title" ref={register({ required: true })} placeholder="Title of the article..." />
                {errors.title && <span className="text-danger">This field is required</span>}
                <br/>
                <textarea className="form-control p-3" onChange={ (e) => setBodyContent(e.target.value)} value={bodyContent} rows="10" cols="60" name="bodyContent" ref={register({ required: true })} placeholder="Your article..." />
                {errors.bodyContent && <span className="text-danger">This field is required</span>}
                <br/>

                <input className="btn btn-info" type="submit" />
            </form>
            {
                isUpdated && <h4 className="text-center text-success m-5"> Post is updated successfully...</h4> 
            }
        </main>
    );
};

export default EditBlog;