import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Hero from "../../components/Hero/Hero";
import Quotes from "../../components/Quotes/Quotes";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Palette from "../../components/Palette/Palette";
import SideNav from '../../components/SideNav/SideNav';
import Redirect from "../../components/Redirect/Redirect";
import Model from "../../components/Model/Model";
import Tech from "../../components/Tech/Tech";
import Definition from "../../components/Definition/Definition";

import quotesData from "../../data/quotesData";
import techData from "../../data/techData";
import personaData from "../../data/personaData";

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

class Rally extends Component {

    state = {
        links: [
            "Overview", 
            "Problem", 
            "Research",
            "Insights",
            "Ideation",
            "Constraints",
            "Design",
            "Next Steps" 
        ],
        quotes: quotesData.rally,
        tech: techData.rally,
        personas: personaData.rally
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
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                                <h1>Rally</h1>
                                <p>Rally is a React Native app that facilitates the process of organizing in-person hangouts by connecting friends that share social moods. Once connected, users are able to support one-another in organizing a hangout while Rally assists with ideation, by suggesting local places to go, and with logistics, by providing peer-to-peer location sharing.</p>
                                <img 
                                    className="project__image" 
                                    src={Layers}
                                    alt=""
                                />
                        </Element>
                        <Element
                            name="Problem" 
                            className="project__block">
                                <h2>Problem Space</h2>
                                <h3>The Impact of Social Distancing</h3>
                                <p>Amid a global pandemic, life has almost come to a standstill with people around the world "coming-together" through "separation" to ensure our healthcare systems stay within their operational capacities. In doing so, the usual bustling spots for social engagements have been hit hard and have had to adapt to stay alive.</p>
                                <p>While there won’t be an issue with people wanting to hangout in-person once restrictions are lifted, there is a need for local businesses that rely on social hangouts to receive constant sustained support early on to survive. Given the problem space, the question I asked is:</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">How Might We</h4>
                                <h3 className="project__question">Ensure local businesses that have persevered through these tough times have a chance to bounce back once social restrictions have lifted.</h3>
                        </Element>
                        <Element
                            name="Research"
                            className="project__block">
                                <h2>Research</h2>
                                <h3>Gaining Context</h3>
                                <p>While the objective is to help local businesses stay afloat, there is a level of reliance on people both wanting to hangout and being aware that a specific business exists. Due to this, there was a need to understand the process that people undergo when trying to make plans, how they find out where they want to go and any barriers they overcome along the way.</p>
                                <p>
                                    With this in-mind, my research focused on 
                                    <a className="project__external-link" href="https://techcrunch.com/2016/06/10/come-together/"> online articles </a> 
                                    that contextualized why we make plans and 6 exploratory interviews I conducted with participants outlining their experience making plans.</p>
                        </Element>
                        <Element
                            name="Insights"
                            className="project__block">
                                <h2>Insights</h2>
                                <h3>Uncovering the Problem</h3>
                                <p>After synthesizing the interview data, a very clear theme began to emerge. A common frustration people had when making plans was with friends not following through with the plans they organized. This was largely due to moods changing and people dropping out between the time a plan was suggested, and when it was going to occur, since coordinating general availability and interest for a particular plan took too long.</p>
                                <p>To overcome this, people would undergo a form of plan insurance to maximize the success of their plans. This could be seen in people asking specific friends that are known to be more spontaneous, have a proven track record for being down for a specific type of activity, or share their current interest, to build a strong foundation of an idea before bringing it to a larger group. The participant quotes that led to these insights can be seen below:</p>
                                <Quotes
                                    size={this.state.quotes.length}
                                    quotes={this.state.quotes}
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Refining Audience Types</h3>
                                <p>It also became apparent that people take on different roles when making plans which I have narrowed down to three types which are: the Social Convener, the Wingman and the Passive Participant. </p>
                                <PersonaCarousel 
                                    size={this.state.personas.length}
                                    persona={this.state.personas}
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Mapping the Experience</h3>
                                <p>For this particular problem I focused on the Social Convener as the target user as they are the one that ensures a plan comes to fruition and is the one that would feel the most dissuaded when a plan falls apart as they have the highest levels of engagement and are the ones tackling roadblocks.</p>
                                <p>The process of organizing plans for Social Conveners can be simplified as occurring in three stages which are: determining interest, group coordination, and plan execution with the main dip in experience occurring during that middle phase. Based on previous insights, issues arise in this phase when people don’t solidify a concrete plan earlier on and erroneously try and accommodate too many people at once leading to problems falling through.</p>
                                <img 
                                    className="project__image"
                                    src={map}
                                    alt=""
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">Key Takeaway</h4>
                                <h3 className="project__question">Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask which is the limiting factor.</h3>
                        </Element>
                        <Element
                            name="Ideation"
                            className="project__block">
                                <h2>Ideation</h2>
                                <h3>Making Intent Actionable</h3>
                                <p>A solution to this problem would be in removing the direct transaction of withheld information (i.e. interests and current availability) between friends. In removing this barrier, people could more effectively coordinate around their friends as they would be more informed on what their friends are thinking in the moment.</p>
                                <p>This can be likened to how a prism refracts light as a user would come to our product (prism) with the raw intent to make plans with friends and our product would take that raw intent and focus it into specific moods or interests (spectrum of light) that they could then connect over as depicted below:</p>
                                <img 
                                    className="project__image"
                                    src={prism}
                                    alt=""
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h3>Leveraging the Hook Model</h3>
                                <p>With the core value that our solution would provide figured out, the remaining questions were what form would this product take, how would it go about helping local businesses and how would we ensure people would continue using it to solve this problem.</p>
                                <p>
                                    To address these concerns, I utilized the
                                    <a className="project__external-link" href="https://www.nirandfar.com/how-to-manufacture-desire/"> Hook Model </a>  
                                    framework as a way to structure what our experience loop would need to emulate to ensure continual use and to serve as a springboard for what I would need to look for product inspiration.</p>
                                <Model />
                        </Element>
                        <Element
                            className="project__block">
                                <h3>Product Inspiration</h3>
                                <p>Taking the Hook Model I outlined, I started looking into other products that fit each section and solved similar needs to the one I was creating to leverage UI patterns when shaping our experience.</p>
                                <p>I took strong inspiration from dating apps like Tinder and Bumble for their use in connecting people over a shared interest and apps like Local, Shop and Airbnb for their ability to connect users to places in their area that might be of interest.</p>
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
                            name="Constraints"
                            className="project__block">
                                <h2>Constraints</h2>
                                <h3>{`User & Development Barriers`}</h3>
                                <p>With social networking apps there is a need for a low-barrier entry to ensure friend groups are not left fragmented based on cost or mobile device they own. There is also the question of how we would be able to get the data to validate that this product is actually helping people make plans and helping local businesses and if what I am designing is feasible from a development standpoint.</p>
                                <h3>Tech Stack</h3>
                                <p>
                                    To alleviate these concerns, I did some additional research on the technology that would be needed to bring this solution to life. To overcome the barrier-to-entry issue, the app could be developed in
                                    <a className="project__external-link" href="https://reactnative.dev/"> React Native</a>
                                    , rather than pure native solutions, as it would allow for simultaneous iOS and Android Development and even allow for a web platform to be made for a business facing component.
                                </p>
                                <p>
                                    In order to support similar features outlined in the product inspiration phase, I could leverage
                                    <a className="project__external-link" href="https://www.mapbox.com/"> Mapbox </a> 
                                    and
                                    <a className="project__external-link" href="https://foursquare.com/"> FourSquare </a> 
                                    for location and places data. The benefit of these services is that it would allow me to use location to determine if and where people are meeting up, to validate if plans are coming to fruition and if businesses are receiving additional traffic due to the app.
                                </p>
                                <Tech 
                                    tech={this.state.tech}
                                />
                        </Element>
                        <Element
                            name="Design"
                            className="project__block">
                                <h2 className="project__title">Design</h2>
                                <h3>Sketching a Solution</h3>
                                <p>Using similar UI elements and platform conventions from apps in this space, I sketched the following screens. It is worth mentioning that these drawings are of an earlier version before I conducted usability tests so only some elements made it to the latest version depicted below.</p>
                                <img 
                                    className="project__image"
                                    src={sketch}
                                    alt=""
                                />
                                <h3>Evoking a Feeling</h3>
                                <p>Rally, the name I landed on, communicates a lot about what the brand is trying to accomplish. It can be defined as:</p>
                                <Definition />
                                <p>This works on two levels due to people coming together over a common interest and how this all contributes to helping local businesses in light of recent events. The design of the wordmark aims to build on this by utilizing curving lines to showcase the ebb and flow of ideas as a plan starts to materialize and compromises are made.</p>
                                <svg className="project__wordmark" viewBox="0 0 197 109">
                                     <path d="M167.393123,22.2037037 L167.393123,57.5277778 C167.393123,59.4786725 167.461529,61.0601852 169.434977,61.0601852 C171.344765,61.0601852 171.470435,59.5790599 171.476555,57.7153802 L171.476831,22.2037037 L196.97212,22.2037037 C196.990626,22.5377992 197,22.8742989 197,23.212963 L197,74.1805556 C197,89.230315 190.487332,109 164.840807,109 C159.153393,109 153.723078,108.082944 149.016442,106.296903 L149.016442,85.51 C152.301983,87.4478328 155.612719,88.5 161.246636,88.5 C170.880553,88.5 173.486769,85.0535157 173.585974,85.1907196 C175.127533,87.3227402 175.997988,88.6797513 176.054056,88.756604 C176.199196,88.9555472 176.399706,89.1120526 176.656807,89.2228626 C176.913908,89.3336725 177.211639,89.3818396 177.549999,89.3673638 C178.226721,89.3384122 178.882919,89.0939669 179.520948,88.6323243 C180.156623,88.1723852 180.595198,87.6247132 180.831966,86.9927152 L185.511408,74.3599559 C185.645667,74.0657163 185.686789,73.7818723 185.640533,73.5113831 C185.595496,73.2376361 185.484711,73.0019626 185.310618,72.7978472 C185.136525,72.5937317 184.908196,72.4336082 184.622141,72.3176259 C184.337221,72.2031979 184.025623,72.1508157 183.687263,72.1652915 L170.394477,72.6810944 C169.707464,72.7008697 169.046731,72.9390981 168.408701,73.4007407 C167.770672,73.8623833 167.338987,74.4145688 167.108936,75.0607042 C166.990553,75.3767032 166.942281,75.6704696 166.965253,75.9435577 C166.988226,76.2166458 167.07346,76.4518097 167.218599,76.6507528 C167.282585,76.7384577 168.979136,79.0629667 170.868807,81.6520719 C164.893123,86.2451929 144,86.7963805 141.869954,65.6018519 L141.869954,23.212963 C141.869954,22.8742989 141.879328,22.5377992 141.897834,22.2037037 L167.393123,22.2037037 Z M109.736672,0 L109.736672,65.349537 C109.736672,72.3281735 113.030848,80.0600957 118.165854,84.0807893 C114.278689,86.4536453 110.3533,86.2916667 107.950051,86.2916667 C92.1132371,86.2916667 85.7448933,74.9498062 85.7448933,62.8263889 L85.7448933,0 L109.736672,0 Z M137.801779,0 L137.801779,65.349537 C137.801779,72.3281735 141.095955,80.0600957 146.230961,84.0807893 C142.343795,86.4536453 138.418407,86.2916667 136.015157,86.2916667 C120.178344,86.2916667 113.81,74.9498062 113.81,62.8263889 L113.81,0 L137.801779,0 Z M48.4940219,22.2252022 C50.8897341,22.2731185 53.5215594,22.4394865 56.266632,23.0138592 C67.3308587,24.8868608 81.6741421,32.0926494 81.6741421,47.1852078 L81.6741421,65.349537 C81.6741421,72.3281735 84.9683179,80.0600957 90.1033236,84.0807893 C86.2161582,86.4536453 82.2907698,86.2916667 79.8875202,86.2916667 C70.7686151,86.2916667 64.7889865,82.5312663 61.356795,77.0265145 C57.8453515,81.1490792 52.5858135,83.7685185 46.7074,83.7685185 C36.1353571,83.7685185 27.0675155,75.2961292 27.0675155,64.8449074 C27.0675155,54.3936856 35.6378496,45.9212963 46.2098925,45.9212963 C55.1839823,45.9212963 60.8132463,50.544521 63.8325659,56.3078057 L63.93,56.4959474 L63.93,56.4959474 C63.9926333,56.471403 64.0553522,56.4484235 64.1179437,56.4267017 C65.1519396,56.0678642 66.1511718,56.0522821 66.1555368,54.9954545 C66.1605522,53.7811769 64.8469488,51.3534359 63.7394724,49.8257976 C61.12442,46.2186287 55.6545026,42.68 48.4940219,42.1 L48.4940219,22.2252022 Z M22.9813158,22.2037037 L22.9813158,30.2073604 C30.2777608,23.2856669 38.6564487,22.3504942 44.9207781,22.2252022 L44.9207794,42.0511123 C32.6784663,42.8461479 23,52.8168587 23,65 C23,72.4205903 26.5905823,79.0203982 32.1641054,83.2259876 L32.4209607,83.07153 C28.5337954,85.4443861 24.6084069,86.2916667 22.2051574,86.2916667 C6.36834387,86.2916667 -1.49213975e-13,74.9498062 -1.49213975e-13,62.8263889 L-1.49213975e-13,22.2037037 L22.9813158,22.2037037 Z"></path>
                                </svg>
                                <h3>Communicating with Color</h3>
                                <p>Letting friends know what you are interested in is a core part of the app so I wanted to make sure the action was a bold one. To do this the baseline app colors are largely neutral to make sure the accent colors, that represent each “social mood”, would stand out.</p>
                                <p>This is also important for communicating system status (usability heuristics), as the color would become the primary color of the app so that users would know which mode they were in at quick glance and from any section of the app experience.</p>
                                <Palette />
                                <h3>Bringing it all together</h3>
                                <p>With this rough user flow, I tried to strike a balance when users set their rally so the experience feels “Focused” rather than “Forced”. What this means is when a user selects the rally, “Go Out” they are still able to connect and see friends that don’t share their rally as well as being able to view other places that are outside their current social mood.</p>
                                <p>This aims to emulate the ebb and flow of plans and how people are able to change their mind and pivot to other plans if that is where there is a greater interest within their social circle.</p>
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
                        </Element>
                        <Element 
                            name="Next Steps"
                            className="project__block">
                                <h2>What's Next</h2>
                                <p>With the infrastructure for connecting friends over shared social moods established, my focus is now determining how Rally can connect users to places they might be interested in.</p>
                                <p>Before diving deeper into designing this next stage, I plan to conduct another six interviews to explore the space of the second Persona, the Wingman. I'm interested in learning more about the barriers behind people finding and trying out new places outside of their usual spots, which would bring this experience back to the app's primary objective.</p>
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