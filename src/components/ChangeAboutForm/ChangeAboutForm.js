import React from 'react';
import './ChangeAboutForm.css';

const ChangeAboutForm = props => {
    return (
        <>
        {props.show ? (
                <div className="Change-about-form__wrapper">
                    <form className="Change-about__form" onSubmit={props.submit}>
                        <label htmlFor="change-form__title">Title</label>
                        <input
                            className="Change-form__field"
                            type="text"
                            name="title"
                            id="change-form__title"
                            value={props.title}
                            onChange={props.changed}
                        />
                        <label htmlFor="change-form__name">Author name</label>
                        <input
                            className="Change-form__field"
                            type="text"
                            name="name"
                            id="change-form__name"
                            value={props.name}
                            onChange={props.changed}
                        />
                        <label htmlFor="change-form__desc">Description</label>
                        <textarea
                            className="Change-form__field Change-form__field_desc"
                            id="change-form__desc"
                            name="description"
                            value={props.description}
                            onChange={props.changed}
                        />
                        <div className="Change-form__btn-group">
                            <button className="Button" type="submit">Change</button>
                            <button className="Button Change-form__btn-close" type="button" onClick={props.clicked}>Close</button>
                        </div>
                    </form>
                </div>
            ) : null}
            </>
    );
};

export default ChangeAboutForm;