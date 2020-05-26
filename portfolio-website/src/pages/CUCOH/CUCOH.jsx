import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import OldFramework from "../../assets/files/CUCOHOldFramework.png";
import NewFramework from "../../assets/files/CUCOHNewFramework.png";
import FullFramework from "../../assets/files/CUCOHFullFramework.png";
import Quotes from '../../components/Quotes/Quotes';
import quotesData from "../../data/quotesData";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Blueprint from "../../assets/files/CUCOHBlueprint.png";
import Journey from "../../assets/files/CUCOHMap.png";
import Allocation from "../../assets/files/Allocation.gif";
import Tech from "../../components/Tech/Tech";
import techData from "../../data/techData";
import personaData from "../../data/personaData";

class CUCOH extends Component {

    state = {
        links: [
            "Overview",
            "Problem",
            "Research",
            "Insights",
            "Ideation",
            "Constraints",
            "Design",
            "Results"
        ],
        quotes: quotesData,
        tech: techData.cucoh,
        personas: personaData      
    }
    
    render() {
        return (
            <>
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Process"
                            links={this.state.links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                                <h1 className="project__heading">CUCOH</h1>
                                <p className="project__paragraph">The Canadian Undergraduate Conference on Healthcare (CUCOH) is a three-day student-run conference at Queen's University held annually in November. CUCOH exposes undergraduate students to a wide array of professions in the healthcare industry through inspiring keynotes, engaging case challenges, interactive workshops and a research competition that showcase the multidisciplinary nature of healthcare.</p>
                                <iframe 
                                    width="100%" 
                                    height="420" 
                                    src="https://www.youtube.com/embed/Mer2NbNnnrc?controls=0" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay" 
                                    allowfullscreen>
                                </iframe>
                        </Element>
                        <Element 
                            name="Problem"
                            className="project__block">
                                <h2 className="project__heading">Problem Space</h2>
                                <h3>Delivering on Marketing</h3>
                                <p>CUCOH is marketed as offering moments where delegates can shape their experience by selecting workshops and topics that fit their interests, in addition to our shared group events, to make our conferencec uniquely their own.</p>
                                <p>However, after reading our feedback form, I noticed that we got numerous comments indicating that they were disappointed that they didn’t get the selections they initially picked during our online registration. Since we have delegates, who come from as far as British Columbia to experience our conference, having to pay both the ticket price and travel expenses not to get the experience they thought they were going to get would be devasting.</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">Observed Problem</h4>
                                <h3 className="project__question">Selections made during registration aren’t always indicative of what delegates will attend which makes registering for our conference feel like a slot machine.</h3>
                        </Element>
                        <Element 
                            name="Research"
                            className="project__block">
                                <h2 className="project__heading">Research</h2>
                                <p>Before making any changes, I conducted some exploratory research where comments and ratings from delegates over the past five years were synthesized to understand pain points and areas of opportunity within our current conference experience from a delegate perspective.</p>
                                <p>I also consulted the full executive team to ensure specific team and stakeholder goals would be maintained and to determine the inherent constraints from a conference perspective.</p>
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">How Might We</h4>
                                <h3 className="project__question">Enable our team to consistently deliver on a conference experience that our delegates can feel confident about at each stage of their journey?</h3>
                        </Element>
                        <Element 
                            name="Insights"
                            className="project__block">
                                <h2 className="project__heading">Insights</h2>
                                <h3>Outlining our Service</h3>
                                <p>After talking with our full team and reading every transition manual I could find, I was able to construct an approximate Service Blueprint (below) for our 2016 conference.</p>
                                <p>The main takeaway was a delegate's selection was only used after the fact to inform, not guarantee, where they might be slotted, based on our room capacity, equipment, and time constraints for our conference on a first-come-first-serve basis. This process was largely behind the line of visibility, over an extended period after they have paid, which could be causing our registration process to feel like a slot machine.</p>
                                <img 
                                    className="project__image" 
                                    src={Blueprint}
                                    alt=""
                                />
                                <h3>Compiling Delegate Feedback</h3>
                                <p>Digging deeper, I compiled our quantitative "ratings" and qualitative "comments" from our feedback forms to understand our experience from the perspective of our delegates. In doing so, I uncovered that while this feeling of uncertainty was present during our registration process, it wasn't isolated to it. In-fact delegates felt that the amount of information on our experience and the way it was communicated throughout their end-to-end journey was inadequate, which led to this feeling of uncertainty.</p>
                                <Quotes
                                    size={this.state.quotes.cucoh.length} 
                                    quotes={this.state.quotes.cucoh}
                                />
                                <p>Furthermore, our delegates felt that elements of our experience weren't engaging enough, given their expectations that were formed based on the price-point and the way we marketed our conference. Some of the comments that led to these two themes are as follows:</p>
                                <Quotes 
                                    size={this.state.quotes.cucoh2.length}
                                    quotes={this.state.quotes.cucoh2}
                                />
                                <h3>Refining Delegate Types</h3>
                                <p>Conducting user interviews to dig deeper into these insights and get a better idea of who our audience is would have been the ideal next step; however, I was not aware of this option in 2017 and 2018 when I started this project.</p>
                                <p>Instead, I used comments from our feedback form and responses from our brand ambassador applications to create approximate personas to understand the motivations, frustrations, and types of our audience:</p>
                                <PersonaCarousel 
                                    size={this.state.personas.cucoh.length}
                                    persona={this.state.personas.cucoh}
                                />
                                <p>Rachel and Kristie, our new delegates would be impacted the most as they may be learning about our conference for the first time and don’t have a previous CUCOH experience to draw from. Without enough information on what our conference entails, these potential delegates are unable to make an informed decision on whether or not to pay upfront for our conference experience.</p>
                                <p>While Kristie was referred by a friend and can form a level of trust for our conference based on that recommendation, Rachel likely stumbled upon our conference and we would have to build trust from scratch. This uncertainty ultimately hurts our registration conversion rate and increases the length of our registration period.</p>
                                <PersonaCarousel 
                                    size={this.state.personas.cucoh2.length}
                                    persona={this.state.personas.cucoh2}
                                />
                                <p>Joshua and Anna, our past delegates, would be impacted the most as they have already attended CUCOH before, and their decision to attend again would be based on that experience. For Joshua who registered early and got all of his top choices, this is an easier decision to make, but for Anna, who registered late and didn’t get any or all of her top choices, this would be a harder decision to make.</p>
                                <p>How well a delegates’ conference experience aligned with their initial expectations (formed during their information search and registration) impacts how they would evaluate our conference in our feedback form and the likeliness they would recommend our conference to others. A misalignment in expectations would ultimately hurt our theoretical (not currently tracked) net promoter score.</p>
                                <h3>Mapping the Delegate Journey</h3>
                                <p>With this information in mind, I focused on our Rachel persona as the primary focus of this case study as she must overcome the most barriers when it comes to first overcoming a lack of information to attend our conference and deciding whether to recommend our conference to others based on her expectations.</p>
                                <p>Using Rachel as a lens for reference, and comments from our feedback form, I constructed the following Journey Map to outline what a new delegate's experience might have been like at CUCOH 2016 as they interact with each stage of our service.</p>
                                <img 
                                    className="project__image" 
                                    src={Journey}
                                    alt=""
                                />
                        </Element>
                        <Element
                            className="project__block">
                                <h4 className="project__hmw">Root Issue</h4>
                                <h3 className="project__question">Our annually rotating team lacks an efficient and repeatable way to process and communicate information about our conference experience to delegates at each stage of their journey. Our inability to provide concrete details in a timely and accessible manner results in CUCOH feeling confusing, disorganized, and risky, which impacts overall confidence in our brand.</h3>
                        </Element>
                        <Element 
                            name="Ideation"
                            className="project__block">
                                <h2 className="project__heading">Ideation</h2>
                                <h3>Ensuring a Consistent Experience</h3>
                                <p>Based on our insights, in addition to having conference information communicated throughout their journey, our delegates want a way to make their unique selections in real-time so that they would know what they would eventually be attending at the moment of registering.</p>
                                <p>Simply put, not an easy task for someone who had never done any of this type of work before. However, since our team worked with the same constraints each year, we could theoretically create a slotting framework that would mathematically allow us to slot delegates to desired experiences (using scripts) at the time of registration. I have provided the output from this train of thought below:</p>
                                <img 
                                    className="project__image" 
                                    src={Allocation}
                                    alt=""
                                />
                        </Element>
                        <Element 
                            name="Constraints"
                            className="project__block">
                                <h2 className="project__heading">Constraints</h2>
                                <h3>Reusable Systems & Measuring Success</h3>
                                <p>The hurdle here, aside from figuring out how to implement this slotting logic, was figuring out how to build a solution within my own capabilities and those of our current and future teams. If current and future teams were unable to replicate the experience delegates had come to expect, it would ultimately hurt our delegates more in the long-run. This meant that whatever was introduced to our conference had to be easily learnable and accessible to anyone on the team.</p>
                                <p>There is also the big question of how will we know that these new systems would be worth the time commitment to implement. As outlined by our personas, two metrics worth measuring would be registration conversion rate and NPS Score as it would allow our team to determine how well our conference is living up to delegate expectations and how well we communicate our value proposition.</p>
                                <h3>Tech Stack</h3>
                                <p>With these constraints as guiding principles, I sought to find technology that would allow me to automate as many processes as possible, create reusable templates, and limit the amount of new technology added to reduce the chances of “skill” being a limiting factor in enabling our team to provide important information for our delegates.</p>
                                <p>What I landed on was Squarespace, Zapier and TicketSpice which would help fill in the gaps in our experience and bring cohesion to how we organize our conference:</p>
                                <Tech 
                                    tech={this.state.tech}
                                />
                        </Element>
                        <Element 
                            name="Design"
                            className="project__block">
                                <h2 className="project__heading">Design</h2>
                                <h3>Current State</h3>
                                <p>Based on what I learned from our service design blueprint, our registration process is broken up into three stages with the allocation of delegates to their preferred experiences happening behind the line of visibility. This, on top of there being a delay in communication of details between delegate and executive, were the primary areas of concern I wanted to focus on when updating our previous framework, as shown below:</p>
                                <img className="project__image" src={OldFramework} alt=""/>
                                <h3>Proposed State</h3>
                                <p>In designing a new framework my goal was to keep delegates constantly in the loop from the moment they learned about our conference to the moment they were returning home after attending. At a high level, our Squarespace website became a central space where delegates would learn about our conference, receive support, purchase tickets and view their unique schedules for interacting with our physical experience.</p>
                                <p>This was made possible through Zapier, for connecting our emails and slack channel to specific forms and TicketSpice allowing for embeddable forms with easy to export data that was used for creating unique delegate URLs. Squarespace in-house mailing lists and QR codes on delegate material were used to return delegates to this central space whenever they completed an action and needed confirmation, guidance for next steps or we wanted to keep them informed on conference updates.</p>
                                <img className="project__image" src={NewFramework} alt=""/>
                                <p>By building our conference systems and processes around our delegates for each step, we are not only creating a conference that more closely aligns to what our delegates want, but we are simultaneously influencing that word of mouth channel we don’t directly control when people hear about our conference from their friends.</p>
                                <img className="project__image" src={FullFramework} alt=""/>
                        </Element>
                        <Element 
                            name="Results"
                            className="project__block">
                                <h2 className="project__heading">Results</h2>
                                <p>What started as a simple problem of just wanting to help people feel confident in what they were spending their money on snowballed into a deeper understanding of creating something that is truly human-centred.</p>
                                <p>While all the systems and processes outlined above were not able to be completed in full, a strong foundation has been set for our future teams in continuing to optimize our conference and have show promise with the following metrics:</p>
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

export default CUCOH;



/*

import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Framework from "../../assets/files/CUCOHFramework.png";

class CUCOH extends Component {

    state = {
        links: [
            "Coming Soon"
        ]      
    }
    
    render() {
        return (
            <>
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Process"
                            links={this.state.links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Coming Soon"
                            className="project__block">
                                <h1 className="project__heading">CUCOH</h1>
                                <p className="project__paragraph">The Canadian Undergraduate Conference on Healthcare (CUCOH) is a three-day student-run conference at Queen's University held annually in November. CUCOH exposes undergraduate students to a wide array of professions in the healthcare industry through inspiring keynotes, engaging case challenges, interactive workshops and a research competition that showcase the multidisciplinary nature of healthcare.</p>
                                <p className="project__paragraph">I took the initiative to independently create an end-to-end process that would allow our delegates to feel confident in their purchase of the conference experience the rest of the team was building.</p>
                                <img className="project__image" src={Framework} alt=""/>
                                <p className="project__paragraph">This goal was accomplished by implementing a slotting framework that enabled our team to preemptively slot delegates into our conference experiences and then by improving the way information regarding a delegates’ experience was communicated throughout their journey.</p>
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

export default CUCOH;

*/