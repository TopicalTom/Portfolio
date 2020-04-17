import React from 'react';
import "./Form.scss";

function Form ({submitHandler}) {
    return (
        <form className="form" netlify netlify-honeypot="bot-field" hidden onSubmit={submitHandler}>
            <div className="form__field form__field--row">
                <label className="form__container">
                    <span className="form__placeholder">Full Name</span>
                    <input 
                        className="form__input"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        type="text"
                        required
                    />
                </label>
                <label className="form__container">
                    <span className="form__placeholder">Full Name</span>
                    <input 
                        className="form__input"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                        type="text"
                        required
                    />
                </label>
            </div>
            <div className="form__field form__field--stack">
                <input 
                    className="form__input"
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="email"
                    required
                />
                <textarea 
                    className="form__input form__input--textarea"
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    required
                />
            </div>
            <div className="form__field form__field--button">
                <button 
                    className="form__button"
                    type="submit">
                    <p className="form__submit">
                    Send Message
                    </p>
                </button>
            </div>
        </form>
    );
};

export default Form;