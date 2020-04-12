import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Skills.scss";

import DegreeCard from "../../components/DegreeCard/DegreeCard";
import UX from "../../assets/images/UXCertificate.png";
import PM from "../../assets/images/ProductManagementCertificate.png";
import iOS from "../../assets/images/iOSDevCertificate.png";

import SkillCard from "../../components/SkillCard/SkillCard";
import chevron from "../../assets/icons/chevron.svg";

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
                    <aside className="skills__content skills__content--filter">
                        <p 
                            className="skills__header">
                            Navigate
                        </p>
                        <ul className="skills__links">
                            <li>
                                <Link
                                    to="Overview"
                                    className="project__link"
                                    activeClass="active" 
                                    smooth={true}
                                    onSetActive={this.handleSetActive}
                                    onSetInactive={this.handleSetInactive}
                                    spy={true} 
                                    offset={-240}
                                    duration={500}>
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="Design"
                                    className="project__link"
                                    activeClass="active" 
                                    smooth={true}
                                    onSetActive={this.handleSetActive}
                                    onSetInactive={this.handleSetInactive}
                                    spy={true} 
                                    offset={-240}
                                    duration={500}>
                                    Design
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="Development"
                                    className="project__link" 
                                    smooth={true}
                                    offset={-240} 
                                    duration={500}>
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="Product" 
                                    className="project__link"
                                    smooth={true}
                                    offset={-240} 
                                    duration={500}>
                                    Product
                                </Link>
                            </li>
                        </ul>
                        <Filter />
                    </aside>
                    <section className="skills__content skills__content--skills">
                        <Element
                            name="Overview"
                            className="skills__block">
                                <h1>My Skillset</h1>
                                <br></br>
                                <br></br>
                                <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current process. However, if you would like to view a more traditional resume, follow the link below:</p>
                                <br></br>
                                <CarouselProvider
                                    naturalSlideWidth={730}
                                    //naturalSlideHeight={280}
                                    totalSlides={2}
                                >
                                    <div className="skills__buttons">
                                        <ButtonNext 
                                            className="skills__btn">
                                                <img 
                                                    className="skills__icon--flip" 
                                                    src={chevron}
                                                />
                                        </ButtonNext>
                                        <ButtonBack 
                                            className="skills__btn">
                                                <img 
                                                    src={chevron}
                                                />
                                        </ButtonBack>
                                    </div>
                                    <Slider className="skills__slider">
                                        <Slide className="skills__slide" index={0}>
                                            <img
                                                className="skills__certificate"
                                                src={iOS}
                                            />
                                            <img
                                                className="skills__certificate"
                                                src={PM}
                                            />
                                        </Slide>
                                    </Slider>
                                </CarouselProvider>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                        </Element>
                        <Element
                            name="Design"
                            className="skills__block">
                                <h2>Design</h2>
                                <br></br>
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <br></br>
                                <br></br>
                                <SkillCard 
                                    tool="Otter.ai"
                                    type="Records Interviews and complies to text"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Optimal Sort"
                                    type="Allows sorting of data for Information Architecture"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Sketch"
                                    type="Design Software for Hi-fi wireframing"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Photoshop"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="inVision"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Principle"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Framer X"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    tool="Zeplin"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <br></br>
                                <br></br>
                        </Element>
                        <Element
                            name="Development"
                            className="skills__block">
                                <h2>Development</h2>
                                <br></br>
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <br></br>
                                <br></br>
                                <SkillCard 
                                    tool="HTML5"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="CSS3"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Javascript"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="React.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="React Native"
                                    type="Design Software for image manipulation"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    tool="SASS"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Node.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Express.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="OAuth"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    tool="mySQL"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    tool="Swift"
                                    type="Design Software for image manipulation"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    tool="ARKit"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    tool="Git"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <br></br>
                                <br></br>
                        </Element>
                        <Element 
                            name="Product"
                            className="skills__block">
                                <h2>Product</h2>
                                <br></br>
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <br></br>
                                <br></br>
                                <SkillCard 
                                    tool="Jira"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Slack"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Google Analytics"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    tool="Google Search Console"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <br></br>
                                <br></br>
                        </Element>
                        <article className="skills__block">
                            <Redirect 
                                text="Notice any skill gaps?"
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