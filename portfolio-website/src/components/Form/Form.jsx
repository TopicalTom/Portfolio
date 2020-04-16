import React from 'react';
import "./Form.scss";

const Form = () => {
    return (
        <form className="form">
            <div className="form__field form__field--row">
                <label className="form__container">
                    <span className="form__placeholder">Full Name</span>
                    <input 
                        className="form__input"
                        placeholder="First Name"
                        required
                    />
                </label>
                <label className="form__container">
                    <span className="form__placeholder">Full Name</span>
                    <input 
                        className="form__input"
                        placeholder="Last Name"
                        required
                    />
                </label>
            </div>
            <div className="form__field form__field--stack">
                <input 
                    className="form__input"
                    placeholder="Email"
                    required
                />
                <textarea 
                    className="form__input form__input--textarea"
                    placeholder="Your Message"
                    required
                />
            </div>
            <div className="form__field form__field--button">
                <button 
                    className="form__button">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default Form;