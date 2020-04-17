import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import "./Modal.scss";

import share from "../../assets/icons/share.svg";
import cancel from "../../assets/icons/cancel.svg";
import success from "../../assets/icons/success.svg";
import resume from "../../assets/files/ThomasGriffithsResume.pdf";
import copy from "../../assets/icons/copy.svg";

ReactModal.setAppElement('*')

function Modal() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    };
   
    function closeModal(){
        setIsOpen(false);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    };

    const [copyPageSuccess, setCopyPageSuccess] = useState(false);
    const [copyHomeSuccess, setCopyHomeSuccess] = useState(false);
    const pageRef = useRef(null);
    const homeRef = useRef(null);
  
    function copyPage(e) {
        pageRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopyPageSuccess(true);
        setTimeout(() => {
            setCopyPageSuccess(false);
        }, 1200);
    };

    function copyHome(e) {
        homeRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopyHomeSuccess(true);
        setTimeout(() => {
            setCopyHomeSuccess(false);
        }, 1200);
    };

    return (
        <>
            <img 
                className="contact"
                onClick={openModal}
                src={share} 
            />
            <ReactModal
                isOpen={modalIsOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="modal">
                    <img 
                        className="modal__cancel"
                        onClick={closeModal}
                        src={cancel}
                    />
                    <h2>Looking to Hire?</h2>
                    <br></br>
                    <p>If you, or someone you know is in need of a Product Designer, click the boxes below to share some links:</p>
                        <br></br>
                        <br></br>
                    <form className="modal__form">
                        <label 
                            className="modal__label">
                            {copyPageSuccess ? "Link copied to clipboard" : "Current Page"}
                        </label>
                        <div className="modal__container">
                            <textarea 
                                className={`modal__field modal__field${copyPageSuccess ? "--active" : "--inactive"}`}
                                onClick={copyPage}
                                ref={pageRef}
                                placeholder={window.location.href} 
                                value={window.location.href}
                            />
                            <div className="modal__action">
                                <img 
                                    className="modal__icon"
                                    src={copyPageSuccess ? success : copy}
                                />
                            </div>
                        </div>
                        <br></br>
                    <br></br>
                        <label 
                            className="modal__label">
                            {copyHomeSuccess ? "Link copied to clipboard" : "Home Page"}
                        </label>
                        <div className="modal__container">
                            <textarea
                                className={`modal__field modal__field${copyHomeSuccess ? "--active" : "--inactive"}`}
                                onClick={copyHome}
                                ref={homeRef}
                                placeholder="topicaltom.com/"
                                value={"topicaltom.com/"}
                            />
                            <div className="modal__action">
                                <img 
                                    className="modal__icon"
                                    src={copyHomeSuccess ? success : copy}
                                />
                            </div>
                        </div>
                        <br></br>
                    </form>
                    <br></br>
                        <br></br>
                    <br></br>
                    <br></br>
                    <a href={resume} download="ThomasGriffithsResume">
                        <div className="modal__button">Download Resume</div>
                    </a>
                </div>
            </ReactModal>
            </>
        );
}

export default Modal;