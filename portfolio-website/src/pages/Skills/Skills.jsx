import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "../Project/Project.scss";

import Figure from "../../components/Figure/Figure";
import Nav from "../../components/Nav/Nav";
import Redirect from "../../components/Redirect/Redirect";

import github from "../../assets/icons/github.svg";

class Skills extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        scrollSpy.update();
    }
    
    render() {
        return (
            <>
            <Nav/>
            <main className="project">
                <div className="project__container">
                    <div className="project__nav">
                        <aside>
                            <p 
                                className="project__process">
                                Discipline
                            </p>
                            <ul className="project__links">
                                <li>
                                    <p>Design</p>
                                </li>
                                <li>
                                    <p>Development</p>
                                </li>
                                <li>
                                    <p>Product</p>
                                </li>
                            </ul>
                            <br></br>
                            <p 
                                className="project__process">
                                Filter
                            </p>
                            <ul className="project__links">
                                <li>
                                    <p>All</p>
                                </li>
                                <li>
                                    <p>Software</p>
                                </li>
                                <li>
                                    <p>Workflow</p>
                                </li>
                            </ul>
                        </aside>
                        <br></br>
                        <a 
                            className="project__code"
                            href="https://github.com/TopicalTom/rally-capstone">
                            <p 
                                className="project__github">
                                Reset
                            </p>
                        </a>
                    </div>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                                <h1>My Skillset</h1>
                                <br></br>
                                <br></br>
                                <p>Rally is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                        </Element>
                        <Element
                            name="Problem Space" 
                            className="project__block">
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
                        </Element>
                        <Element
                            name="Problem Space" 
                            className="project__block">
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
                        </Element>
                        <Element
                            name="Problem Space" 
                            className="project__block">
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
                        </Element>
                        <article className="project__block">
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