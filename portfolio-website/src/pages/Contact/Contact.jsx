import React, {Component} from 'react';
import { animateScroll as scroll} from 'react-scroll'
import { toast } from 'react-toastify';
import "./Contact.scss";

import Nav from "../../components/Nav/Nav";
import Form from "../../components/Form/Form";

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false
        };
    }

    submitContactForm = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", 
                "firstName": e.target.firstName.value,
                "lastName": e.target.lastName.value,
                "email": e.target.email.value,
                "message": e.target.message.value 
            })
          })
            .then(() => 
                this.setState ({
                    formSubmitted: true
                }),
                toast.success(`Message successfully sent!`, {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }),
                scroll.scrollToTop()
            )
            .catch(error => 
                toast.error(`Form Requires More Inputs`, {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            );
        
        e.preventDefault();
    };

    resetForm = (e) => {
        this.setState ({
            formSubmitted: false
        })
    }

    render() {
        const {formSubmitted} = this.state

        const success = () => 
        toast.success(`Message successfully sent!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        const error = () => 
        toast.error(`Form Requires More Inputs`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
                                linkedin.com/in/thomasvgriffiths/
                            </a></li>
                            <li><a 
                                className="contact__link"
                                href="https://github.com/TopicalTom">
                                github.com/TopicalTom
                            </a></li>
                        </ul>
                    </aside>
                    <section className="contact__section contact__section--form">
                        {formSubmitted 
                        ?
                        <>
                            <h1>Message Sent</h1>
                            <p 
                                className="contact__message">
                                Thank you for reaching out and I will get back to you as soon as I can! In the meantime, make sure to check out my projects, skills and about page or even submit another message if you still have something you want to talk about.
                            </p>
                            <div className="contact__confirmation">
                                <button 
                                    className="contact__button" 
                                    onClick={this.resetForm}>
                                    <p className="contact__submit">
                                        Send Another
                                    </p>
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <h1>Let's Chat</h1>
                            <Form submitHandler={this.submitContactForm}/>
                        </>
                        }
                    </section>
                </div>
            </main>
            </>
        );
    }
};