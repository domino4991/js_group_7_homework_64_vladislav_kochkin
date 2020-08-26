import React, {useEffect, useState} from 'react';
import './ContactsPage.css';
import axiosPosts from "../../axiosPosts";
import {Sugar} from "react-preloaders";
import ChangeForm from "../../components/ChangeForm/ChangeForm";

const ContactsPage = () => {
    const [contacts, setContacts] = useState({});
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactsResponse = await axiosPosts.get('/contacts.json');
                setContacts(contactsResponse.data);
            } finally {
                setLoading(false);
            }
        };

        getContacts().catch(console.error);
    }, []);

    const onShowFormHandler = e => {
        e.preventDefault();
        setShowForm(!showForm);
    };

    const onChangeContacts = e => {
        const name = e.target.name;
        const value = e.target.value;
        setContacts(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitChangeForm = async e => {
        e.preventDefault();
        const contactsCopy = {...contacts};
        try {
            await axiosPosts.put('/contacts.json', contactsCopy);
        } finally {
            setShowForm(false);
        }
    }

    return (
        <section className="Contacts-section">
            <Sugar
                customLoading={loading}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <ChangeForm
                show={showForm}
                phone={contacts.phone}
                email={contacts.email}
                address={contacts.address}
                changed={e => onChangeContacts(e)}
                submit={e => onSubmitChangeForm(e)}
                clicked={e => onShowFormHandler(e)}
                page="contacts"
            />
            <div className="container">
                <h3 className="Titles">Contacts</h3>
                <article className="Contacts">
                    <h4 className="Contacts__title">Our contacts</h4>
                    <p className="Contacts__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda dolor doloribus ducimus eligendi illo inventore molestias ullam voluptates. Aperiam et ipsum mollitia nesciunt quidem repellat tempore voluptate. Eum, laudantium.</p>
                    <ul className="Contacts__list">
                        <li className="Contacts__item">
                            {contacts.phone}
                        </li>
                        <li className="Contacts__item">
                            {contacts.email}
                        </li>
                        <li className="Contacts__item">
                            {contacts.address}
                        </li>
                    </ul>
                    <button className="Button" type="button" onClick={onShowFormHandler}>Edit contacts</button>
                </article>
            </div>
        </section>
    );
};

export default ContactsPage;