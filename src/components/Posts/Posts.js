import React from 'react';
import './Posts.css';
import PostThumbnail from "./PostThumbnail/PostThumbnail";

const Posts = props => {
    let duration = props.durationTime;
    return (
        <section className="Posts-section">
            <div className="container">
                <h3 className="Titles">Posts</h3>
                <div className="Posts">
                    {props.posts.length !== 0 ? props.posts.map(item => <PostThumbnail
                        key={item.id}
                        description={item.description}
                        date={item.date}
                        id={item.id}
                        duration={duration += 0.6}
                    />) : <p>Постов нет</p>}
                </div>
            </div>
        </section>
    );
};

export default Posts;