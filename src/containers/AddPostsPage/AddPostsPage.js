import React, {useState} from 'react';
import './AddPostsPage.css';
import axiosPosts from "../../axiosPosts";
import PostForm from "../../components/PostForm/PostForm";

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
                <PostForm
                    submit={e => onSubmitNewPostForm(e)}
                    title={post.title}
                    description={post.description}
                    changeField={e => onChangeFieldPostForm(e)}
                />
            </div>
        </section>
    );
};

export default AddPostsPage;