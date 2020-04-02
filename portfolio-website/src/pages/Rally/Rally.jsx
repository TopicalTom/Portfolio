import React, {Component} from 'react';
import "../Project/Project.scss";
import "./Rally.scss";

import Figure from "../../components/Figure/Figure";
import Redirect from "../../components/Redirect/Redirect";

import github from "../../assets/icons/github.svg";

import hangoutlayer from "../../assets/layers/HangoutLayer.png";
import grabdrinkslayer from "../../assets/layers/GrabDrinksLayer.png";
import getfoodlayer from "../../assets/layers/GetFoodLayer.png";
import beactivelayer from "../../assets/layers/BeActiveLayer.png";
import explorelayer from "../../assets/layers/ExploreLayer.png";
import gooutlayer from "../../assets/layers/GoOutLayer.png";
import beproductivelayer from "../../assets/layers/BeProductiveLayer.png";

let layers = [
    hangoutlayer,
    grabdrinkslayer,
    getfoodlayer,
    beactivelayer,
    explorelayer,
    gooutlayer,
    beproductivelayer
]

let colors = [
    "hangout",
    "grabdrinks",
    "getfood",
    "beactive",
    "explore",
    "goout",
    "beproductive"
]

class Rally extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            layerPath: layers[0],
            colors: colors[0]
        };
    }

    componentDidMount() {

        for (let i=0; i < layers.length; i++) {

            setTimeout(() => {
                this.setState({ 
                    layerPath: layers[i],
                    colors: colors[i]
                })
            }, i*8000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
            <section className="rally">
                <div className="rally__container">
                    <img 
                        className="rally__layer"
                        src={this.state.layerPath} 
                    />
                </div>
                <div className={`rally__background rally__background-${this.state.colors}`}/>
            </section>
            <main className="project">
                <div className="project__container">
                    <div className="project__nav">
                        <aside>
                            <p 
                                className="project__process">
                                Process
                            </p>
                            <ul className="project__links">
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Problem Space
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Research
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Insights
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Ideation
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Design
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="project__link"
                                        href="">
                                        Next Steps
                                    </a>
                                </li>
                            </ul>
                        </aside>
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
                    </div>
                    <section className="project__content">
                        <article className="project__block">
                            <h1>Rally</h1>
                            <br></br>
                            <p>Rally is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>The Need to Connect</h2>
                            <br></br>
                            <p>After moving out of my residence hall from first year, I found it was harder to figure out what all my friends were up to at a moments notice as I wasn’t able to just head across the hall and ask them in person. I now had to message them through a variety of channels in order to figure out if there was anything going on that night. Throughout the years, and especially after graduating, this problem has only worsened as we have even less free time and become increasingly unaware of when we can meetup with our friends to do something fun. </p>
                            <br></br>
                            <p>Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask.</p>
                            <br></br>
                            <Figure />
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>Gaining Context</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>Research Insights</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h3>Refining our Audience</h3>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure/>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h3>Framing a Solution</h3>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>Ideation</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>Design Output</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <br></br>
                            <h2>What's Next</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                            <Figure />
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <br></br>
                        </article>
                        <article className="project__block">
                            <Redirect 
                                text="Have any Questions?"
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

export default Rally;







/*

import React from 'react';
import "../Project/Project.scss";
import "./Rally.scss";

import Figure from "../../components/Figure/Figure";
import github from "../../assets/icons/github.svg";
import layer from "../../assets/layers/HangoutLayer.png";
import Redirect from "../../components/Redirect/Redirect";


const Rally = () => {
    return (
        <>
        <section className="rally">
            <div className="rally__container">
                <img 
                    className="rally__layer"
                    src={layer} 
                />
            </div>
            <div className="rally__background">

            </div>
        </section>
        <main className="project">
            <div className="project__container">
                <div className="project__nav">
                    <aside>
                        <p 
                            className="project__process">
                            Process
                        </p>
                        <ul className="project__links">
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Problem Space
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Research
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Insights
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Ideation
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Design
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="project__link"
                                    href="">
                                    Next Steps
                                </a>
                            </li>
                        </ul>
                    </aside>
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
                </div>
                <section className="project__content">
                    <article className="project__block">
                        <h1>Rally</h1>
                        <br></br>
                        <p>Rally is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>The Need to Connect</h2>
                        <br></br>
                        <p>After moving out of my residence hall from first year, I found it was harder to figure out what all my friends were up to at a moments notice as I wasn’t able to just head across the hall and ask them in person. I now had to message them through a variety of channels in order to figure out if there was anything going on that night. Throughout the years, and especially after graduating, this problem has only worsened as we have even less free time and become increasingly unaware of when we can meetup with our friends to do something fun. </p>
                        <br></br>
                        <p>Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask.</p>
                        <br></br>
                        <Figure />
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>Gaining Context</h2>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>Research Insights</h2>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h3>Refining our Audience</h3>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure/>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h3>Framing a Solution</h3>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>Ideation</h2>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>Design Output</h2>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <br></br>
                        <h2>What's Next</h2>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                        <Figure />
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br></br>
                    </article>
                    <article className="project__block">
                        <Redirect 
                            text="Have any Questions?"
                            cta="Let's Chat"
                        />
                    </article>
                </section>
            </div>
        </main>
        </>
    );
};

export default Rally;

*/