import React, {useEffect, useState} from 'react';
import './HomePage.css';
import Posts from "../../components/Posts/Posts";
import axiosPosts from "../../axiosPosts";
import {Sugar} from 'react-preloaders';

let durationTime = 0.7;
let startQuery = null;
let endQuery = null;

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                startQuery = new Date().getTime();
                const postsResponse = await axiosPosts.get('/posts.json');
                const postsCopy = Object.keys(postsResponse.data)
                    .map(item => ({
                        ...postsResponse.data[item],
                        id: item
                    }));
                setPosts(postsCopy);
            } finally {
                endQuery = new Date().getTime();
                durationTime += (endQuery - startQuery) / 1000;
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
            <Posts
                posts={posts}
                loading={loading}
                durationTime={Math.round(durationTime)}
            />
        </>
    );
};

export default HomePage;