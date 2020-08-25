import React from 'react';
import './PostThumbnail.css';

const PostThumbnail = props => {
    return (
        <article className="Post-thumbnail">
            <header className="Post-thumbnail__header">
                <p className="Post-thumbnail__date">Created on: <span>{props.date}</span></p>
            </header>
            <div className="Post-thumbnail__body">
                <p className="Post-thumbnail__text">{props.description}</p>
            </div>
            <footer className="Post-thumbnail__footer">
                <button type="button" className="Post-thumbnail__btn">Read more</button>
            </footer>
        </article>
    );
};

export default PostThumbnail;