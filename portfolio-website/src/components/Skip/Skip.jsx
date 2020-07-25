import React, {useState} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./Skip.scss";

const Skip = (props) => {

    const {links, handleScroll} = props

    return (
        <article className="skip">
            <div className="skip__container">
                <label className="skip__help">Navigate To</label>
                <svg className="skip__drop" viewBox="0 0 24 24">
                    <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                </svg>
                <select
                    className="skip__current" 
                    onChange={handleScroll}
                >
                {links.map(link => {
                    return (
                        <option 
                            className="skip__option"
                            value={link}>
                            {link}
                        </option>
                    )
                })}
                </select>
            </div>
        </article>
    );
};

export default Skip;