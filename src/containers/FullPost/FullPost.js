import React, {useEffect, useState} from 'react';
import './FullPost.css';
import axiosPosts from "../../axiosPosts";
import {NavLink} from "react-router-dom";
import {Sugar} from "react-preloaders";
import Moment from "react-moment";
import ReactHtmlParser from 'react-html-parser';

import {BiTime} from "react-icons/bi";

const FullPost = props => {
    const [fullPost, setFullPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = props.match.params.id;
        const getFullPost = async () => {
            try {
                const fullPostResponse = await axiosPosts.get(`/posts/${id}.json`);
                setFullPost(fullPostResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getFullPost().catch(console.error);
    }, [props.match.params.id]);

    const deletePost = async () => {
        const id = props.match.params.id;
        try {
            await axiosPosts.delete(`/posts/${id}.json`);
        } finally {
            props.history.replace('/');
        }
    }

    return (
        <section className="Full-post-section">
            <Sugar
                customLoading={loading}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <div className="container">
                {fullPost !== null ? (
                    <article className="Full-post">
                        <header className="Full-post__header">
                            <h3 className="Full-post__title">{fullPost.title}</h3>
                            <p className="Full-post__date"><span><BiTime /></span><Moment format="DD.MM.YYYY HH:mm">{fullPost.date}</Moment></p>
                        </header>
                        <div className="Full-post__body">
                            {ReactHtmlParser(fullPost.description)}
                        </div>
                        <footer className="Full-post__footer">
                            <button type="button" className="Full-post__del-btn Links" onClick={deletePost}>Delete</button>
                            <NavLink to={`/post/${props.match.params.id}/edit`} className="Links">Edit</NavLink>
                        </footer>
                    </article>

                ) : null}
            </div>
        </section>
    );
};

export default FullPost;