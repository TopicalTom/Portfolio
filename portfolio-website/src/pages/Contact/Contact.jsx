import React, {Component} from 'react';
import { animateScroll as scroll} from 'react-scroll'
import { toast } from 'react-toastify';
import "./Contact.scss";

import Nav from "../../components/Nav/Nav";
import Form from "../../components/Form/Form";
import Map from "../../components/Map/Map";
import resume from "../../assets/files/ThomasGriffithsResume.pdf";

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false,
            currentUser: "Thomas"
        };
    }

    submitContactForm = (e) => {

        this.setState ({
            currentUser: e.target.fullName.value
        })

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", 
                "fullName": e.target.fullName.value,
                "email": e.target.email.value,
                "message": e.target.message.value 
            })
          })
            .then(() => 
                this.setState ({
                    formSubmitted: true
                }),
                toast.success(`Message successfully sent!`, {
                    position: "bottom-center",
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
                    position: "bottom-center",
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
        const {formSubmitted, currentUser} = this.state
        
        return (
            <>
            <Nav/>
            <main className="contact">
                <div className="contact__container">
                    <section className="contact__section contact__section--map">
                        <Map/>
                    </section>
                    <section className="contact__section contact__section--form">
                        {formSubmitted 
                        ?
                        <>
                            <h2>{`Thanks for reaching out ${currentUser}!`}</h2>
                            <p 
                                className="contact__message">
                                Your message has been received so I will get back to you as soon as I can! In the meantime you can:
                            </p>
                            <ul>
                                <li><a 
                                    className="contact__option"
                                    download="ThomasGriffithsResume"
                                    href={resume}>
                                    <span>Download Resume</span>
                                    <svg className="contact__external" viewBox="0 0 768 1024">
                                        <path d="M640 768H128V257.90599999999995L256 256V128H0v768h768V576H640V768zM384 128l128 128L320 448l128 128 192-192 128 128V128H384z"/>
                                    </svg>
                                </a></li>
                                <li><a
                                    className="contact__option"
                                    href="https://www.linkedin.com/in/thomasvgriffiths/">
                                    <span>Join My Network</span>
                                    <svg className="contact__external" viewBox="0 0 768 1024">
                                        <path d="M640 768H128V257.90599999999995L256 256V128H0v768h768V576H640V768zM384 128l128 128L320 448l128 128 192-192 128 128V128H384z"/>
                                    </svg>
                                </a></li>
                            </ul>
                            <p
                                className="contact__message">
                                Alternatively, you can even submit another message if you have something you missed or still want to talk about.
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
                            <h2>Interested in working together?</h2>
                            <p 
                                className="contact__message">
                                Fill out the form below or 
                                <div className="contact__link">
                                    <a 
                                        className="contact__email" 
                                        href="mailto:thomasvgriffiths@gmail.com">
                                        email me
                                    </a>
                                    <svg className="contact__external" viewBox="0 0 768 1024">
                                        <path d="M640 768H128V257.90599999999995L256 256V128H0v768h768V576H640V768zM384 128l128 128L320 448l128 128 192-192 128 128V128H384z"/>
                                    </svg>
                                </div>
                            </p>
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