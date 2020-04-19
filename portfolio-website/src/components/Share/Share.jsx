import React, { useRef, useState } from 'react';
import "./Share.scss";

import success from "../../assets/icons/success.svg";
import copy from "../../assets/icons/copy.svg";

function Share() {

    const [copyURLSuccess, setCopyURLSuccess] = useState(false);
    const pageRef = useRef(null);
  
    function copyURL(e) {
        pageRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopyURLSuccess(true);
        setTimeout(() => {
            setCopyURLSuccess(false);
        }, 1200);
    };

    return (
        <article className="share">
            <div className="share__container">
                <form className="share__form">
                    <div className="share__url">
                        <textarea 
                            className={`share__field share__field${copyURLSuccess ? "--active" : "--inactive"}`}
                            onClick={copyURL}
                            ref={pageRef}
                            placeholder={window.location.href} 
                            value={window.location.href}
                        />
                        <div className="share__action">
                            <img 
                                className="share__icon"
                                src={copyURLSuccess ? success : copy}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </article>
    );
}

export default Share;