import React, { useState, useLayoutEffect } from 'react'
import './Switch.scss'

const Switch = () => {

    const [ makeDark, setMakeDark ] = useState(
        () => JSON.parse(window.localStorage.getItem("global-theme")) || "light"
    );

                /*
    function checkMode() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            setMakeDark( e.matches ? "dark" : "light");
        });
        changeTheme()
    }
    checkMode()

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
        }
        */

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
            changeTheme()
        }
    }, []);

    useLayoutEffect(() => {
        window.localStorage.setItem("global-theme", JSON.stringify(makeDark))
        changeTheme();
    });

    return (
        <div className="toggle">
            <h4 className="toggle__type">{makeDark} mode</h4>
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