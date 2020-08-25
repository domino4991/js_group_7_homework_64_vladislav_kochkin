import React, {useEffect, useState} from 'react';
import './EditPostPage.css';
import PostForm from "../../components/PostForm/PostForm";
import axiosPosts from "../../axiosPosts";

const EditPostPage = props => {
    const [editPostData, setEditPostData] = useState(null);

    const id = props.match.params.id;

    useEffect(() => {
        const getPost = async () => {
            const postResponse = await axiosPosts.get(`/posts/${id}.json`);
            setEditPostData(postResponse.data);
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

    return (
        <section className="Edit-post-section">
            <div className="container">
                <h3 className="Edit-post__title">Edit post</h3>
                {editPostData !== null ? <PostForm
                    title={editPostData.title}
                    description={editPostData.description}
                    submit={e => onSubmitEditPost(e)}
                    changeField={e => onChangeEditPost(e)}
                /> : <p>Загрузка</p>}
            </div>
        </section>
    );
};

export default EditPostPage;