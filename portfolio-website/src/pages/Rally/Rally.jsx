import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "../Project/Project.scss";

import Figure from "../../components/Figure/Figure";
import Hero from "../../components/Hero/Hero";
import Redirect from "../../components/Redirect/Redirect";
import prism from "../../assets/images/RallyPrism.png";
import sketch from "../../assets/images/Sketches.png";
import rally from "../../assets/videos/RallyPromo.mp4";
import bumble from "../../assets/videos/BumbleModes.mp4";
import Palette from "../../components/Palette/Palette";
import map from "../../assets/images/ExperienceMap.png";
import app from "../../assets/icons/RallyAppIcon.svg";
import iPhone from "../../assets/layers/iPhoneOverlay.svg";

import github from "../../assets/icons/github.svg";
import SideNav from '../../components/SideNav/SideNav';

class Rally extends Component {

    state = {
        links: [
            "Overview", 
            "Problem Space", 
            "Research",
            "Insights",
            "Ideation",
            "Design",
            "Next Steps" 
        ]      
    }

    componentDidMount() {
        scrollSpy.update();
    }
    
    render() {
        return (
            <>
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Rally"
                            links={this.state.links}
                        />
                        <a 
                            className="project__code"
                            href="https://github.com/TopicalTom/rally-capstone">
                            <p 
                                className="project__github">
                                Github
                            </p>
                            <img 
                                className="project__icon"
                                src={github}
                            />
                        </a>
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                                <h1 className="project__heading">Rally</h1>
                                <p className="project__paragraph">Rally is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                        </Element>
                        <Element
                            name="Problem Space" 
                            className="project__block">
                                <h2 className="project__title">The Need to Connect</h2>
                                <p className="project__paragraph">After moving out of my residence hall from first year, I found it was harder to figure out what all my friends were up to at a moments notice as I wasn’t able to just head across the hall and ask them in person. I now had to message them through a variety of channels in order to figure out if there was anything going on that night. Throughout the years, and especially after graduating, this problem has only worsened as we have even less free time and become increasingly unaware of when we can meetup with our friends to do something fun. </p>
                                <Figure />
                        </Element>
                        <Element
                            name="Research"
                            className="project__block">
                                <h2 className="project__title">Gaining Context</h2>
                                <p className="project__paragraph">Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask.</p>
                                <Figure />
                        </Element>
                        <Element
                            name="Insights"
                            className="project__block">
                                <h2 className="project__title">Research Insights</h2>
                                <p className="project__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h3 className="project__subtitle">Gathering Patterns</h3>
                                <p className="project__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Figure/>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Refining our Audience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Figure/>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Mapping the Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <img 
                                    className="project__image"
                                    src={map}
                                />
                        </Element>
                        <Element
                            name="Ideation"
                            className="project__block">
                                <h2>Ideation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <img 
                                    className="project__image"
                                    src={prism}
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Hooked Model</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Figure/>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Product Inspiration</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <div>
                                    <img className="project__video--overlay" src={iPhone}/>
                                    <video 
                                        className="project__video"
                                        src={bumble}
                                        autoPlay
                                        loop
                                    />
                                </div>
                        </Element>
                        <Element
                            name="Design"
                            className="project__block">
                                <h2 className="project__title">Design Output</h2>
                                <p className="project__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Sketches</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <img 
                                    className="project__image"
                                    src={sketch}
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Branding</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Palette />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Prototype</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <div>
                                    <img className="project__video--overlay" src={iPhone}/>
                                    <video 
                                        className="project__video"
                                        src={rally}
                                        autoPlay
                                        loop
                                    />
                                </div>
                        </Element>
                        <Element 
                            name="Next Steps"
                            className="project__block">
                                <h2>What's Next</h2>
                                <p>I am currently in the process of developing this app for iOS devices using React Native. While I am only in the early stages, I am planning to look into.</p>
                        </Element>
                        <Redirect 
                            link="/skills"
                            cta="View Skills"
                        />
                    </section>
                </div>
            </main>
            </>
        );

    }
};

export default Rally;