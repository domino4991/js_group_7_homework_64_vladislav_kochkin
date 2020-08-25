import React, {useEffect, useState} from 'react';
import './FullPost.css';
import axiosPosts from "../../axiosPosts";
import {NavLink} from "react-router-dom";
import {Sugar} from "react-preloaders";
import Moment from "react-moment";

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
        } catch {
            console.log('error');
        } finally {
            props.history.replace('/');
        }
    }

    return (
        <section className="Full-post-section">
            <div className="container">
                {fullPost !== null ? (
                    <article className="Full-post">
                        <header className="Full-post__header">
                            <h3 className="Full-post__title">{fullPost.title}</h3>
                            <span className="Full-post__date"><Moment format="DD.MM.YYYY HH:mm">{fullPost.date}</Moment></span>
                        </header>
                        <div className="Full-post__body">
                            <p className="Full-post__text">{fullPost.description}</p>
                        </div>
                        <footer className="Full-post__footer">
                            <button type="button" className="Full-post__del-btn Links" onClick={deletePost}>Delete</button>
                            <NavLink to={`/post/${props.match.params.id}/edit`} className="Links">Edit</NavLink>
                        </footer>
                    </article>

                ) : <Sugar
                        customLoading={loading}
                        background={'#00897b'}
                        color={'#e0f2f1'}
                    />
                }
            </div>
        </section>
    );
};

export default FullPost;