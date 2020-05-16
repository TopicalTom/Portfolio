import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "../Project/Project.scss";

import Hero from "../../components/Hero/Hero";
import Redirect from "../../components/Redirect/Redirect";
import prism from "../../assets/images/RallyPrism.png";
import sketch from "../../assets/images/Sketches.png";
import Palette from "../../components/Palette/Palette";
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
                            name="HMW" 
                            className="project__block">
                                <h4>How Might We</h4>
                                <h3 className="project__hmw">Ensure local businesses that have persevered through these tough times have a chance to bounce back once social restrictions have lifted.</h3>
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
                                <h2>Research Insights</h2>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Gathering Patterns</h3>
                                <p>Participants would conduct a form of plan insurance to maximize the success that what they were going to do would succeed. This could be seen in participants individually building a foundation of people they could fall-back on or by reaching out to groups for “specific moods” with a proven track record of following through with a plan. Reasons for why they themselves would not follow through with plans were because they were no longer in the mood, it was too difficult to coordinate, or people started dropping out. Participants noted that as the number of people involved increases, so does the difficulty of planning a hangout that works for everyone. Whereas, when these plans are made with one or two people, coordination wasn’t an issue at all. Participants stated that a part of this problem comes people being indecisive, non-responsive or tools generally lacking.</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Refining our Audience</h3>
                                <p>Throughout the interviews it became apparent that there are a few types of roles that participants might take when they are either organizing plans themselves or engaging in a plan that another friend is organizing. It appears that there are two primary roles which I call the Social Convener and  Engaged Planner. Using participants descriptions of how they engage in the planning process I was able to construct a few user personas for future reference as the product was being designed to ensure each role and their respective needs would be accounted for:</p>
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
                            name="Ideation"
                            className="project__block">
                                <h2>Ideation</h2>
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Core Value</h3>
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
                                <h2 className="project__title">Design Output</h2>
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