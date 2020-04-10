import React from 'react';
import ReactModal from 'react-modal';
import share from "../../assets/icons/share.svg";
import cancel from "../../assets/icons/cancel.svg";
import copy from "../../assets/icons/copy.svg";
import "./Share.scss";

ReactModal.setAppElement('*')

function Share() {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
   
    function closeModal(){
        setIsOpen(false);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    }

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
                    <p>I'm currently looking for employment so if you know someone in need of a Product Designer, you can send them these links:</p>
                    <br></br>
                    <br></br>
                    <form className="modal__form">
                        <label 
                            className="modal__label">
                            Current Page
                        </label>
                        <div className="modal__container">
                            <textarea 
                                className="modal__field"
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
                    </form>
                </div>
            </ReactModal>
            </>
        );
}

export default Share
