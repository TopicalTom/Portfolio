import React from 'react';
import "./Takeaway.scss";

const Takeaway = (props) => {

    const {color, type, details} = props

    return (
        <article 
            className="takeaway"
            style={{background: color}}>
            <h4 
                className="takeaway__type">
                {type}
            </h4>
            <h3 className="takeaway__details">
                {details}
            </h3>
        </article>
    );
};

export default Takeaway;