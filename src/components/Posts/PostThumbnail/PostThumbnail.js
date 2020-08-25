import React from 'react';
import './PostThumbnail.css';
import {NavLink} from "react-router-dom";
import Moment from "react-moment";

const PostThumbnail = props => {
    return (
        <article className="Post-thumbnail">
            <header className="Post-thumbnail__header">
                <p className="Post-thumbnail__date">Created on: <span><Moment format="DD.MM.YYYY HH.mm">{props.date}</Moment></span></p>
            </header>
            <div className="Post-thumbnail__body">
                <p className="Post-thumbnail__text">{props.description}</p>
            </div>
            <footer className="Post-thumbnail__footer">
                <NavLink to={`/post/${props.id}`} className="Links">Read more</NavLink>
            </footer>
        </article>
    );
};

export default PostThumbnail;