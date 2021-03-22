import React, {useState} from 'react';
import "./Form.scss";

function Form ({submitHandler}) {

    // Handles Name Validation UI
    const [ nameIsFilled, setNameIsFilled ] = useState(false);
    const [ nameValidation, setNameValidation ] = useState(false);
    const [ nameValidationHelp, setNameValidationHelp ] = useState(" ");

    function handleNameInput(e) {

        let nameInput = e.currentTarget.value

        if (nameInput.includes(" ") && nameInput.length > 1)  {
            setNameIsFilled(true)
            setNameValidation(true)
            setNameValidationHelp(" ")
        } else if (nameInput.length >= 1) {
            setNameIsFilled(true)
            setNameValidation(false)
            setNameValidationHelp("+ Please Provide a Full Name")
        } else if (nameInput.length <= 0) {
            setNameIsFilled(false)
            setNameValidation(false)
            setNameValidationHelp("+ Fill Out This Field")
        }
        formIsReady(e);
    }

    // Handles Email Validation UI
    const [ emailIsFilled, setEmailIsFilled ] = useState(false);
    const [ emailValidation, setEmailValidation ] = useState(false);
    const [ emailValidationHelp, setEmailValidationHelp ] = useState(" ");

    function handleEmailInput(e) {

        let emailInput = e.currentTarget.value

        if (emailInput.includes("@") && emailInput.includes(".com") && emailInput.length > 10) {
            setEmailIsFilled(true)
            setEmailValidation(true)
            setEmailValidationHelp(" ")
        } else if (emailInput.includes("@") && !emailInput.includes(".com") && emailInput.length >= 1){
            setEmailIsFilled(true)
            setEmailValidation(false)
            setEmailValidationHelp("+ Must Include .com")
        } else if (!emailInput.includes("@") && emailInput.includes(".com") && emailInput.length >= 1){
            setEmailIsFilled(true)
            setEmailValidation(false)
            setEmailValidationHelp("+ Must Include @")
        } else if (!emailInput.includes("@") && !emailInput.includes(".com") && emailInput.length >= 1){
            setEmailIsFilled(true)
            setEmailValidation(false)
            setEmailValidationHelp("+ Must Include @ and .com")
        } else if (emailInput.length >= 1){
            setEmailIsFilled(true)
            setEmailValidation(false)
            setEmailValidationHelp("+ Provide a Valid Email")
        } else if (emailInput.length <= 0){
            setEmailIsFilled(false)
            setEmailValidation(false)
            setEmailValidationHelp("+ Fill Out This Field")
        }
        formIsReady(e);
    }

    // Handles Message Validation UI
    const [ messageIsFilled, setMessageIsFilled ] = useState(false);
    const [ messageValidation, setMessageValidation ] = useState(false);
    const [ messageValidationHelp, setMessageValidationHelp ] = useState(" ");

    function handleMessageInput(e) {
        //const characters = e.currentTarget.value === "" ? 0 : e.currentTarget.value.split(" ").length;
        const characters = 11 - e.currentTarget.value.length;
        const messageInput = e.currentTarget.value.length

        if (messageInput >= 10) {
            setMessageIsFilled(true);
            setMessageValidation(true)
            setMessageValidationHelp(" ")
        } else if (messageInput >= 1) {
            setMessageIsFilled(true);
            setMessageValidation(false)
            setMessageValidationHelp(`+ Add ${characters} more characters`)
        } else if (messageInput.length <= 0) {
            setMessageIsFilled(false);
            setMessageValidation(false)
            setMessageValidationHelp("+ Fill Out This Field")
        }
        formIsReady(e);
    }

    // Handles Form Validation UI
    const [ formReady, setFormIsReady ] = useState(false);
    const [ formTips, setFormTips ] = useState(false);

    function validationHelp() {
        if (nameValidation !== true || emailValidation !== true || messageValidation !== true) {
            setFormTips(true)
        } else {
            setFormTips(false)
        }
    }

    function formIsReady() {
        if (nameValidation === true && emailValidation === true && messageValidation === true) {
            setFormIsReady(true)
        } else {
            setFormIsReady(false)
        }
    }

    const nameHasContent = nameIsFilled ? "form__input--filled" : "";
    const showNameHeader = nameIsFilled ? "form__placeholder--show" : "";
    const emailHasContent = emailIsFilled ? "form__input--filled" : "";
    const showEmailHeader = emailIsFilled ? "form__placeholder--show" : "";
    const messageHasContent = messageIsFilled ? "form__input--filled" : "";
    const showMessageHeader = messageIsFilled ? "form__placeholder--show" : "";
    const showTips = formTips ? "--visible" : "--hidden";
    const buttonActive = formReady ? "form__button--active" : "";

    return (
        <form className="form" name="contact" method="POST" data-netlify-honeypot='bot-field' data-netlify='true' onSubmit={submitHandler}>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </div>
            <div className="form__field form__field--stack">
            <label className="form__container">
                    <span className={`form__placeholder ${showNameHeader}`}>Full Name</span>
                    {nameValidation
                    ?
                    <></>
                    :
                    <svg className={`form__error form__error${showTips}`} viewBox="0 0 32 32">
                        <path d="M16,32 C24.836,32 32,24.836 32,16 C32,7.164 24.836,0 16,0 C7.164,0 0,7.164 0,16 C0,24.836 7.164,32 16,32 Z M18,18 C18,19.1045695 17.1045695,20 16,20 C14.8954305,20 14,19.1045695 14,18 L14,8 C14,6.8954305 14.8954305,6 16,6 C17.1045695,6 18,6.8954305 18,8 L18,18 Z M15.9999999,21.9685 C16.714531,21.9686786 17.3746898,22.3500415 17.7318007,22.9689329 C18.0889116,23.5878244 18.0887211,24.35022 17.7313008,24.9689329 C17.3738806,25.5876457 16.7135313,25.9686785 15.9990001,25.9685 C14.8944307,25.9682238 13.999224,25.0725696 13.9995,23.9680001 C13.9997762,22.8634307 14.8954304,21.968224 15.9999999,21.9685 Z"></path>
                    </svg>
                    }
                    <input 
                        className={`form__input ${nameHasContent}`}
                        placeholder="Full Name"
                        name="fullName"
                        id="fullName"
                        type="text"
                        onChange={handleNameInput}
                        required
                    />
                    <p className={`form__tip form__tip${showTips}`}>{nameValidationHelp}</p>
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showEmailHeader}`}>Email</span>
                    {emailValidation
                    ?
                    <></>
                    :
                    <svg className={`form__error form__error${showTips}`} viewBox="0 0 32 32">
                        <path d="M16,32 C24.836,32 32,24.836 32,16 C32,7.164 24.836,0 16,0 C7.164,0 0,7.164 0,16 C0,24.836 7.164,32 16,32 Z M18,18 C18,19.1045695 17.1045695,20 16,20 C14.8954305,20 14,19.1045695 14,18 L14,8 C14,6.8954305 14.8954305,6 16,6 C17.1045695,6 18,6.8954305 18,8 L18,18 Z M15.9999999,21.9685 C16.714531,21.9686786 17.3746898,22.3500415 17.7318007,22.9689329 C18.0889116,23.5878244 18.0887211,24.35022 17.7313008,24.9689329 C17.3738806,25.5876457 16.7135313,25.9686785 15.9990001,25.9685 C14.8944307,25.9682238 13.999224,25.0725696 13.9995,23.9680001 C13.9997762,22.8634307 14.8954304,21.968224 15.9999999,21.9685 Z"></path>
                    </svg>
                    }
                    <input 
                        className={`form__input form__input--email ${emailHasContent}`}
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleEmailInput}
                        required
                    />
                    <p className={`form__tip form__tip${showTips}`}>{emailValidationHelp}</p>
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showMessageHeader}`}>Message</span>
                    {messageValidation
                    ?
                    <></>
                    :
                    <svg className={`form__error form__error${showTips}`} viewBox="0 0 32 32">
                        <path d="M16,32 C24.836,32 32,24.836 32,16 C32,7.164 24.836,0 16,0 C7.164,0 0,7.164 0,16 C0,24.836 7.164,32 16,32 Z M18,18 C18,19.1045695 17.1045695,20 16,20 C14.8954305,20 14,19.1045695 14,18 L14,8 C14,6.8954305 14.8954305,6 16,6 C17.1045695,6 18,6.8954305 18,8 L18,18 Z M15.9999999,21.9685 C16.714531,21.9686786 17.3746898,22.3500415 17.7318007,22.9689329 C18.0889116,23.5878244 18.0887211,24.35022 17.7313008,24.9689329 C17.3738806,25.5876457 16.7135313,25.9686785 15.9990001,25.9685 C14.8944307,25.9682238 13.999224,25.0725696 13.9995,23.9680001 C13.9997762,22.8634307 14.8954304,21.968224 15.9999999,21.9685 Z"></path>
                    </svg>
                    }
                    <textarea 
                        className={`form__input form__input--message ${messageHasContent}`}
                        placeholder="Message"
                        name="message"
                        id="message"
                        onChange={handleMessageInput}
                        minLength="10"
                        required
                    />
                    <p className={`form__tip form__tip${showTips}`}>{messageValidationHelp}</p>
                </label>
            </div>
            <div className="form__field form__field--button">
                <button 
                    className={`form__button ${buttonActive}`}
                    type="submit"
                    onClick={() => validationHelp()}>
                    <p className="form__submit">
                    Send Message
                    </p>
                </button>
            </div>
        </form>
    );
};

export default Form;

/*

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
        const words = e.currentTarget.value === "" ? 0 : e.currentTarget.value.split(" ").length;
        
        if (e.currentTarget.value.length <= 0) {
            setMessageIsFilled(false)
        } else {
            setMessageIsFilled(true)
            formIsReady()
        }
        setWordCount(words);
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
        <form className="form" name="contact" method="POST" data-netlify-honeypot='bot-field' data-netlify='true'  onSubmit={submitHandler}>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </div>
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
                    {messageHasContent
                    ?
                    <span className="form__count">{wordCount} / 100</span>
                    :
                    <></>
                    }
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

*/


/*

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
  
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'message': '',
            firstIsFilled: false,
            lastIsFilled: false,
            emailIsFilled: false,
            messageIsFilled: false,
            wordCount: 0,
            formReady: false
        };
    }

    handleFirstInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length <= 0) {
            this.setState({
                firstIsFilled: false
            })
        } else {
            this.setState({
                firstIsFilled: true
            })
        }
    }

    handleLastInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length <= 0) {
            this.setState({
                lastIsFilled: false
            })
        } else {
            this.setState({
                lastIsFilled: true
            })
        }
    }

    handleEmailInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length <= 0) {
            this.setState({
                emailIsFilled: false
            })
        } else {
            this.setState({
                emailIsFilled: true
            })
        }
    }

    handleMessageInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length <= 0) {
            this.setState({
                messageIsFilled: false
            })
        } else {
            this.setState({
                messageIsFilled: true
            })
        }
        const words = e.target.value === "" ? 0 : e.target.value.split(" ").length;
        //setTimeout(() => {
            this.setState({
                wordCount: words
            })
        //}, 1000);
        this.formIsReady()
    }


    formIsReady = () => {
        if (this.state.firstIsFilled === true && this.state.lastIsFilled === true && this.state.emailIsFilled === true && this.state.messageIsFilled === true) {
            this.setState({
                formReady: true
            })
        } else {
            this.setState({
                formReady: false
            })
        }
    }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ...this.state
            })
        })
        .then(() => 
            this.setState({
                'firstName': '',
                'lastName': '',
                'email': '',
                'message': '',
                firstIsFilled: false,
                lastIsFilled: false,
                emailIsFilled: false,
                messageIsFilled: false,
                wordCount: 0,
                formReady: false
            }),
            alert("success")
        )
        .catch(error => alert(error));
    
        e.preventDefault();
    };
  
    render() {
        const { firstName, lastName, email, message } = this.state;
        const firstHasContent = this.state.firstIsFilled ? "form__input--filled" : "";
        const showFirstHeader = this.state.firstIsFilled ? "form__placeholder--show" : "";
        const lastHasContent = this.state.lastIsFilled ? "form__input--filled" : "";
        const showLastHeader = this.state.lastIsFilled ? "form__placeholder--show" : "";
        const emailHasContent = this.state.emailIsFilled ? "form__input--filled" : "";
        const showEmailHeader = this.state.emailIsFilled ? "form__placeholder--show" : "";
        const messageHasContent = this.state.messageIsFilled ? "form__input--filled" : "";
        const showMessageHeader = this.state.messageIsFilled ? "form__placeholder--show" : "";
        const buttonActive = this.state.formReady ? "form__button--active" : "";

        return (
        <form className="form" name="contact" method="POST" data-netlify-honeypot='bot-field' data-netlify='true' onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </div>
            <div className="form__field form__field--row">
                <label className="form__container">
                    <span className={`form__placeholder ${showFirstHeader}`}>First Name</span>
                    <input 
                        className={`form__input ${firstHasContent}`}
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={this.handleFirstInput}
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
                        value={lastName}
                        onChange={this.handleLastInput}
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
                        value={email}
                        onChange={this.handleEmailInput}
                        required
                    />
                </label>
                <label className="form__container">
                    <span className={`form__placeholder ${showMessageHeader}`}>Your Message</span>
                    <span className="form__count">{this.state.wordCount} / 100</span>
                    <textarea 
                        className={`form__input form__input--message ${messageHasContent}`}
                        placeholder="Your Message"
                        name="message"
                        id="message"
                        value={message}
                        onChange={this.handleMessageInput}
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
        )
    }
};

*/