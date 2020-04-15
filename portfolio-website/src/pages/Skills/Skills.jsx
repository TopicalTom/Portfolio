import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Skills.scss";

import UX from "../../assets/images/UXCertificate.png";
import PM from "../../assets/images/ProductManagementCertificate.png";
import iOS from "../../assets/images/iOSDevCertificate.png";

import chevron from "../../assets/icons/chevron.svg";
import skillsData from "../../data/skillsData.jsx";

import Nav from "../../components/Nav/Nav";
import Redirect from "../../components/Redirect/Redirect";
import Filter from "../../components/Filter/Filter";
import SkillBlock from "../../components/SkillBlock/SkillBlock";

class Skills extends Component {

    state = {
        allSkills: skillsData,
        filterBy: "",
        filter: false            
    }

    render() {

        console.log(this.state.allSkills)
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
                                    smooth={true}
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
                                    smooth={true}
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
                            className="skills__overview">
                                <h1>My Skillset</h1>
                                <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current progress. In the pursuit of that goal I have acquired the following certificates and skills:</p>
                                <CarouselProvider
                                    naturalSlideWidth={730}
                                    //naturalSlideHeight={280}
                                    totalSlides={2}
                                >
                                    <div className="skills__buttons">
                                        <ButtonNext className="skills__btn">
                                            <img 
                                                className="skills__icon--flip" 
                                                src={chevron}
                                            />
                                        </ButtonNext>
                                        <ButtonBack className="skills__btn">
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
                        </Element>
                        <SkillBlock allSkills={this.state.allSkills}/>
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

import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Skills.scss";

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
import mapbox from "../../assets/tools/Mapbox.svg";
import foursquare from "../../assets/tools/FourSquare.svg";
import postman from "../../assets/tools/Postman.svg";

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
                                <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current progress. In the pursuit of that goal I have acquired the following certificates and skills:</p>
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
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <h4>Research</h4>
                                <SkillCard 
                                    icon={otterAi}
                                    tool="Otter.ai"
                                    description="Ai-powered speech to text transcription"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={optimalsort}
                                    tool="Optimal Sort"
                                    description="Card-based information architecture categorization"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={analytics}
                                    tool="Google Analytics"
                                    description="Web analytics service for measuring website traffic and ROI"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={hotjar}
                                    tool="HotJar"
                                    description="Behavior analytics and user feedback service for websites"
                                    status="Upcoming"
                                />
                                <h4>Workflow</h4>
                                <SkillCard 
                                    icon={slack}
                                    tool="Slack"
                                    description="Instant messaging platform for team collaboration"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={jira}
                                    tool="Jira"
                                    description="Ticket-based issue tracking for agile project management"
                                    status="Learned"
                                />
                                <h4>Marketing</h4>
                                <SkillCard 
                                    icon={mailchimp}
                                    tool="Mailchimp"
                                    description="Email-campaign focused marketing platform for CMS needs"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={searchconsole}
                                    tool="Search Console"
                                    description="Web service for website search engine optimization (SEO)"
                                    status="Learned"
                                />
                                <br></br>
                                <br></br>
                        </Element>
                        <Element
                            name="Design"
                            className="skills__block">
                                <h2>Design</h2>
                                <p>These tools are used for whenever I am doing design work. I am going to talk about the tools I use and how it adheres to a framework.</p>
                                <h4>Deliverables</h4>
                                <SkillCard 
                                    icon={sketch}
                                    tool="Sketch"
                                    description="Vector graphics editor for web and mobile wireframes"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={photoshop}
                                    tool="Photoshop"
                                    description="Raster graphics editor for photo editing and enhancement"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={illustrator}
                                    tool="Illustrator"
                                    description="Vector graphics editor for print and digital media"
                                    status="Upcoming"
                                />
                                <h4>Prototyping</h4>
                                <SkillCard 
                                    icon={inVision}
                                    tool="inVision"
                                    description="Prototyping Software for simple user flows"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={principle}
                                    tool="Principle"
                                    description="Prototyping Software for motion based interactions"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={framer}
                                    tool="Framer X"
                                    description="Prototyping software for complex data-driven interactions"
                                    status="In-Progress"
                                />
                                <h4>Handoff</h4>
                                <SkillCard 
                                    icon={zeplin}
                                    tool="Zeplin"
                                    description="Collaboration tool for design handoff"
                                    status="Learned"
                                />
                                <br></br>
                                <br></br>
                        </Element>
                        <Element
                            name="Development"
                            className="skills__block">
                                <h2>Development</h2>
                                <p>My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.</p>
                                <h4>Front-End (Web)</h4>
                                <SkillCard 
                                    icon={html}
                                    tool="HTML5"
                                    description="Markup language for displaying web browser documents"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={css}
                                    tool="CSS3"
                                    description="Style sheet language for presenting web browser documents"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={sass}
                                    tool="SASS"
                                    description="CSS extension for implementing nested naming conventions (BEM)"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={javascript}
                                    tool="JavaScript"
                                    description="Scripting language for creating dynamic web browser documents"
                                    status="Learned"
                                />
                                <SkillCard
                                    icon={react}
                                    tool="React.js"
                                    description="JavaScript library for building reusable UI components"
                                    status="Learned"
                                />
                                <h4>Back-End (Web)</h4>
                                <SkillCard 
                                    icon={node}
                                    tool="Node.js"
                                    description="Platform for executing JavaScript code server-side"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={node}
                                    tool="Express.js"
                                    description="Node framework for handling http requests, responses and routes"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={postman}
                                    tool="Postman"
                                    description="HTTP client for testing RESTful API functionality"
                                    status="Learned"
                                />
                                <SkillCard 
                                    icon={mySQL}
                                    tool="mySQL"
                                    description="Relational database management system"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    icon={oAuth}
                                    tool="OAuth"
                                    description="Authorization framework for authenticated access to assets"
                                    status="Upcoming"
                                />
                                <h4>Mobile</h4>
                                <SkillCard 
                                    icon={react}
                                    tool="React Native"
                                    description="JavaScript library for building native mobile applications"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    icon={swift}
                                    tool="Swift"
                                    description="Programming language used to develop iOS specific applications"
                                    status="In-Progress"
                                />
                                <h4>API/SDK</h4>
                                <SkillCard 
                                    icon={mapbox}
                                    tool="Mapbox"
                                    description="Map-based location data platform for mobile and web applications"
                                    status="In-Progress"
                                />
                                <SkillCard 
                                    icon={foursquare}
                                    tool="FourSquare"
                                    description="Venue and user content database for mobile and web applications"
                                    status="Upcoming"
                                />
                                <SkillCard 
                                    icon={arkit}
                                    tool="ARKit 3.5"
                                    description="Augmented reality (AR) development platform for iOS devices"
                                    status="Upcoming"
                                />
                                <h4>Collaboration</h4>
                                <SkillCard 
                                    icon={git}
                                    tool="Git"
                                    description="Version control system for tracking changes in code"
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

*/