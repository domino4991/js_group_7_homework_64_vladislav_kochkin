import React from 'react';
import './PostForm.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';

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
                required
            />
            <h5 className="Post-form__label">Description</h5>
            <FroalaEditorComponent
                tag="textarea"
                model={props.description}
                onModelChange={props.changed}
            />
            <button type="submit" className="Post-form__btn-send Button">Add</button>
        </form>
    );
};

export default PostForm;