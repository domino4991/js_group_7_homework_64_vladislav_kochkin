import React, {useEffect, useState} from 'react';
import './EditPostPage.css';
import PostForm from "../../components/PostForm/PostForm";
import axiosPosts from "../../axiosPosts";
import {Sugar} from "react-preloaders";

const EditPostPage = props => {
    const [editPostData, setEditPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    const id = props.match.params.id;

    useEffect(() => {
        const getPost = async () => {
            try {
                const postResponse = await axiosPosts.get(`/posts/${id}.json`);
                setEditPostData(postResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    const onSubmitEditPost = async e => {
        e.preventDefault();
        const data = {
            ...editPostData,
            date: new Date()
        };

        try {
            await axiosPosts.put(`/posts/${id}.json`, data);
        } finally {
            props.history.replace('/');
        }
    }

    const onChangeEditPost = e => {
        const name = e.target.name;
        const value = e.target.value;
        setEditPostData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeDescription = editor => {
        setEditPostData(prevState => ({
            ...prevState,
            description: editor
        }))
    }

    return (
        <section className="Edit-post-section">
            <Sugar
                customLoading={loading}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <div className="container">
                <h3 className="Edit-post__title">Edit post</h3>
                {editPostData !== null ? <PostForm
                    title={editPostData.title}
                    description={editPostData.description}
                    submit={e => onSubmitEditPost(e)}
                    changeField={e => onChangeEditPost(e)}
                    changed={onChangeDescription}
                /> : null}
            </div>
        </section>
    );
};

export default EditPostPage;