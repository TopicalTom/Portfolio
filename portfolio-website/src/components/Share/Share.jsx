import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import share from "../../assets/icons/share.svg";
import cancel from "../../assets/icons/cancel.svg";
import copy from "../../assets/icons/copy.svg";
import "./Share.scss";

ReactModal.setAppElement('*')

function Share() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

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

    const pageRef = useRef(null);
  
    function copyPage(e) {
        pageRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    const homeRef = useRef(null);

    function copyHome(e) {
        homeRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return (
        <>
            <img 
                className="share"
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
                    <p>If you, or someone you know is in need of a Product Designer, send them these links:</p>
                    <br></br>
                    <br></br>
                    <form className="modal__form">
                        <label 
                            className="modal__label">
                            Current Page
                            {copySuccess}
                        </label>
                        <div className="modal__container">
                            <textarea 
                                className="modal__field"
                                onClick={copyPage}
                                ref={pageRef}
                                placeholder={window.location.href} 
                                value={window.location.href}
                            />
                            <div className="modal__action">
                                <img 
                                    className="modal__icon"
                                    src={copy}
                                />
                            </div>
                        </div>
                        <br></br>
                        <h4>-- or --</h4>
                        <br></br>
                        <label 
                            className="modal__label">
                            Home Page
                        </label>
                        <div className="modal__container">
                            <textarea
                                className="modal__field"
                                onClick={copyHome}
                                ref={homeRef}
                                placeholder="topicaltom.com/" 
                                value={"topicaltom.com/"}
                            />
                            <div className="modal__action">
                                <img 
                                    className="modal__icon"
                                    src={copy}
                                />
                            </div>
                        </div>
                        <br></br>
                        <a>
                            <div>Download Resume</div>
                        </a>
                    </form>
                </div>
            </ReactModal>
            </>
        );
}

export default Share
