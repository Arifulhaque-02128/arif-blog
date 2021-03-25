export const FETCH_BLOG_DATA = 'FETCH_BLOG_DATA';
export const FETCH_SINGLE_POST_BY_ID = 'FETCH_SINGLE_POST_BY_ID';

export const fetchBlogData = (data) => {
    return { 
        type: FETCH_BLOG_DATA,
        payload: data 
    }
};