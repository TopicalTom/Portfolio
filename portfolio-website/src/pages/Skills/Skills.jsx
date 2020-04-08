import React, {Component} from 'react';
import "./Skills.scss";

import Figure from "../../components/Figure/Figure";
import Nav from "../../components/Nav/Nav";
import Redirect from "../../components/Redirect/Redirect";
import Filter from "../../components/Filter/Filter";

class Skills extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
            <Nav/>
            <main className="skills">
                <div className="skills__container">
                    <section className="skills__content skills__content--filter">
                        <Filter />
                    </section>
                    <section className="skills__content skills__content--skills">
                        <article 
                            className="skills__block">
                                <h1>My Skillset</h1>
                                <br></br>
                                <br></br>
                                <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current process. However, if you would like to view a more traditional resume, follow the link below:</p>
                                <br></br>
                                <div className="skills__action">
                                    <a 
                                        className="skills__button"
                                        href="">
                                        Open Resume
                                    </a>
                                </div>
                                <br></br>
                                <br></br>
                        </article>
                        <article
                            className="skills__block">
                                <h2>Design</h2>
                                <br></br>
                                <h3>Research</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>UI/UX</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Prototyping</h3>
                                <br></br>
                                <Figure />
                        </article>
                        <article
                            className="skills__block">
                                <h2>Development</h2>
                                <br></br>
                                <h3>Front-End (Web)</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Back-End (Web)</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Mobile</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                        </article>
                        <article 
                            className="skills__block">
                                <h2>Product</h2>
                                <br></br>
                                <h3>Management</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Marketing</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                        </article>
                        <article className="skills__block">
                            <Redirect 
                                text="Have any Questions?"
                                link="/contact"
                                cta="Let's Chat"
                            />
                        </article>
                    </section>
                </div>
            </main>
            </>
        );

    }
};

export default Skills;


/*

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

*/