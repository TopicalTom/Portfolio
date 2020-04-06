import React from 'react';
import "./Contact.scss";

import Nav from "../../components/Nav/Nav";

const Contact = () => {
    return (
        <>
        <Nav/>
        <main className="contact">
            <div className="contact__container">
                <aside className="contact__section contact__section--details">
                    <p>This is for the details and resume and anything else that might come to ming</p>
                </aside>
                <section className="contact__section contact__section--form">
                    <h2>Let's Chat</h2>
                    <form className="contact__form">
                        <input 
                            className="contact__input"
                            placeholder="Name"/>
                        <input 
                            className="contact__input"
                            placeholder="Email"/>
                        <input 
                            className="contact__input"
                            placeholder="Company"/>
                        <textarea 
                            className="contact__input"
                            placeholder="Your Message"/>
                    </form>
                </section>
            </div>
        </main>
        </>
    );
};

export default Contact;