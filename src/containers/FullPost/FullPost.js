import React, {useEffect, useState} from 'react';
import './FullPost.css';
import axiosPosts from "../../axiosPosts";
import {NavLink} from "react-router-dom";

const FullPost = props => {
    const [fullPost, setFullPost] = useState(null);

    useEffect(() => {
        const id = props.match.params.id;
        const getFullPost = async () => {
            const fullPostResponse = await axiosPosts.get(`/posts/${id}.json`);
            setFullPost(fullPostResponse.data);
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
                            <span className="Full-post__date">{fullPost.date}</span>
                        </header>
                        <div className="Full-post__body">
                            <p className="Full-post__text">{fullPost.description}</p>
                        </div>
                        <footer className="Full-post__footer">
                            <button type="button" className="Full-post__del-btn Full-post__btn" onClick={deletePost}>Delete</button>
                            <NavLink to={`/post/${props.match.params.id}/edit`} className="Full-post__edit-btn Full-post__btn">Edit</NavLink>
                        </footer>
                    </article>

                ) : <p>Загрузка</p>}
            </div>
        </section>
    );
};

export default FullPost;