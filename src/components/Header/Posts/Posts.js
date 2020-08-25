import React from 'react';
import './Posts.css';
import PostThumbnail from "./PostThumbnail/PostThumbnail";

const Posts = props => {
    return (
        <section className="Posts-section">
            <div className="container">
                <div className="Posts">
                    {props.posts.length !== 0 ? props.posts.map(item => <PostThumbnail
                        key={item.id}
                        description={item.description}
                        date={item.date}
                    />) : <p>Постов нет</p>}
                </div>
            </div>
        </section>
    );
};

export default Posts;