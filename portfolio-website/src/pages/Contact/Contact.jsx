import React from 'react';
import "./Contact.scss";

import Nav from "../../components/Nav/Nav";
import Form from "../../components/Form/Form";

const Contact = () => {
    return (
        <>
        <Nav/>
        <main className="contact">
            <div className="contact__container">
                <aside className="contact__section contact__section--links">
                    <p>Direct Links</p>
                </aside>
                <section className="contact__section contact__section--form">
                    <h1>Let's Chat</h1>
                    <p>This is for the details and resume and anything else that might come to ming</p>
                    <Form />
                </section>
            </div>
        </main>
        </>
    );
};

export default Contact;