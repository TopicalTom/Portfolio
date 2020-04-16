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
                    <p>Direct</p>
                    <ul>
                        <li><a 
                            className="contact__link"
                            href="mailto:thomasvgriffiths@gmail.com">
                            thomasvgriffiths@gmail.com
                        </a></li>
                        <li><a 
                            className="contact__link">
                            (613) 893-3437
                        </a></li>
                        <li><a 
                            className="contact__link">
                            Toronto, ON
                        </a></li>
                    </ul>
                </aside>
                <section className="contact__section contact__section--form">
                    <h1>Let's Chat</h1>
                    <Form />
                </section>
            </div>
        </main>
        </>
    );
};

export default Contact;