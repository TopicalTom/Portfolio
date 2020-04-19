import React, {useState} from 'react';
import "./Form.scss";

function Form ({submitHandler}) {

    const [ isFilled, setIsFilled ] = useState(false);


    function handleInput(e) {
        if (e.target.value.length <= 0) {
            setIsFilled(false)
        } else {
            setIsFilled(true)
        }
    }

    const hasContent = isFilled ? "form__input--filled" : "";
    const showHeader = isFilled ? "form__placeholder--show" : "";

    return (
        <form className="form" netlify netlify-honeypot="bot-field" hidden onSubmit={submitHandler}>
            <div className="form__field form__field--row">
                <label className="form__container">
                    <span className={`form__placeholder ${showHeader}`}>First Name</span>
                    <input 
                        className={`form__input ${hasContent}`}
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        type="text"
                        onChange={handleInput}
                        required
                    />
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showHeader}`}>Last Name</span>
                    <input 
                        className={`form__input ${hasContent}`}
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                        type="text"
                        onChange={handleInput}
                        required
                    />
                </label>
            </div>
            <div className="form__field form__field--stack">
                <label className="form__container">
                    <span className={`form__placeholder ${showHeader}`}>Email</span>
                    <input 
                        className={`form__input form__input--email ${hasContent}`}
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleInput}
                        required
                    />
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showHeader}`}>Your Message</span>
                    <textarea 
                        className={`form__input form__input--message ${hasContent}`}
                        placeholder="Your Message"
                        name="message"
                        id="message"
                        onChange={handleInput}
                        required
                    />
                </label>
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