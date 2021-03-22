import React, {Component} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../Project/Project.scss";

// Components
import Hero from "../../components/Hero/Hero";
import Quotes from "../../components/Quotes/Quotes";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Prototype from '../../components/Prototype/Prototype';
import Palette from "../../components/Palette/Palette";
import SideNav from '../../components/SideNav/SideNav';
import Redirect from "../../components/Redirect/Redirect";
import Model from "../../components/Model/Model";
import VideoCarousel from "../../components/VideoCarousel/VideoCarousel";
import Skip from "../../components/Skip/Skip";
import Takeaway from "../../components/Takeaway/Takeaway";
import Step from "../../components/Step/Step";
import Stats from "../../components/Stats/Stats";
import Tag from "../../components/Tag/Tag";
import Preview from "../../components/ProjectPreview/ProjectPreview";
import DynamicCards from '../../components/DynamicCards/DynamicCards';

// Data
import projectsData from "../../data/projectsData";

class Rally extends Component {

    state = {
        links: [
            "Overview", 
            "Problem", 
            "Define",
            "Research",
            "Ideation",
            "Design (v1)",
            "Pivot",
            "Constraints",
            "Design (v2)",
            "Next Steps" 
        ],
        color: projectsData[0].color,
        palette: projectsData[0].palette,
        stats: projectsData[0].stats,
        quotes: projectsData[0].quotes,
        personas: projectsData[0].personas,
        assets: projectsData[0].assets,
        inspiration: projectsData[0].inspiration,
        tech: projectsData[0].tech,
        versions: projectsData[0].versions,
        prototype: projectsData[0].prototype,
        preview: projectsData[0].preview,
        videos: projectsData[0].videos,

    }

    handleScroll = (e) => {
        scroller.scrollTo(e.target.value, {
            duration: 500,
            delay: 100,
            offset: -120,
            smooth: true
        });
    }
    
    render() {

        const {preview, links, stats, quotes, personas, tech, color, inspiration, assets, prototype, palette, videos, versions} = this.state
        const {sketch, prism, map} = assets

        return (
            <>
            <Hero 
                project="rally"
                preview={preview}
                type="app"
            />
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Rally"
                            links={links}
                            type="app"
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <h1>Rally</h1>
                                <Tag 
                                    type="Mobile App"
                                    role="Independent"
                                    duration="Ongoing"
                                    color={color}
                                />
                                <p>Rally is a React Native app that facilitates the process of organizing in-person hangouts by connecting friends that share social moods.</p>
                                <p>Once connected, users are able to support one-another in organizing hangouts while Rally assists with ideation, by suggesting local places to go, and with logistics, by providing peer-to-peer location sharing.</p>
                                <Skip 
                                    links={links}
                                    handleScroll={this.handleScroll}
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <Prototype 
                                    video={preview}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Problem" 
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Problem"
                                    color={color}
                                />
                                <h2>The Impact of Social Distancing</h2>
                                <p>Amid a global pandemic, life has almost come to a standstill with people around the world "coming-together" through "separation" to ensure our healthcare systems stay within their operational capacities. In doing so, the usual bustling spots for social engagements have been hit hard and have had to adapt to stay alive.</p>
                                <p>While there won’t be an issue with people wanting to hangout in-person once restrictions are lifted, reconnecting with old friends could prove challenging for some after a long period of separation. Furthermore, their usual social spots might not have survived and even so, there is a need to branch out to support other social businesses in the road to recovery.</p>
                                <Takeaway 
                                    type="OBSERVATION"
                                    details="There is a need to reacquaint people to their old social ways when the time comes in order to help friend groups and local social businesses recover."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Define"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Define"
                                    color={color}
                                />
                                <h2>A Problem Worth Solving?</h2>
                                <p>While some friend groups have adapted to the times by finding ways to stay remotely connected through online games, zoom-sessions or a variety of other products, others have struggled. One study on the psychological effects of the coronavirus pandemic on young adults (18 - 35) found the following results.</p>
                                <Stats 
                                    stats={stats}
                                />
                                <p>Even with the rates of vaccinations increasing across the world and the prospect of being social again being on the horizon, some people might struggle to overcome these feelings of disconnect, and in some cases, physical displacement. Based on this, there appears to be a real need to reacclimate young adults back into their social circles, and mindset, before our local social businesses can truly recover.</p>
                                <Takeaway 
                                    type="HOW MIGHT WE"
                                    details="Assist young adults in becoming reacquantited with friends once social restrictions have lifted."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Research"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Research"
                                    color={color}
                                />
                                <h2>The Planning Process</h2>
                                <p>Looking further, I conducted 6 exploratory interview with young adults between the ages of 23 - 25 in order to understand how they go about connecting with friends and making plans. Some of the noteworthy remarks from those interviews are as follows:</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <Quotes
                                    size={quotes.length}
                                    quotes={quotes}
                                    color={color}
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <p>A common frustration people had was with friends not following through with the plans they organized. This was largely due to moods changing and people dropping out between the time a plan was suggested, and when it was going to occur, since coordinating general availability and interest for a particular plan took too long.</p>
                                <p>To overcome this, people would ask specific friends that are known to be more spontaneous, have a proven track record for being down for a specific type of activity, or share their current interest, to build a strong foundation of an idea before bringing it to a larger group.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Social Roles</h2>
                                <p>It also became apparent that people take on different roles when making plans which I have narrowed down to three types which are:</p>
                                <PersonaCarousel 
                                    personas={personas}
                                    color={color}
                                />
                                <p>For this particular problem I focused on the Social Architect as the primary (target) user as they are the one that ensures a plan comes to fruition and is the one that would feel the most dissuaded when a plan falls apart as they have the highest level of engagement and are the ones tackling roadblocks.</p>
                                <p>The process of organizing plans for Social Architect can be simplified as occurring in three stages which are: determining interest, group coordination, and plan execution with the main dip in experience occurring during that middle phase. Based on interview insights, issues arise in this phase when people don’t solidify a concrete plan earlier on and attempt to accommodate too many people at once leading to plans falling through.</p>
                                <img 
                                    className="project__image"
                                    src={map}
                                    alt=""
                                />
                                <Takeaway 
                                    type="KEY TAKEAWAY"
                                    details="Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask which is the limiting factor."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Ideation"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Ideation"
                                    color={color}
                                />
                                <h2>Focusing Intent</h2>
                                <p>A solution to this problem would be in removing the direct transaction of withheld information (i.e. interests and current availability) between friends. In removing this barrier, people could more effectively coordinate around their friends as they would be more informed on what their friends are thinking in the moment.</p>
                                <p>This can be likened to how a prism refracts light as a user would come to our product (prism) with the raw intent to make plans with friends and our product would take that raw intent and focus it into specific moods or interests (spectrum of light) that they could then connect over as depicted below:</p>
                                <img 
                                    className="project__image"
                                    src={prism}
                                    alt=""
                                />
                            </div>  
                        </Element>
                        <Element 
                            name="Design (v1)"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Design"
                                    color={color}
                                />
                                <h2>Initial Missteps</h2>
                                <p>Unfortunately, due to this being my first big design project I naively got stuck on the idea of building out the product as an iMessage app as I latched onto some interviewees not wanting to get a new app. While this idea had the potential to build upon an ecosystem where people already have friends, iMessage App Trays are limited both in functionality and familiarity as I learned through my 10 usability tests:</p>
                                {versions.map(item => {
                                    const {video, caption, type} = item
                                    return (
                                        <Preview 
                                            video={video}
                                            caption={caption}
                                            type={type}
                                        />
                                    )
                                })}
                            </div>
                        </Element>
                        <Element
                            name="Pivot"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                 <Step 
                                    step="Pivot"
                                    color={color}
                                />
                                <h2>A Sense of Familiarity</h2>
                                <p>After acknowledging my missteps in product direction, I decided to pivot away from pushing for an iMessage experience due to all the navigational awkwardness and functional limitations that it caused and have more confidence in providing value through a standalone experience.</p>
                                <p>In doing so I also aimed to avoid my other misstep of relying too heavily on experimental interactions and instead rely on more conventional design standards. This would enable me to leverage pre-existing mental models from other apps and create a more usable experience for users from the start. Some app experiences that I looked to for inspiration, due to them providing similar experiences, value and familiarity to the target audience, are as follows:</p>
                                {inspiration.map(item => {
                                    const {video, caption, type} = item
                                    return (
                                        <Preview 
                                            video={video}
                                            caption={caption}
                                            type={type}
                                        />
                                    )
                                })}
                            </div>
                            <div 
                                className="project__sub-block">
                                <p>Another area that needed work was how users communicated their social interests as I received feedback on the icons and “tense” of the status being unclear. Since letting friends know what you are interested in is a core part of the app, I wanted to make sure the action was clearly communicated and stood out.</p>
                                <p>To do this I took inspiration from “mood rings” that dynamically change color and added a rotating accent color that is tied to whatever “social mood” the user selects. Aside from being useful for communicating system status (usability heuristic), the color could be used as a visual filter associated with content or people most relevant to the user’s current needs throughout the app.</p>
                                <Palette 
                                    palette={palette}
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <p>Lastly, to address issues with flow and what to focus on for the core experience loop, I aligned the different aspects of the app onto the Hook Model. This was done to encourage a feedback loop by users as the experience relies on people getting into the habit of posting their current “social mood” whenever it occurs and should aid in a success metric of engagement.</p>
                                <Model 
                                    color={color}
                                    external={[
                                        "Push Notification", 
                                        "Direct Message"
                                    ]}
                                    internal={[
                                        "FOMO", 
                                        "Boredom"
                                    ]}
                                    action={[
                                        "Opens App", 
                                        "Starts Rallying",
                                        "Messages Friend(s)"
                                    ]}
                                    reward={[
                                        "Boredom Gone", 
                                        "Connects with Friends",
                                        "Finds Places to Go"
                                    ]}
                                    investment={[
                                        "Schedules Future Plans", 
                                        "Saves Places",
                                        "Social Circle Grows"
                                    ]}
                                />
                            </div> 
                        </Element>
                        <Element 
                            name="Constraints"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Constraints"
                                    color={color}
                                />
                                <h2>Low Barrier of Entry</h2>
                                <p>While my initial attempt with iMessage integration was great for building on a space people frequently use to communicate with one-another, it was short-sighted due to iMessage being a walled garden limited to just Apple Users. Social messaging apps such as Messenger are successful in part to their low-barrier entry to ensure friend groups are not left fragmented based on cost or mobile device they own. Having the experience be limited to users of one phone type would be counter to that goal of overcoming feelings of disconnect from one-another. </p>
                                <p>To alleviate these concerns, I did some additional research on the development-side of what would be needed to create a feasible solution. To overcome the barrier-to-entry issue, the app could be developed in React Native, rather than pure native solutions, as it would allow for simultaneous iOS and Android Development and even allow for a web platform to be made for a potential business facing component.</p>
                                <iframe 
                                    title={videos[0].title}
                                    className="project__video"  
                                    src={videos[0].src} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Product Validation</h2>
                                <p>There is also the question of how to validate that this product is actually helping people make plans and in turn help local businesses acquire a new audience. One solution could be through implementing the Pilgrim SDK from FourSquare as it would utilize their “venue check-in” functionality to gain data on if users end up following through with the location-specific plans they suggest. Additionally, the SDK also has the capability of determining when a user is home which could then be cross-referenced for non-venue based hangouts.</p>
                                <VideoCarousel
                                    firstVideo={videos[1].src}
                                    firstTitle={videos[1].title}
                                    secondVideo={videos[2].src}
                                    secondTitle={videos[2].title}
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Design (v2)"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Design"
                                    color={color}
                                />
                                <h2>A Focused Experience</h2>
                                <p>Taking all of this into consideration, I tried to strike a balance with this initial flow when users set their rally so the experience feels “Focused” rather than “Forced”. What this means is when a user selects the rally, “Go Out” they are still able to connect and see friends that don’t share their rally as well as being able to view other places that are outside their current social mood.</p>
                                <p>This aims to emulate the ebb and flow of plans and how people are able to change their mind and pivot to other plans if that is where there is a greater interest within their social circle. That core concept in action is as follows:</p>
                                {prototype.map(item => {
                                    const {video, caption, type} = item
                                    return (
                                        <Preview 
                                            video={video}
                                            caption={caption}
                                            type={type}
                                        />
                                    )
                                })}
                            </div> 
                        </Element>
                        <Element 
                            name="Next Steps"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                 <Step 
                                    step="Next Steps"
                                    color={color}
                                />
                                <h2>Concurrent Development</h2>
                                <p>As it stands, this only covers the “Trigger” and “Action” parts of the Rally experience which is only a small portion of the full experience that this has to offer. After pivoting I took a break from this design to learn React Native and have started to build out each section concurrently with the development side of things to ensure it is feasible.</p>
                                <p>For phase 2 of this design I am currently looking into how to pull specific data from the Foursquare Pilgrim SDK and Places API based on different user actions, location and interests. And then for phase 3 I will be building out the chat functionality to link the three elements together that go into the overall mission of connecting friends and places.</p>
                                <Redirect 
                                    link="/project/touch-base"
                                    cta="Next Project: TouchBase"
                                />
                            </div>
                        </Element>
                    </section>
                </div>
            </main>
            <DynamicCards 
                preview={preview}
                color={color}
            />
            </>
        );
    }
};

export default Rally;


/*
                                <p>With the infrastructure for connecting friends over shared social moods established, my focus is now determining how Rally can connect users to places they might be interested in.</p>
                                <p>Before diving deeper into designing this next stage, I plan to conduct another six interviews to explore the space of the second Persona, the Wingman. I'm interested in learning more about the barriers behind people finding and trying out new places outside of their usual spots, which would bring this experience back to the app's primary objective.</p>

                                <p>Rally, the name I landed on, communicates a lot about what the brand is trying to accomplish. It can be defined as:</p>
                                <p>This works on two levels due to people coming together over a common interest and how this all contributes to helping local businesses in light of recent events. The design of the wordmark aims to build on this by utilizing curving lines to showcase the ebb and flow of ideas as a plan starts to materialize and compromises are made.</p>
                                <svg className="project__wordmark" viewBox="0 0 197 109">
                                     <path d="M167.393123,22.2037037 L167.393123,57.5277778 C167.393123,59.4786725 167.461529,61.0601852 169.434977,61.0601852 C171.344765,61.0601852 171.470435,59.5790599 171.476555,57.7153802 L171.476831,22.2037037 L196.97212,22.2037037 C196.990626,22.5377992 197,22.8742989 197,23.212963 L197,74.1805556 C197,89.230315 190.487332,109 164.840807,109 C159.153393,109 153.723078,108.082944 149.016442,106.296903 L149.016442,85.51 C152.301983,87.4478328 155.612719,88.5 161.246636,88.5 C170.880553,88.5 173.486769,85.0535157 173.585974,85.1907196 C175.127533,87.3227402 175.997988,88.6797513 176.054056,88.756604 C176.199196,88.9555472 176.399706,89.1120526 176.656807,89.2228626 C176.913908,89.3336725 177.211639,89.3818396 177.549999,89.3673638 C178.226721,89.3384122 178.882919,89.0939669 179.520948,88.6323243 C180.156623,88.1723852 180.595198,87.6247132 180.831966,86.9927152 L185.511408,74.3599559 C185.645667,74.0657163 185.686789,73.7818723 185.640533,73.5113831 C185.595496,73.2376361 185.484711,73.0019626 185.310618,72.7978472 C185.136525,72.5937317 184.908196,72.4336082 184.622141,72.3176259 C184.337221,72.2031979 184.025623,72.1508157 183.687263,72.1652915 L170.394477,72.6810944 C169.707464,72.7008697 169.046731,72.9390981 168.408701,73.4007407 C167.770672,73.8623833 167.338987,74.4145688 167.108936,75.0607042 C166.990553,75.3767032 166.942281,75.6704696 166.965253,75.9435577 C166.988226,76.2166458 167.07346,76.4518097 167.218599,76.6507528 C167.282585,76.7384577 168.979136,79.0629667 170.868807,81.6520719 C164.893123,86.2451929 144,86.7963805 141.869954,65.6018519 L141.869954,23.212963 C141.869954,22.8742989 141.879328,22.5377992 141.897834,22.2037037 L167.393123,22.2037037 Z M109.736672,0 L109.736672,65.349537 C109.736672,72.3281735 113.030848,80.0600957 118.165854,84.0807893 C114.278689,86.4536453 110.3533,86.2916667 107.950051,86.2916667 C92.1132371,86.2916667 85.7448933,74.9498062 85.7448933,62.8263889 L85.7448933,0 L109.736672,0 Z M137.801779,0 L137.801779,65.349537 C137.801779,72.3281735 141.095955,80.0600957 146.230961,84.0807893 C142.343795,86.4536453 138.418407,86.2916667 136.015157,86.2916667 C120.178344,86.2916667 113.81,74.9498062 113.81,62.8263889 L113.81,0 L137.801779,0 Z M48.4940219,22.2252022 C50.8897341,22.2731185 53.5215594,22.4394865 56.266632,23.0138592 C67.3308587,24.8868608 81.6741421,32.0926494 81.6741421,47.1852078 L81.6741421,65.349537 C81.6741421,72.3281735 84.9683179,80.0600957 90.1033236,84.0807893 C86.2161582,86.4536453 82.2907698,86.2916667 79.8875202,86.2916667 C70.7686151,86.2916667 64.7889865,82.5312663 61.356795,77.0265145 C57.8453515,81.1490792 52.5858135,83.7685185 46.7074,83.7685185 C36.1353571,83.7685185 27.0675155,75.2961292 27.0675155,64.8449074 C27.0675155,54.3936856 35.6378496,45.9212963 46.2098925,45.9212963 C55.1839823,45.9212963 60.8132463,50.544521 63.8325659,56.3078057 L63.93,56.4959474 L63.93,56.4959474 C63.9926333,56.471403 64.0553522,56.4484235 64.1179437,56.4267017 C65.1519396,56.0678642 66.1511718,56.0522821 66.1555368,54.9954545 C66.1605522,53.7811769 64.8469488,51.3534359 63.7394724,49.8257976 C61.12442,46.2186287 55.6545026,42.68 48.4940219,42.1 L48.4940219,22.2252022 Z M22.9813158,22.2037037 L22.9813158,30.2073604 C30.2777608,23.2856669 38.6564487,22.3504942 44.9207781,22.2252022 L44.9207794,42.0511123 C32.6784663,42.8461479 23,52.8168587 23,65 C23,72.4205903 26.5905823,79.0203982 32.1641054,83.2259876 L32.4209607,83.07153 C28.5337954,85.4443861 24.6084069,86.2916667 22.2051574,86.2916667 C6.36834387,86.2916667 -1.49213975e-13,74.9498062 -1.49213975e-13,62.8263889 L-1.49213975e-13,22.2037037 L22.9813158,22.2037037 Z"></path>
                                </svg>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Sketching a Solution</h2>
                                <p>Using similar UI elements and platform conventions from apps in this space, I sketched the following screens. It is worth mentioning that these drawings are of an earlier version before I conducted usability tests so only some elements made it to the latest version depicted below.</p>
                                <img 
                                    className="project__image"
                                    src={sketch}
                                    alt=""
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Communicating with Color</h2>

*/