import React from 'react';
import './PostThumbnail.css';
import {NavLink} from "react-router-dom";
import Moment from "react-moment";
import ReactHtmlParser from 'react-html-parser';

import {BiTime} from "react-icons/bi";

const PostThumbnail = props => {
    let duration = props.duration > 7 ? 0.6 : props.duration;

    return (
        <article className="Post-thumbnail" style={{animationDuration: `${duration}s`}}>
            <header className="Post-thumbnail__header">
                <p className="Post-thumbnail__date"><span><BiTime /></span>Created on: <Moment format="DD.MM.YYYY HH:mm">{props.date}</Moment></p>
            </header>
            <div className="Post-thumbnail__body">
                {ReactHtmlParser(props.description)}
            </div>
            <footer className="Post-thumbnail__footer">
                <NavLink to={`/post/${props.id}`} className="Links">Read more</NavLink>
            </footer>
        </article>
    );
};

export default PostThumbnail;