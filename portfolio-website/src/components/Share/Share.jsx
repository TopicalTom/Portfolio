import React, { useRef, useState } from 'react';
import "./Share.scss";

import success from "../../assets/icons/success.svg";
import copy from "../../assets/icons/copy.svg";

function Share() {

    const [copyPageSuccess, setCopyPageSuccess] = useState(false);
    const pageRef = useRef(null);
  
    function copyPage(e) {
        pageRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopyPageSuccess(true);
        setTimeout(() => {
            setCopyPageSuccess(false);
        }, 1200);
    };

    return (
        <article className="share">
            <div>
                <p>Want to share?</p>
                <form className="modal__form">
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
                </form>
            </div>
        </article>
    );
}

export default Share