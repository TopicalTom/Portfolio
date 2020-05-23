import React, {useState} from 'react';
import "./Form.scss";

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