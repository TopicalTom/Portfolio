import React from 'react';
import axios from "axios";
import "./Contact.scss";

import Nav from "../../components/Nav/Nav";
import Form from "../../components/Form/Form";
import Map from "../../components/Map/Map";

const Contact = () => {

    const submitContactForm = (e) => {
        e.preventDefault();

        axios.post("netlify", {

            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            message: e.target.message.value

        }).then((res) => {
            //send alert
        });
    };


    return (
        <>
        <Nav/>
        <main className="contact">
            <div className="contact__container">
                <aside className="contact__section contact__section--links">
                    <ul className="contact__links">
                        <h3 className="contact__info">
                            Direct Links
                        </h3>
                        <li><a 
                            className="contact__link"
                            href="mailto:thomasvgriffiths@gmail.com">
                            thomasvgriffiths@gmail.com
                        </a></li>
                        <li><a 
                            className="contact__link"
                            href="https://www.linkedin.com/in/thomasvgriffiths/">
                            in/thomasvgriffiths
                        </a></li>
                        <li><a 
                            className="contact__link"
                            href="">
                            (613) 893-3437
                        </a></li>
                    </ul>
                </aside>
                <section className="contact__section contact__section--form">
                    <h1>Let's Chat</h1>
                    <Form submitHandler={submitContactForm}/>
                </section>
            </div>
        </main>
        </>
    );
};

export default Contact;