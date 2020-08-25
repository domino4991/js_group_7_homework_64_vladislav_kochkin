import React from 'react';
import './PostForm.css';

const PostForm = props => {
    return (
        <form
            className="Post-form"
            onSubmit={props.submit}
        >
            <label htmlFor="title-input">Title</label>
            <input
                name="title"
                placeholder="Enter post title..."
                type="text"
                className="field"
                id="title-input"
                value={props.title}
                onChange={props.changeField}
            />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                placeholder="Enter your description..."
                id="description"
                value={props.description}
                className="field field-desc"
                onChange={props.changeField}
            />
            <button type="submit" className="Post-form__btn-send Button">Add</button>
        </form>
    );
};

export default PostForm;