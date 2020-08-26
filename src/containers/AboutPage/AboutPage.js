import React, {useEffect, useState} from 'react';
import './AboutPage.css';
import axiosPosts from "../../axiosPosts";
import {Sugar} from "react-preloaders";
import ChangeAboutForm from "../../components/ChangeAboutForm/ChangeAboutForm";

const AboutPage = () => {
    const [about, setAbout] = useState({});
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const getAboutData = async () => {
            try {
                const aboutDataResponse = await axiosPosts.get('/about.json');
                setAbout(aboutDataResponse.data);
            } finally {
                setLoading(false);
            }
        };
        getAboutData().catch(console.error);
    }, []);

    const onChangeAbout = e => {
        const name = e.target.name;
        const value = e.target.value;
        setAbout(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitChangedForm = async e => {
        e.preventDefault();
        const aboutCopy = {...about};
        try {
            await axiosPosts.put('/about.json', aboutCopy);
        } finally {
            setShowForm(false);
        }
    };

    const onShowFormHandler = e => {
        e.preventDefault();
        setShowForm(!showForm);
    }

    return (
        <section className="About-page-section">
            <ChangeAboutForm
                show={showForm}
                title={about.title}
                name={about.name}
                description={about.description}
                changed={e => onChangeAbout(e)}
                submit={e => onSubmitChangedForm(e)}
                clicked={e => onShowFormHandler(e)}
            />
            <Sugar
                customLoading={loading}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <div className="container">
                <h3 className="Titles">About</h3>
                <article className="About-article">
                    <header className="About-article__header">
                        <h4 className="Header__title">{about.title}</h4>
                    </header>
                    <div className="About-article__body">
                        <p className="Article-body__text">{about.description}</p>
                    </div>
                    <footer className="About-article__footer">
                        <p className="Footer__author">Blog author: <span>{about.name}</span></p>
                        <button className="Button Footer__edit-btn" type="button" onClick={e => onShowFormHandler(e)}>Edit</button>
                    </footer>
                </article>
            </div>
        </section>
    );
};

export default AboutPage;