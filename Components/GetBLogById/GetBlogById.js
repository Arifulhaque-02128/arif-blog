import React, { useState } from 'react';
import Blog from '../MainBody/Blog';
import pageStyle from './GetBlogById.module.css';
import axios from 'axios';

const GetBlogById = ({postInfo, type}) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const handleDelete = (id) => {
        const url = `http://localhost:4200/blog/delete/${id}` ;
        axios.delete(url)
        .then( res => {
            console.log(res)
            setIsDeleted(true);
        })
        .catch( err => console.log(err))
    }
    
    return (
        <div className={`container ${pageStyle.container}`}>
            {
                type === "article" && <Blog blog={postInfo} />
            }
            {
                type === "delete" && 
                    ( isDeleted ? <h4 className="text-center text-success m-5"> Post is deleted successfully...</h4> 
                    : 
                    <div className="m-5">
                        <h4 className="text-justify text-secondary mb-5"> <span className="text-dark">Are you sure to delete - </span> {postInfo.title} ? </h4>
                        <button onClick={() => {handleDelete(postInfo._id)}} className="btn btn-dark"> Delete </button>
                    </div> )
            }
            
        </div>
    );
};

export default GetBlogById;