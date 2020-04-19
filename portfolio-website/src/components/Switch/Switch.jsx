import React, { useState } from 'react'
import './Switch.scss'

const Switch = () => {

    const [ makeDark, setMakeDark ] = useState("dark");


    function toggleMode() {
        if (makeDark === "light" ) {
            setMakeDark("dark")
            changeTheme();
        } else {
            setMakeDark("light")
            changeTheme();
        }
    }

    function changeTheme() {
        document.documentElement.className = 'js-focus-visible';
        document.documentElement.classList.add(`theme-${makeDark}`);
    }

    return (
        <div className="toggle" onChange={toggleMode}>
            <input
                className="switch"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="switch__label"
                htmlFor={`react-switch-new`}
            >
                <span className={`switch__button`} />
            </label>
        </div>
    )
};

export default Switch;