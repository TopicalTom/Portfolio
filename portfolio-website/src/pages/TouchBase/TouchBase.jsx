import React, {Component} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../Project/Project.scss";

// Components
import Hero from "../../components/Hero/Hero";
import SideNav from '../../components/SideNav/SideNav';
import Skip from "../../components/Skip/Skip";
import Quotes from "../../components/Quotes/Quotes";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Model from "../../components/Model/Model";
import Preview from "../../components/ProjectPreview/ProjectPreview";
import Takeaway from "../../components/Takeaway/Takeaway";
import Step from "../../components/Step/Step";
import Redirect from "../../components/Redirect/Redirect";
import Stats from "../../components/Stats/Stats";
import Tag from "../../components/Tag/Tag";
import Prototype from '../../components/Prototype/Prototype';
import Selector from "../../components/Selector/Selector";
import DynamicCards from '../../components/DynamicCards/DynamicCards';

// Data
import projectsData from "../../data/projectsData";

class TouchBase extends Component {

    state = {
        links: [
            "Overview", 
            "Problem", 
            "Define",
            "Research",
            "Ideation",
            "Constraints",
            "Design",
            "Next Steps" 
        ],
        color: projectsData[1].color,
        stats: projectsData[1].stats,
        quotes: projectsData[1].quotes,
        personas: projectsData[1].personas,
        preview: projectsData[1].preview,
        assets: projectsData[1].assets,
        inspiration: projectsData[1].inspiration,
        prototype: projectsData[1].prototype,
    }

    handleScroll = (e) => {
        scroller.scrollTo(e.target.value, {
            duration: 500,
            delay: 100,
            offset: -120,
            smooth: true
        });
    }

    handleSetActive = (to) => {
        //console.log(to);
    }
    
    render() {

        const {color, preview, links, stats, quotes, personas, assets, inspiration, prototype } = this.state
        const {map, cards } = assets

        return (
            <>
            <Hero 
                project="touch-base"
                preview={preview}
                type="app"
            />
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="TouchBase"
                            links={links}
                            handleSetActive={this.handleSetActive}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <h1>TouchBase</h1>
                                <Tag 
                                    type="Mobile App"
                                    role="Independent"
                                    duration="Ongoing"
                                    color={color}
                                />
                                <p>TouchBase is a Swift app that allows for approachable networking through objective based conversation initiators and meetup scheduling within one's personal resume.</p>
                                <p>TouchBase builds on this core experience by leveraging the newly introduced App Clips infrastructure of iOS 14 to enable spontaneous interactions through shareability of networking details with people outside of the app ecosystem.</p>
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
                                <h2>Transitioning to Networking</h2>
                                <p>As someone who is in the midst of pivoting away from their university degree into a brand new field, the transition can, at times, be daunting.</p>
                                <p>While there are plenty of networking opportunities during an undergraduate degree, I always found myself on the side of the networking facilitators for events and less on the side of the networker. Due to this, the shift to communicating my value and story is a new experience that I was woefully unprepared for and was well outside my comfort zone.</p>
                                <Takeaway 
                                    type="OBSERVATION"
                                    details="Networking is a time-intensive activity which can be draining for people that have very little previous exposure to it."
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
                                <h2>Value of Networking</h2>
                                <p>If networking is so draining to engage in, it’s fair to ask why someone would even bother engaging in it?</p>
                                <p>
                                    According to 
                                    <a className="project__external-link" href="https://ca.topresume.com/career-advice/importance-of-networking-for-career-success"> TopResume</a>
                                    , “when you invest in your relationships - professional and personal - it can help you develop your skill set, stay on top of the latest trends, keep a pulse on the job market and meet prospective people that will foster your career development.” The importance of this is furthered by 
                                    <a className="project__external-link" href="https://review42.com/networking-statistics/#:~:text=85%25%20of%20positions%20are%20filled,through%20connections%20in%20a%20company."> Review42 </a>
                                    with the following statistics:</p>
                                <Stats 
                                    stats={stats}
                                />
                                <p>Aside from the interpersonal value of networking, there is real tangible value for people either new to their careers, or are looking to switch things up, but people just aren’t investing as much time as they should be. Taking this into consideration, there is a clear need to encourage continual engagement of networking by making the practice less draining for those involved.</p>
                                <Takeaway 
                                    type="HOW MIGHT WE"
                                    details="Make networking a more enjoyable and habitual activity for people at different stages of their career journey."
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
                                <h2>Networking Dynamics</h2>
                                <p>In order to understand the dynamics of the networking experience, and the underlying reasons for why it feels draining and hard to maintain, I conducted three online interviews to get the perspective of individuals who were early on in their careers.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Providing Value</h2>
                                <p>After synthesizing the interview data, a very clear theme began to emerge of a struggle to connect because they weren’t sure how to make their interactions valuable to the person they wanted to connect with. This was exacerbated by perceptions of inequality owing to their age, current skill set or experience level which made them feel like they had very little, or new, to offer people that were more seasoned in their careers.</p>
                                <p>Looking to overcome this barrier, interview participants would conduct preliminary research on the people they wanted to interact with, or had interacted previously with, which unfortunately resulted in networking essentially becoming a research assignment rather than an actual human connection.</p>
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
                                <h2>Frame of Reference</h2>
                                <p>Using these quotes from above I was able to construct two personas that embody the people I interviewed, and an additional third that was inferred based on online articles and who the people I interviewed were hoping to interact with.</p>
                                <PersonaCarousel 
                                    personas={personas}
                                    color={color}
                                />
                                <p>Despite all being at different stages in their career, networking provides an avenue for each of them to progress their lifelong goals. The disconnect for each of these personas comes from the uncertainty of knowing how to communicate and facilitate the “quid pro quo” of networking in a way that feels shared and is sustainable over an extended period of time.</p>
                                <p>While each persona has their own issues with the networking experience, I focused primarily on the perspective of Paulina (prospective persona) as they arguably have the most barriers to overcome due to being new to a field and networking in general. To illustrate her journey, I have constructed the following journey map:</p>
                                <img 
                                    className="project__image"
                                    src={map}
                                    alt=""
                                />
                                <Takeaway 
                                    type="KEY TAKEAWAY"
                                    details="Networking feels dirty, selfish and forced due to the directness of asking for favours from someone with whom they have little to no prior connection. The hidden nature of one’s aspirations and needs leads to it feeling like a one-sided transaction which is exacerbated by the perceived inequality between people at different stages of their careers."
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
                                <h2>Unhiding Information</h2>
                                <p>Information like one’s background or current roles are readily available on platforms like LinkedIn, but details on what a person is interested in talking about, if they have the time to help, and if they are even willing or capable of doing so sometimes require extensive digging or direct contact to uncover.</p>
                                <p>These unknowns in networking make the process of determining if and how someone should connect with another the challenge that it is, especially when it leads to rejection or ghosting. Therefore, a possible solution to the issue of approachability in networking could be in providing upfront visibility to this vital information.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Modern Solutions</h2>
                                <p>Modern iterations of the networking formula take cues from the online dating scene which allow users to view details on the person they might want to connect with first, to determine if they should reach out.</p>
                                <p>The most notable of these products are Bumble Bizz and Shapr, so I looked to them for inspiration for how they attempt to make networking approachable. The value of these product experiences are their emphasis on prompts, for how to initiate conversations, and suggestions, in the case of how they would like to meet, to help both parties towards their goal of connecting.</p>
                                {inspiration.map(item => {
                                    const {title, videoOne, captionOne, labelOne, videoTwo, captionTwo, labelTwo} = item
                                    return (
                                        <Selector 
                                            title={title}
                                            videoOne={videoOne}
                                            captionOne={captionOne}
                                            labelOne={labelOne}
                                            videoTwo={videoTwo}
                                            captionTwo={captionTwo}
                                            labelTwo={labelTwo}
                                            color={color}
                                        />
                                    )
                                })}
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
                                <h2>Barriers to Connecting</h2>
                                <p>While the current solutions outlined above are great for the discovery of people that fit the criteria of who networkers want to connect with, they have their limitations.</p>
                                <p>Bumble Bizz and Shapr are closed ecosystems which are limited to connecting with people who have already downloaded the app and have no way of sharing your profile details with people through chance encounters. Even LinkedIn, which has the benefit of being web based, forces the viewer to have an account to even look at the account of the person they want to connect with.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Legacy Solution</h2>
                                <p>It’s because of this closed ecosystem that business cards have continued to see use as a form of sharing vital networking details, with the very act of handing someone your card serving as an open invite which says, “let’s continue this relationship”.</p>
                                <p>Unfortunately, this medium has limitations in how much information can be fit on a card, if the details are up-to-date, and whether a contact remembers to follow up which is all dependent on if the user had one on them to share in the first place. Despite these drawbacks, we continue to use business cards as there is value in how little barriers there are between information being shared while also serving as a tangible reminder that an initial connection occurred.</p>
                                <img 
                                    className="project__image project__image--web" 
                                    src={cards}
                                    alt=""
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>An Open Ecosystem</h2>
                                <p>Based on this, there appeared to be a gap in the market for a solution that allows for the open shareability of business cards, with the approachability of content found in networking/dating app hybrids.</p>
                                <p>To tackle this issue I did some additional research on technology that could enable this product to effectively have an open ecosystem with few if any hurdles to go through in sharing one’s personal details. What I landed on was App Clips which would allow for temporary access to the app experience without a user first needing to download it:</p>
                                <iframe 
                                    title="App Clips Promotional Video"
                                    className="project__video"  
                                    src="https://www.youtube.com/embed/IqP_iojZXxQ" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </Element>
                        <Element
                            name="Design"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Design"
                                    color={color}
                                />
                                <h2>Connect First, Share Later</h2>
                                <p>While I am still in the process of building out the user flow of an MVP experience, my north star for the design of this product was ensuring each aspect of the experience felt approachable and like an open-invite for connection.</p>
                                <p>The focus was therefore on having a genuine chat with someone in the moment, and then allowing the TouchBase experience to communicate what their “call to action” is, without them having to say it on the spot. In that way, TouchBase carries the heavy lifting of the “ask” which can serve as the basis for further communication once that initial connection has been established.</p>
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
                                <h2>Making it Habitual</h2>
                                <p>
                                    As I build out the rest of the product experience, I will be aligning it to the trusty 
                                    <a className="project__external-link" href="https://www.nirandfar.com/how-to-manufacture-desire/"> Hook Model </a>
                                    framework to tackle the issue of people struggling to keep networking a habitual activity they engage in regardless of where they are at in their career. While this doesn’t go into the exact form these aspects will take, it will hopefully provide some insight on the type of engagement loop I am seeking to emulate as this project progresses.
                                </p>
                                <Model 
                                    color={color}
                                    external={[
                                        "Push Notification", 
                                        "Direct Message"
                                    ]}
                                    internal={[
                                        "Need to Connect", 
                                        "Vibe Check"
                                    ]}
                                    action={[
                                        "Opens App", 
                                        "Shares Details",
                                        "Messages Contact"
                                    ]}
                                    reward={[
                                        "Schedules Networking Session", 
                                        "Connects with Contact",
                                        "Finds New Opportunity"
                                    ]}
                                    investment={[
                                        "Establishes Networking Routine", 
                                        "Builds Connections",
                                        "Network Grows"
                                    ]}
                                />
                                <Redirect 
                                    link="/project/shop"
                                    cta="Next Project: Shop"
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

export default TouchBase;

/*
                                <h2>Approachable Networking</h2>
                                <p>In approaching the design of this product, my north star was ensuring each aspect of the experience felt approachable and like an open-invite for connection.</p>
                                <p>In the pursuit of communicating this, the name of the product went through a few different versions, such as SwapStack and QuickCard, but I eventually landed on TouchBase. TouchBase works both as a colloquial term already used in this space while evoking this idea of an open suggestion with the potential for continued contact. This is furthered by the name alluding to the bases of baseball, and how there are milestones one has to hit before getting to the eventual goal in networking (home-run).</p>
                                <svg className="project__wordmark" viewBox="0 0 472 111">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-159.000000, -115.000000)" fill={color}>
                                            <path d="M170.927681,134.448615 L229.029006,141.596482 C230.716929,141.804138 231.916923,143.340807 231.709267,145.02873 C231.704951,145.063815 231.700031,145.098822 231.694509,145.133738 L219.315657,223.408568 C219.050008,225.08834 217.472932,226.234713 215.79316,225.969064 C215.579125,225.935215 215.369261,225.878868 215.167056,225.800959 L160.972356,204.919986 C159.64556,204.408777 158.841299,203.0556 159.026357,201.645821 L167.498584,137.104096 C167.718656,135.427577 169.249433,134.24215 170.927681,134.448615 Z M180.836294,115.028043 L250.258785,123.572079 C252.28428,123.821362 253.724184,125.665435 253.4749,127.690931 C253.469735,127.732898 253.46385,127.774774 253.457248,127.81654 L238.664883,221.389801 C238.346227,223.405548 236.453821,224.781311 234.438074,224.462656 C234.180993,224.422015 233.928924,224.354327 233.686066,224.260718 L227.937495,222.044958 C228.128877,221.547396 228.281951,221.028238 228.39262,220.490432 L228.467607,220.083628 L240.756289,144.741878 C240.779004,144.602608 240.798726,144.462865 240.81544,144.322748 C241.449093,139.010571 237.731423,134.182182 232.471589,133.407678 L232.198167,133.371251 L176.268942,126.699837 C176.049931,126.673712 175.831722,126.654988 175.614565,126.643467 L176.721176,118.214787 C176.985178,116.202809 178.822265,114.78017 180.836294,115.028043 Z M332.816,158.94 C336.314667,158.94 339.450667,159.686667 342.224,161.18 C344.997333,162.673333 347.162667,164.742667 348.72,167.388 C350.277333,170.033333 351.056,173.041333 351.056,176.412 C351.056,179.782667 350.277333,182.801333 348.72,185.468 C347.162667,188.134667 344.997333,190.214667 342.224,191.708 C339.450667,193.201333 336.314667,193.948 332.816,193.948 C329.36,193.948 326.245333,193.201333 323.472,191.708 C320.698667,190.214667 318.533333,188.134667 316.976,185.468 C315.418667,182.801333 314.64,179.782667 314.64,176.412 C314.64,173.041333 315.418667,170.033333 316.976,167.388 C318.533333,164.742667 320.698667,162.673333 323.472,161.18 C326.245333,159.686667 329.36,158.94 332.816,158.94 Z M365.68,159.324 L365.68,177.756 L365.683932,178.15228 C365.741601,181.025948 366.433623,183.187188 367.76,184.636 C369.146667,186.150667 371.12,186.908 373.68,186.908 C376.538667,186.908 378.810667,186.022667 380.496,184.252 C382.181333,182.481333 383.024,179.932 383.024,176.604 L383.024,176.604 L383.024,159.324 L391.024,159.324 L391.024,193.5 L383.408,193.5 L383.408,189.148 L383.147733,189.450507 C381.913244,190.840302 380.4,191.923467 378.608,192.7 C376.688,193.532 374.618667,193.948 372.4,193.948 C367.834667,193.948 364.24,192.678667 361.616,190.14 C358.992,187.601333 357.68,183.836 357.68,178.844 L357.68,178.844 L357.68,159.324 L365.68,159.324 Z M416.4,158.94 C419.770667,158.94 422.725333,159.622667 425.264,160.988 C427.802667,162.353333 429.712,164.316 430.992,166.876 L430.992,166.876 L424.848,170.46 L424.633959,170.127755 C423.690177,168.714204 422.534857,167.640952 421.168,166.908 C419.696,166.118667 418.085333,165.724 416.336,165.724 C413.349333,165.724 410.874667,166.694667 408.912,168.636 C406.949333,170.577333 405.968,173.169333 405.968,176.412 C405.968,179.654667 406.938667,182.246667 408.88,184.188 C410.821333,186.129333 413.306667,187.1 416.336,187.1 C418.085333,187.1 419.696,186.705333 421.168,185.916 C422.64,185.126667 423.866667,183.942667 424.848,182.364 L424.848,182.364 L430.992,185.948 L430.78904,186.3276 C429.474747,188.703867 427.611733,190.550667 425.2,191.868 C422.661333,193.254667 419.728,193.948 416.4,193.948 C412.858667,193.948 409.68,193.201333 406.864,191.708 C404.048,190.214667 401.850667,188.134667 400.272,185.468 C398.693333,182.801333 397.904,179.782667 397.904,176.412 C397.904,173.041333 398.693333,170.033333 400.272,167.388 C401.850667,164.742667 404.037333,162.673333 406.832,161.18 C409.626667,159.686667 412.816,158.94 416.4,158.94 Z M540.784,158.94 C545.818667,158.94 549.669333,160.145333 552.336,162.556 C555.002667,164.966667 556.336,168.604 556.336,173.468 L556.336,173.468 L556.336,193.5 L548.784,193.5 L548.784,189.34 L548.582187,189.633973 C547.614507,190.983947 546.284444,192.027289 544.592,192.764 C542.778667,193.553333 540.592,193.948 538.032,193.948 C535.472,193.948 533.232,193.510667 531.312,192.636 C529.392,191.761333 527.909333,190.545333 526.864,188.988 C525.818667,187.430667 525.296,185.670667 525.296,183.708 C525.296,180.636 526.437333,178.172 528.72,176.316 C531.002667,174.46 534.597333,173.532 539.504,173.532 L539.504,173.532 L548.336,173.532 L548.336,173.02 L548.331138,172.68244 C548.266316,170.457194 547.55327,168.735048 546.192,167.516 C544.762667,166.236 542.64,165.596 539.824,165.596 C537.904,165.596 536.016,165.894667 534.16,166.492 C532.304,167.089333 530.736,167.921333 529.456,168.988 L529.456,168.988 L526.32,163.164 L526.683236,162.8952 C528.400901,161.660711 530.434489,160.704978 532.784,160.028 C535.301333,159.302667 537.968,158.94 540.784,158.94 Z M577.936,158.94 C580.282667,158.94 582.629333,159.206667 584.976,159.74 C587.322667,160.273333 589.242667,160.988 590.736,161.884 L590.736,161.884 L587.664,167.964 L587.266116,167.736562 C584.46519,166.181521 581.333818,165.404 577.872,165.404 C575.525333,165.404 573.744,165.756 572.528,166.46 C571.312,167.164 570.704,168.092 570.704,169.244 C570.704,170.524 571.354667,171.430667 572.656,171.964 C573.957333,172.497333 575.973333,172.998667 578.704,173.468 C581.434667,173.894667 583.674667,174.385333 585.424,174.94 C587.173333,175.494667 588.677333,176.433333 589.936,177.756 C591.194667,179.078667 591.824,180.956 591.824,183.388 C591.824,186.588 590.437333,189.148 587.664,191.068 C584.890667,192.988 581.114667,193.948 576.336,193.948 C573.562667,193.948 570.853333,193.585333 568.208,192.86 C565.562667,192.134667 563.450667,191.217333 561.872,190.108 L561.872,190.108 L564.944,184.028 L565.334444,184.279778 C566.789704,185.187481 568.504889,185.924889 570.48,186.492 C572.634667,187.110667 574.757333,187.42 576.848,187.42 C581.626667,187.42 584.016,186.161333 584.016,183.644 C584.016,182.449333 583.408,181.617333 582.192,181.148 C580.976,180.678667 579.024,180.230667 576.336,179.804 C573.52,179.377333 571.226667,178.886667 569.456,178.332 C567.685333,177.777333 566.149333,176.806667 564.848,175.42 C563.546667,174.033333 562.896,172.102667 562.896,169.628 C562.896,166.385333 564.250667,163.793333 566.96,161.852 C569.669333,159.910667 573.328,158.94 577.936,158.94 Z M612.784,158.94 C616.112,158.94 619.088,159.676 621.712,161.148 C624.336,162.62 626.384,164.689333 627.856,167.356 C629.328,170.022667 630.064,173.105333 630.064,176.604 C630.064,177.158667 630.021333,177.948 629.936,178.972 L629.936,178.972 L603.12,178.972 L603.188694,179.312033 C603.702413,181.669587 604.906182,183.550909 606.8,184.956 C608.784,186.428 611.248,187.164 614.192,187.164 C617.946667,187.164 621.04,185.926667 623.472,183.452 L623.472,183.452 L627.76,188.38 L627.46725,188.71875 C625.97975,190.38625 624.136,191.66 621.936,192.54 C619.589333,193.478667 616.944,193.948 614,193.948 C610.245333,193.948 606.938667,193.201333 604.08,191.708 C601.221333,190.214667 599.013333,188.134667 597.456,185.468 C595.898667,182.801333 595.12,179.782667 595.12,176.412 C595.12,173.084 595.877333,170.086667 597.392,167.42 C598.906667,164.753333 601.008,162.673333 603.696,161.18 C606.384,159.686667 609.413333,158.94 612.784,158.94 Z M316.272,148.7 L316.272,155.74 L301.424,155.74 L301.424,193.5 L293.104,193.5 L293.104,155.74 L278.256,155.74 L278.256,148.7 L316.272,148.7 Z M444.784,146.012 L444.784,163.292 L445.072163,162.995347 C446.341388,161.731782 447.877333,160.753333 449.68,160.06 C451.621333,159.313333 453.786667,158.94 456.176,158.94 C460.485333,158.94 463.941333,160.198667 466.544,162.716 C469.146667,165.233333 470.448,168.966667 470.448,173.916 L470.448,173.916 L470.448,193.5 L462.448,193.5 L462.448,174.94 L462.444008,174.554609 C462.385452,171.759014 461.682783,169.636812 460.336,168.188 C458.928,166.673333 456.922667,165.916 454.32,165.916 C451.376,165.916 449.050667,166.801333 447.344,168.572 C445.637333,170.342667 444.784,172.892 444.784,176.22 L444.784,176.22 L444.784,193.5 L436.784,193.5 L436.784,146.012 L444.784,146.012 Z M501.584,148.7 L502.109013,148.703449 C507.14496,148.770127 511.044622,149.803644 513.808,151.804 C516.666667,153.873333 518.096,156.721333 518.096,160.348 C518.096,162.566667 517.584,164.529333 516.56,166.236 C515.536,167.942667 514.128,169.265333 512.336,170.204 C514.810667,171.014667 516.773333,172.369333 518.224,174.268 C519.674667,176.166667 520.4,178.524 520.4,181.34 C520.4,185.222667 518.906667,188.22 515.92,190.332 C512.933333,192.444 508.581333,193.5 502.864,193.5 L502.864,193.5 L480.592,193.5 L480.592,148.7 L501.584,148.7 Z M548.336,178.844 L540.08,178.844 L539.769388,178.846347 C535.368463,178.913631 533.168,180.427515 533.168,183.388 C533.168,184.838667 533.744,185.990667 534.896,186.844 C536.048,187.697333 537.648,188.124 539.696,188.124 C541.701333,188.124 543.482667,187.665333 545.04,186.748 C546.597333,185.830667 547.696,184.518667 548.336,182.812 L548.336,182.812 L548.336,178.844 Z M332.816,165.724 C329.872,165.724 327.450667,166.705333 325.552,168.668 C323.653333,170.630667 322.704,173.212 322.704,176.412 C322.704,179.612 323.653333,182.193333 325.552,184.156 C327.450667,186.118667 329.872,187.1 332.816,187.1 C335.76,187.1 338.192,186.118667 340.112,184.156 C342.032,182.193333 342.992,179.612 342.992,176.412 C342.992,173.212 342.032,170.630667 340.112,168.668 C338.192,166.705333 335.76,165.724 332.816,165.724 Z M502.352,174.044 L488.912,174.044 L488.912,186.972 L502.352,186.972 C508.794667,186.972 512.016,184.817333 512.016,180.508 C512.016,176.198667 508.794667,174.044 502.352,174.044 L502.352,174.044 Z M612.784,165.34 C610.224,165.34 608.058667,166.097333 606.288,167.612 C604.517333,169.126667 603.44,171.142667 603.056,173.66 L603.056,173.66 L622.448,173.66 C622.106667,171.185333 621.061333,169.18 619.312,167.644 C617.562667,166.108 615.386667,165.34 612.784,165.34 Z M500.688,155.228 L488.912,155.228 L488.912,167.58 L500.688,167.58 C503.589333,167.58 505.818667,167.057333 507.376,166.012 C508.933333,164.966667 509.712,163.441333 509.712,161.436 C509.712,159.388 508.933333,157.841333 507.376,156.796 C505.818667,155.750667 503.589333,155.228 500.688,155.228 L500.688,155.228 Z"></path>
                                        </g>
                                    </g>
                                </svg>
                                                            <div 
                                className="project__sub-block">
                                <h2>Share First, Ask Later</h2>
                                <p>For the core product experience I sketched a few rough screens to figure out how TouchBase might promote shareability and approachability in networking. The sketches cover the UI of what sharing a card might look like in Apple Wallet, what the contact details might entail, and what form scheduled meetups might take within the app ecosystem:</p>
                                <img 
                                    className="project__image"
                                    src={sketch}
                                    alt=""
                                />
                                <p>The idea behind the sketches was to allow users to focus on having a genuine chat with someone in the moment, and then allowing the TouchBase experience to communicate what their “call to action” is, without them having to say it on the spot. In that way, TouchBase carries the heavy lifting of the “ask” which can serve as the basis for further communication once that initial connection has been established.</p>
                            </div>
                                                        <div 
                                className="project__sub-block">
                                <h2>Making it Habitual</h2>
                                <p>These sketches touch on the issues newer networkers have with networking, but the issue of keeping up with networking for people who are already established in the industry, still needs to be addressed.</p>
                                <p>To tackle this challenge, I looked towards the trusty
                                    <a className="project__external-link" href="https://www.nirandfar.com/how-to-manufacture-desire/"> Hook Model </a>
                                    framework to outline a potential loop that this app could employ to keep these users engaged. At a high level, push notifications could be employed that tie into scheduling meetups to encourage repeated use:
                                </p>
                                <Model 
                                    color={color}
                                    external={[
                                        "Push Notification", 
                                        "Direct Message"
                                    ]}
                                    internal={[
                                        "Need to Connect", 
                                        "Vibe Check"
                                    ]}
                                    action={[
                                        "Opens App", 
                                        "Shares Details",
                                        "Messages Contact"
                                    ]}
                                    reward={[
                                        "Schedules Networking Session", 
                                        "Connects with Contact",
                                        "Finds New Opportunity"
                                    ]}
                                    investment={[
                                        "Establishes Networking Routine", 
                                        "Builds Connections",
                                        "Network Grows"
                                    ]}
                                /> 
                            </div>

*/