import React, {useEffect, useState} from 'react';
import './HomePage.css';
import Posts from "../../components/Header/Posts/Posts";
import axiosPosts from "../../axiosPosts";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postsResponse = await axiosPosts.get('/posts.json');
            const postsCopy = Object.keys(postsResponse.data)
                .map(item => ({
                    ...postsResponse.data[item],
                    id: item
                }));
            setPosts(postsCopy);
        }
        getPosts().catch(console.error);
    }, []);



    return (
        <>
            <Posts posts={posts}/>
        </>
    );
};

export default HomePage;