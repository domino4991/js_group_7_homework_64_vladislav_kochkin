import React from 'react';
import './ChangeForm.css';

const ChangeForm = props => {
    let form = null;

    if(props.page === 'about') {
        form = (
            <form className="Change__form" onSubmit={props.submit}>
                <label htmlFor="change-form__title">Title</label>
                <input
                    className="Change-form__field"
                    type="text"
                    name="title"
                    id="change-form__title"
                    value={props.title}
                    onChange={props.changed}
                    required
                />
                <label htmlFor="change-form__name">Author name</label>
                <input
                    className="Change-form__field"
                    type="text"
                    name="name"
                    id="change-form__name"
                    value={props.name}
                    onChange={props.changed}
                    required
                />
                <label htmlFor="change-form__desc">Description</label>
                <textarea
                    className="Change-form__field Change-form__field_desc"
                    id="change-form__desc"
                    name="description"
                    value={props.description}
                    onChange={props.changed}
                    required
                />
                <div className="Change-form__btn-group">
                    <button className="Button" type="submit">Change</button>
                    <button className="Button Change-form__btn-close" type="button" onClick={props.clicked}>Close</button>
                </div>
            </form>
        );
    } else if(props.page === 'contacts') {
        form = (
            <form className="Change__form" onSubmit={props.submit}>
                <label htmlFor="change-contacts__phone">Phone</label>
                <input
                    id="change-contacts__phone"
                    name="phone"
                    value={props.phone}
                    className="Change-form__field"
                    type="text"
                    onChange={props.changed}
                    required
                />
                <label htmlFor="change-contacts__email">Email</label>
                <input
                    id="change-contacts__email"
                    name="email"
                    value={props.email}
                    className="Change-form__field"
                    type="text"
                    onChange={props.changed}
                    required
                />
                <label htmlFor="change-contacts__address">Address</label>
                <input
                    id="change-contacts__address"
                    name="address"
                    value={props.address}
                    className="Change-form__field"
                    type="text"
                    onChange={props.changed}
                    required
                />
                <div className="Change-form__btn-group">
                    <button className="Button" type="submit">Change</button>
                    <button type="button" className="Button Change-form__btn-close" onClick={props.clicked}>Close</button>
                </div>
            </form>
        );
    }

    return (
        <>
        {props.show ? (
                <div
                    className="Change-form__wrapper"
                    onClick={props.clicked}
                >
                    {form}
                </div>
            ) : null}
            </>
    );
};

export default ChangeForm;