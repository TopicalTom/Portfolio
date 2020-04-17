import React, { useState } from 'react'
import './Fab.scss'

const Switch = () => {

    const [ makeDark, setMakeDark ] = useState("light");


    function toggleMode() {
        if (makeDark !== "dark" ) {
            setMakeDark("dark")
            changeTheme();
        } else {
            setMakeDark("light")
            changeTheme();
        }
    }

    function changeTheme() {
        document.documentElement.className = '';
        document.documentElement.classList.add(`theme-${makeDark}`);
    }

    return (
              <div onChange={toggleMode}>
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