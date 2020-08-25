import React, {useEffect, useState} from 'react';
import './HomePage.css';
import Posts from "../../components/Posts/Posts";
import axiosPosts from "../../axiosPosts";
import {Sugar} from 'react-preloaders';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsResponse = await axiosPosts.get('/posts.json');
                const postsCopy = Object.keys(postsResponse.data)
                    .map(item => ({
                        ...postsResponse.data[item],
                        id: item
                    }));
                setPosts(postsCopy);
            } finally {
                setLoading(false);
            }
        }
        getPosts().catch(console.error);
    }, []);



    return (
        <>
            <Sugar
                customLoading={loading}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <Posts posts={posts}/>
        </>
    );
};

export default HomePage;