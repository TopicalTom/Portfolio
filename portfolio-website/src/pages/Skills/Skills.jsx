import React from 'react';
import "./Skills.scss";

import Nav from "../../components/Nav/Nav";

const Skills = () => {
    return (
        <>
        <Nav/>
        <section className="filter">
            <div className="filter__container">
                <div className="filter__section">
                    <h1>What are you looking for?</h1>
                    <p>My skillset will keep on growing so inquire below to see if I have what you need!</p>
                </div>
                <form className="filter__form">
                    <input 
                        className="filter__input"
                        placeholder="Discipline"
                    />
                    <input 
                        className="filter__input"
                        placeholder="Type"
                    />
                    <input 
                        className="filter__input"
                        placeholder="Keywords"
                    />
                </form>
            </div>
        </section>
        <section className="skills">
            <div className="skills__container">
                <p>These are the skills</p>
            </div>
        </section>
        </>
    );
};

export default Skills;