import React, {useState} from 'react';
import "./Form.scss";

function Form ({submitHandler}) {

    const [ firstIsFilled, setFirstIsFilled ] = useState(false);
    const [ lastIsFilled, setLastIsFilled ] = useState(false);
    const [ emailIsFilled, setEmailIsFilled ] = useState(false);
    const [ messageIsFilled, setMessageIsFilled ] = useState(false);
    const [ wordCount, setWordCount ] = useState(0);
    const [ formReady, setFormIsReady ] = useState(false);

    function handleFirstInput(e) {
        if (e.currentTarget.value.length <= 0) {
            setFirstIsFilled(false)
        } else {
            setFirstIsFilled(true)
            formIsReady()
        }
    }

    function handleLastInput(e) {
        if (e.currentTarget.value.length <= 0) {
            setLastIsFilled(false)
        } else {
            setLastIsFilled(true)
            formIsReady()
        }
    }

    function handleEmailInput(e) {
        if (e.currentTarget.value.length <= 0) {
            setEmailIsFilled(false)
        } else {
            setEmailIsFilled(true)
            formIsReady()
        }
    }

    function handleMessageInput(e) {
        if (e.currentTarget.value.length <= 0) {
            setMessageIsFilled(false)
        } else {
            setMessageIsFilled(true)
            formIsReady()
        }
        const words = e.currentTarget.value === "" ? 0 : e.currentTarget.value.split(" ").length;
        //setTimeout(() => {
            setWordCount(words);
        //}, 1000);
    }


    function formIsReady() {
        if (firstIsFilled === true && lastIsFilled === true && emailIsFilled === true && messageIsFilled === true) {
            setFormIsReady(true)
        } else {
            setFormIsReady(false)
        }
    }

    const firstHasContent = firstIsFilled ? "form__input--filled" : "";
    const showFirstHeader = firstIsFilled ? "form__placeholder--show" : "";
    const lastHasContent = lastIsFilled ? "form__input--filled" : "";
    const showLastHeader = lastIsFilled ? "form__placeholder--show" : "";
    const emailHasContent = emailIsFilled ? "form__input--filled" : "";
    const showEmailHeader = emailIsFilled ? "form__placeholder--show" : "";
    const messageHasContent = messageIsFilled ? "form__input--filled" : "";
    const showMessageHeader = messageIsFilled ? "form__placeholder--show" : "";
    const buttonActive = formReady ? "form__button--active" : "";

    return (
        <form className="form" netlify method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden onSubmit={submitHandler}>
            <div className="form__field form__field--row">
                <label className="form__container">
                    <span className={`form__placeholder ${showFirstHeader}`}>First Name</span>
                    <input 
                        className={`form__input ${firstHasContent}`}
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        type="text"
                        onChange={handleFirstInput}
                        required
                    />
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showLastHeader}`}>Last Name</span>
                    <input 
                        className={`form__input ${lastHasContent}`}
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                        type="text"
                        onChange={handleLastInput}
                        required
                    />
                </label>
            </div>
            <div className="form__field form__field--stack">
                <label className="form__container">
                    <span className={`form__placeholder ${showEmailHeader}`}>Email</span>
                    <input 
                        className={`form__input form__input--email ${emailHasContent}`}
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleEmailInput}
                        required
                    />
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showMessageHeader}`}>Your Message</span>
                    <span className="form__count">{wordCount} / 100</span>
                    <textarea 
                        className={`form__input form__input--message ${messageHasContent}`}
                        placeholder="Your Message"
                        name="message"
                        id="message"
                        onChange={handleMessageInput}
                        minLength="100"
                        required
                    />
                </label>
            </div>
            <div className="form__field form__field--button">
                <button 
                    className={`form__button ${buttonActive}`}
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