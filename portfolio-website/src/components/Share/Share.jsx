import React from 'react';
import ReactModal from 'react-modal';
import share from "../../assets/icons/share.svg";
import "./Share.scss";

ReactModal.setAppElement('*')

function Share() {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
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
                    <h2>Need a Product Designer?</h2>
                    <p>I'm currently looking for employment so if you know someone in need of a Product Designer, you can send them these links:</p>
                    <form>
                        <textarea placeholder={window.location.href} value={window.location.href}/>
                        <textarea placeholder="topicaltom.com" value={"topicaltom.com/"}/>
                    </form>
                </div>
            </ReactModal>
            </>
        );
}

export default Share
