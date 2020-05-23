import React, {Component} from 'react';
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
                alert("Success!"))
            .catch(error => alert(error));
        
        e.preventDefault();
    };

    resetForm = (e) => {
        this.setState ({
            formSubmitted: false
        })
    }

    render() {
        return (
            <>
            <Nav/>
            <main className="contact">
                <div className="contact__container">
                    <aside className="contact__section contact__section--links">
                        <ul className="contact__links">
                            <h3 className="contact__info">
                                Direct
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
                        {this.state.formSubmitted 
                        ?
                        <>
                            <h1>Message Sent</h1>
                            <div>Thank you for reaching out and I will get back to as soon as I can! In the meantime, make sure to check out my projects and skills or even submit another message.</div>
                            <button onClick={this.resetForm}>Send Another</button>
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