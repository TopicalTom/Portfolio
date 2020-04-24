import React, { useState, useLayoutEffect } from 'react'
import './Switch.scss'

const Switch = () => {

    const [ makeDark, setMakeDark ] = useState(
        () => JSON.parse(window.localStorage.getItem("global-theme")) || "light"
    );

    function toggleMode(e) {
        if (e.target.value === "light" ) {
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

    useLayoutEffect(() => {
        const data = window.localStorage.getItem("global-theme");
        if (data) {
            setMakeDark(JSON.parse(data));
            document.documentElement.className = 'js-focus-visible';
            document.documentElement.classList.add(`theme-${makeDark}`);
        }
    }, []);

    useLayoutEffect(() => {
        window.localStorage.setItem("global-theme", JSON.stringify(makeDark))
        document.documentElement.className = 'js-focus-visible';
        document.documentElement.classList.add(`theme-${makeDark}`);
    });

    return (
        <div className="toggle">
            <input
                className="switch"
                id={`react-switch-new`}
                type="checkbox"
                onChange={toggleMode}
                value={makeDark}
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