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
import sketch from "../../assets/tools/Sketch.svg";
import framer from "../../assets/tools/Framer.svg";
import otterAi from "../../assets/tools/OtterAi.svg";
import zeplin from "../../assets/tools/Zeplin.svg";
import principle from "../../assets/tools/Principle.svg";
import photoshop from "../../assets/tools/Photoshop.svg";
import illustrator from "../../assets/tools/Illustrator.svg";
import inVision from "../../assets/tools/inVision.svg";
import optimalsort from "../../assets/tools/OptimalSort.svg";
import jira from "../../assets/tools/Jira.svg";
import slack from "../../assets/tools/Slack.svg";
import analytics from "../../assets/tools/Analytics.svg";
import searchconsole from "../../assets/tools/SearchConsole.svg";
import html from "../../assets/tools/HTML.svg";
import css from "../../assets/tools/CSS.svg";
import javascript from "../../assets/tools/Javascript.svg";
import react from "../../assets/tools/React.svg";
import swift from "../../assets/tools/Swift.svg";
import arkit from "../../assets/tools/ARKit.svg";
import git from "../../assets/tools/Git.svg";
import sass from "../../assets/tools/Sass.svg";
import node from "../../assets/tools/Node.svg";
import oAuth from "../../assets/tools/oAuth.svg";
import mySQL from "../../assets/tools/mySQL.svg";
import hotjar from "../../assets/tools/Hotjar.svg";
import mailchimp from "../../assets/tools/Mailchimp.svg";


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
                                    to="Product" 
                                    className="project__link"
                                    smooth={true}
                                    offset={-240} 
                                    duration={500}>
                                    Product
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
                            name="Product"
                            className="skills__block">
                                <h2>Product</h2>
                                <br></br>
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <br></br>
                                <br></br>
                                <h4>Research</h4>
                                <SkillCard 
                                    icon={otterAi}
                                    tool="Otter.ai"
                                    type="Ai-powered speech to text transcription"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={optimalsort}
                                    tool="Optimal Sort"
                                    type="Card-based information architecture categorization"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={analytics}
                                    tool="Google Analytics"
                                    type="Web analytics service for measuring website traffic and ROI"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={hotjar}
                                    tool="HotJar"
                                    type="Card-based information architecture categorization"
                                    status="Upcoming"
                                />
                                <h4>Workflow</h4>
                                <SkillCard 
                                    icon={slack}
                                    tool="Slack"
                                    type="Instant messaging platform for team collaboration"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={jira}
                                    tool="Jira"
                                    type="Ticket-based issue tracking for agile project management"
                                    status="Learned"
                                />
                                <h4>Marketing</h4>
                                <SkillCard 
                                    icon={mailchimp}
                                    tool="Mailchimp"
                                    type="Ticket-based issue tracking for agile project management"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={searchconsole}
                                    tool="Google Search Console"
                                    type="Web service for website search engine optimization (SEO)"
                                    status="Learned"
                                />
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
                                <h4>Wireframing</h4>
                                <SkillCard 
                                    icon={sketch}
                                    tool="Sketch"
                                    type="Vector graphics editor for web and mobile wireframes"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={photoshop}
                                    tool="Photoshop"
                                    type="Raster graphics editor for photo editing and enhancement"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={illustrator}
                                    tool="Illustrator"
                                    type="Vector graphics editor for print and digital media"
                                    status="Upcoming"
                                />
                                <h4>Prototyping</h4>
                                <SkillCard 
                                    icon={inVision}
                                    tool="inVision"
                                    type="Prototyping Software for simple user flows"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={principle}
                                    tool="Principle"
                                    type="Prototyping Software for motion based interactions"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={framer}
                                    tool="Framer X"
                                    type="Prototyping software for complex data-driven interactions"
                                    status="In-Progress"
                                />
                                <h4>Handoff</h4>
                                <SkillCard 
                                    icon={zeplin}
                                    tool="Zeplin"
                                    type="Collaboration tool for design handoff"
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
                                <h4>Front-End (Web)</h4>
                                <SkillCard 
                                    icon={html}
                                    tool="HTML5"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={css}
                                    tool="CSS3"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={javascript}
                                    tool="Javascript"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard
                                    icon={react}
                                    tool="React.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={sass}
                                    tool="SASS"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <h4>Back-End (Web)</h4>
                                <SkillCard 
                                    icon={node}
                                    tool="Node.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={node}
                                    tool="Express.js"
                                    type="Design Software for image manipulation"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={mySQL}
                                    tool="mySQL"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    icon={oAuth}
                                    tool="OAuth"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <h4>Mobile</h4>
                                <SkillCard 
                                    icon={react}
                                    tool="React Native"
                                    type="Design Software for image manipulation"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    icon={swift}
                                    tool="Swift"
                                    type="Design Software for image manipulation"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    icon={arkit}
                                    tool="ARKit 3.5"
                                    type="Design Software for image manipulation"
                                    status="Upcoming"
                                />
                                <h4>Collaboration</h4>
                                <SkillCard 
                                    icon={git}
                                    tool="Git"
                                    type="Version control system for tracking changes in code"
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