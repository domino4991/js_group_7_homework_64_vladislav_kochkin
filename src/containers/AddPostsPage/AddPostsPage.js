import React, {useState} from 'react';
import './AddPostsPage.css';
import axiosPosts from "../../axiosPosts";

const AddPostsPage = () => {
    const [post, setPost] = useState({
       title: '',
       description: ''
    });

    const onChangeFieldPostForm = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitNewPostForm = async e => {
        e.preventDefault();

        const newPost = {
            ...post,
            date: new Date()
        };

        try {
            await axiosPosts.post('/posts.json', newPost);
        } finally {
            setPost({
                title: '',
                description: ''
            });
        }
    }


    return (
        <section className="Add-post-section">
            <div className="container">
                <h3 className="Add-post-section__title">Add new post</h3>
                <form
                    className="Add-post-section__form"
                    onSubmit={(e) => onSubmitNewPostForm(e)}
                >
                    <label htmlFor="title-input">Title</label>
                    <input
                        name="title"
                        placeholder="Enter post title..."
                        type="text"
                        className="field"
                        id="title-input"
                        onChange={e => onChangeFieldPostForm(e)}
                    />
                    <textarea
                        name="description"
                        placeholder="Enter your description..."
                        id="description"
                        className="field field-desc"
                        onChange={e => onChangeFieldPostForm(e)}
                    />
                    <button type="submit" className="Add-post-section__btn-send">Add</button>
                </form>
            </div>
        </section>
    );
};

export default AddPostsPage;