import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "../Project/Project.scss";

import Hero from "../../components/Hero/Hero";
import Quotes from "../../components/Quotes/Quotes";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Palette from "../../components/Palette/Palette";
import SideNav from '../../components/SideNav/SideNav';
import Redirect from "../../components/Redirect/Redirect";
import Model from "../../components/Model/Model";

import quotesData from "../../data/quotesData";

import prism from "../../assets/images/RallyPrism.png";
import sketch from "../../assets/images/Sketches.png";
import map from "../../assets/images/ExperienceMap.png";
import Preview from "../../components/ProjectPreview/ProjectPreview";
import Layers from "../../assets/layers/HangoutLayer.png";
import bumblePush from "../../assets/videos/BumblePush.mp4";
import bumbleModes from "../../assets/videos/BumbleModes.mp4";
import local from "../../assets/videos/LocalEvents.mp4";
import airbnb from "../../assets/videos/AirbnbLists.mp4";
import rally from "../../assets/videos/RallyPromo.mp4";
import shop from "../../assets/videos/ShopLocal.mp4";
import modes from "../../assets/videos/RallyModes.mp4";
import connect from "../../assets/videos/RallyConnect.mp4";
import github from "../../assets/icons/github.svg";

import rallyLogo from "../../assets/icons/Rally.svg";

class Rally extends Component {

    state = {
        links: [
            "Overview", 
            "Problem Space", 
            "Research",
            "Insights",
            "Ideation",
            "Design",
            "Validation",
            "Next Steps" 
        ],
        quotes: quotesData
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
                                <h1>Rally</h1>
                                <p>Rally is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                                <img className="project__image" src={Layers}/>
                        </Element>
                        <Element
                            name="Problem Space" 
                            className="project__block">
                                <h2>The Need to Connect</h2>
                                <p>Amid a global pandemic, life has almost come to a standstill with people around the world "coming-together" through "separation" to ensure our healthcare systems stay within their operational capacities. In doing so, the usual bustling spots for social engagements have been hit hard and have had to adapt to stay alive. Given the problem space, the question I asked is:</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">How Might We</h4>
                                <h3 className="project__question">Ensure local businesses that have persevered through these tough times have a chance to bounce back once social restrictions have lifted.</h3>
                        </Element>
                        <Element
                            name="Research"
                            className="project__block">
                                <h2>Gaining Context</h2>
                                <p>Research for how to solve this problem and how it affects people was focused on two areas. These areas were Online Research through Articles and Technology sites and User Research through in-person interviews. I outline these aspects in further detail below with regards to my objectives and how they relate back to the problem at hand:</p>
                        </Element>
                        <Element
                            name="Insights"
                            className="project__block">
                                <h2>Insights</h2>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Gathering Patterns</h3>
                                <p>Participants would conduct a form of plan insurance to maximize the success that what they were going to do would succeed. This could be seen in participants individually building a foundation of people they could fall-back on or by reaching out to groups for “specific moods” with a proven track record of following through with a plan. Reasons for why they themselves would not follow through with plans were because they were no longer in the mood, it was too difficult to coordinate, or people started dropping out. Participants noted that as the number of people involved increases, so does the difficulty of planning a hangout that works for everyone. Whereas, when these plans are made with one or two people, coordination wasn’t an issue at all. Participants stated that a part of this problem comes people being indecisive, non-responsive or tools generally lacking.</p>
                                <Quotes
                                    quotes={this.state.quotes}
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Refining our Audience</h3>
                                <p>Throughout the interviews it became apparent that there are a few types of roles that participants might take when they are either organizing plans themselves or engaging in a plan that another friend is organizing. It appears that there are two primary roles which I call the Social Convener and  Engaged Planner. Using participants descriptions of how they engage in the planning process I was able to construct a few user personas for future reference as the product was being designed to ensure each role and their respective needs would be accounted for:</p>
                                <PersonaCarousel />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Mapping the Experience</h3>
                                <p>The current process for making plans can be described as occurring in three stages: Determine Interest, Group Coordination, and Plan Execution. The area of opportunity, or area where the experience dips, is roughly around the group coordination stage and is mostly due to the difficulty of coordinating details with a large group. The full experience map of this process can be viewed below that highlights key moments and areas of opportunity within this space:</p>
                                <img 
                                    className="project__image"
                                    src={map}
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">Insight Statement</h4>
                                <h3 className="project__question">People are willing to put in the time and effort to coordinate plans but are frustrated when their friends don't follow through. People want a way to guarantee their friends will follow through with the plans they are making.</h3>
                        </Element>
                        <Element
                            name="Ideation"
                            className="project__block">
                                <h2>Ideation</h2>
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Value Proposition</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <img 
                                    className="project__image"
                                    src={prism}
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Hook Model</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Model />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Product Inspiration</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Preview 
                                    video={bumblePush}
                                    caption="Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
                                    type="Trigger"
                                />
                                <Preview 
                                    video={bumbleModes}
                                    caption="Bumble uses swipeable cards to enable users to switch modes and focus in on how to connect with others."
                                    type="Action"
                                />
                                <Preview 
                                    video={local}
                                    caption="Local (Facebook Events) enables users to see friends who expressed interest in events to help form groups."
                                    type="Reward"
                                />
                                <Preview 
                                    video={shop}
                                    caption="Shop (previously Arrive) uses location to show local stores near a user that they should checkout and support."
                                    type="Reward"
                                />
                                <Preview 
                                    video={airbnb}
                                    caption="Airbnb uses lists to enable users to save experiences and places they are interested in for use in sharing with friends."
                                    type="Investment"
                                />
                        </Element>
                        <Element
                            name="Design"
                            className="project__block">
                                <h2 className="project__title">Design</h2>
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
                                <svg className="project__wordmark" viewBox="0 0 197 109">
                                     <path d="M167.393123,22.2037037 L167.393123,57.5277778 C167.393123,59.4786725 167.461529,61.0601852 169.434977,61.0601852 C171.344765,61.0601852 171.470435,59.5790599 171.476555,57.7153802 L171.476831,22.2037037 L196.97212,22.2037037 C196.990626,22.5377992 197,22.8742989 197,23.212963 L197,74.1805556 C197,89.230315 190.487332,109 164.840807,109 C159.153393,109 153.723078,108.082944 149.016442,106.296903 L149.016442,85.51 C152.301983,87.4478328 155.612719,88.5 161.246636,88.5 C170.880553,88.5 173.486769,85.0535157 173.585974,85.1907196 C175.127533,87.3227402 175.997988,88.6797513 176.054056,88.756604 C176.199196,88.9555472 176.399706,89.1120526 176.656807,89.2228626 C176.913908,89.3336725 177.211639,89.3818396 177.549999,89.3673638 C178.226721,89.3384122 178.882919,89.0939669 179.520948,88.6323243 C180.156623,88.1723852 180.595198,87.6247132 180.831966,86.9927152 L185.511408,74.3599559 C185.645667,74.0657163 185.686789,73.7818723 185.640533,73.5113831 C185.595496,73.2376361 185.484711,73.0019626 185.310618,72.7978472 C185.136525,72.5937317 184.908196,72.4336082 184.622141,72.3176259 C184.337221,72.2031979 184.025623,72.1508157 183.687263,72.1652915 L170.394477,72.6810944 C169.707464,72.7008697 169.046731,72.9390981 168.408701,73.4007407 C167.770672,73.8623833 167.338987,74.4145688 167.108936,75.0607042 C166.990553,75.3767032 166.942281,75.6704696 166.965253,75.9435577 C166.988226,76.2166458 167.07346,76.4518097 167.218599,76.6507528 C167.282585,76.7384577 168.979136,79.0629667 170.868807,81.6520719 C164.893123,86.2451929 144,86.7963805 141.869954,65.6018519 L141.869954,23.212963 C141.869954,22.8742989 141.879328,22.5377992 141.897834,22.2037037 L167.393123,22.2037037 Z M109.736672,0 L109.736672,65.349537 C109.736672,72.3281735 113.030848,80.0600957 118.165854,84.0807893 C114.278689,86.4536453 110.3533,86.2916667 107.950051,86.2916667 C92.1132371,86.2916667 85.7448933,74.9498062 85.7448933,62.8263889 L85.7448933,0 L109.736672,0 Z M137.801779,0 L137.801779,65.349537 C137.801779,72.3281735 141.095955,80.0600957 146.230961,84.0807893 C142.343795,86.4536453 138.418407,86.2916667 136.015157,86.2916667 C120.178344,86.2916667 113.81,74.9498062 113.81,62.8263889 L113.81,0 L137.801779,0 Z M48.4940219,22.2252022 C50.8897341,22.2731185 53.5215594,22.4394865 56.266632,23.0138592 C67.3308587,24.8868608 81.6741421,32.0926494 81.6741421,47.1852078 L81.6741421,65.349537 C81.6741421,72.3281735 84.9683179,80.0600957 90.1033236,84.0807893 C86.2161582,86.4536453 82.2907698,86.2916667 79.8875202,86.2916667 C70.7686151,86.2916667 64.7889865,82.5312663 61.356795,77.0265145 C57.8453515,81.1490792 52.5858135,83.7685185 46.7074,83.7685185 C36.1353571,83.7685185 27.0675155,75.2961292 27.0675155,64.8449074 C27.0675155,54.3936856 35.6378496,45.9212963 46.2098925,45.9212963 C55.1839823,45.9212963 60.8132463,50.544521 63.8325659,56.3078057 L63.93,56.4959474 L63.93,56.4959474 C63.9926333,56.471403 64.0553522,56.4484235 64.1179437,56.4267017 C65.1519396,56.0678642 66.1511718,56.0522821 66.1555368,54.9954545 C66.1605522,53.7811769 64.8469488,51.3534359 63.7394724,49.8257976 C61.12442,46.2186287 55.6545026,42.68 48.4940219,42.1 L48.4940219,22.2252022 Z M22.9813158,22.2037037 L22.9813158,30.2073604 C30.2777608,23.2856669 38.6564487,22.3504942 44.9207781,22.2252022 L44.9207794,42.0511123 C32.6784663,42.8461479 23,52.8168587 23,65 C23,72.4205903 26.5905823,79.0203982 32.1641054,83.2259876 L32.4209607,83.07153 C28.5337954,85.4443861 24.6084069,86.2916667 22.2051574,86.2916667 C6.36834387,86.2916667 -1.49213975e-13,74.9498062 -1.49213975e-13,62.8263889 L-1.49213975e-13,22.2037037 L22.9813158,22.2037037 Z"></path>
                                </svg>
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Color Palette</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Palette />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Prototype</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <Preview 
                                    video={rally}
                                    caption="Rally uses push notifications to enable users to know when their friends are currently rallying to encourage app use."
                                    type="Trigger"
                                />
                                <Preview 
                                    video={modes}
                                    caption="Rally uses swipeable cards to enable users to broadcast their interests in an actionable way for use in making plans."
                                    type="Action"
                                />
                                <Preview 
                                    video={connect}
                                    caption="Rally filters a user's friends by current shared interests to assist users in forming groups for specific moods."
                                    type="Reward"
                                />
                                <Preview 
                                    video={rally}
                                    caption="Rally allows users to selectively broadcast their location to close friends to help coordinate the logistics of hangouts."
                                    type="Reward"
                                />
                                <Preview 
                                    video={rally}
                                    caption="Rally filters places based on the current rally which can be saved in lists for use in ideating hangout plans."
                                    type="Investment"
                                />
                        </Element>
                        <Element 
                            name="Validation"
                            className="project__block">
                                <h2>Success Metrics</h2>
                                <p>I am currently in the process of developing this app for iOS devices using React Native. While I am only in the early stages, I am planning to look into.</p>
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