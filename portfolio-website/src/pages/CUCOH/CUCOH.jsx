import React, {Component} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../Project/Project.scss";

// Components
import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Quotes from '../../components/Quotes/Quotes';
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Metrics from "../../components/Metrics/Metrics";
import Screen from "../../components/Screen/Screen";
import Skip from "../../components/Skip/Skip";
import Hero from "../../components/Hero/Hero";
import Takeaway from "../../components/Takeaway/Takeaway";
import Step from "../../components/Step/Step";
import Tag from "../../components/Tag/Tag";

// Images
import OldFramework from "../../assets/files/CUCOHOldFramework.png";
import NewFramework from "../../assets/files/CUCOHNewFramework.png";
import FullFramework from "../../assets/files/CUCOHFullFramework.png";
import Blueprint from "../../assets/files/CUCOHBlueprint.png";
import Journey from "../../assets/files/CUCOHMap.png";
import Allocation from "../../assets/files/Allocation.gif";

// Data
import quotesData from "../../data/quotesData";
import techData from "../../data/techData";
import personaData from "../../data/personaData";
import serviceData from "../../data/serviceData";

class CUCOH extends Component {

    state = {
        links: [
            "Overview",
            "Problem",
            "Define",
            "Research",
            "Ideation",
            "Constraints",
            "Design",
            "Impact"
        ],
        color: "hsla(0, 76%, 41%, 0.8)",
        quotes: quotesData,
        tech: techData.cucoh,
        personas: personaData,
        frontend: serviceData.frontend,
        backend: serviceData.backend  
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
        return (
            <>
            <Hero 
                project="cucoh"
                video={"https://www.youtube.com/embed/Mer2NbNnnrc?controls=0"}
                type="video"
            />
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Navigate"
                            links={this.state.links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                                <h1 className="project__heading">CUCOH</h1>
                                <Tag 
                                    type="Conference"
                                    role="Service Designer"
                                    duration="Sep 2017 - Nov 2019"
                                    color={this.state.color}
                                />
                                <p className="project__paragraph">The Canadian Undergraduate Conference on Healthcare (CUCOH) is a three-day student-run conference at Queen's University held annually in November.</p>
                                <p className="project__paragraph">CUCOH exposes undergraduate students to a wide array of professions in the healthcare industry through inspiring keynotes, engaging case challenges, interactive workshops and a research competition that showcase the multidisciplinary nature of healthcare.</p>
                                <iframe 
                                    className="project__video"
                                    src="https://www.youtube.com/embed/Mer2NbNnnrc" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    muted 
                                    allowfullscreen>
                                </iframe>
                                <Skip 
                                    links={this.state.links}
                                    handleScroll={this.handleScroll}
                                />
                        </Element>
                        <Element 
                            name="Problem"
                            className="project__block">
                                <Step 
                                    step="Problem"
                                    color={this.state.color}
                                />
                                <h2>Delivering on Marketing</h2>
                                <p>CUCOH is marketed as offering moments where delegates can shape their experience by selecting workshops and topics that fit their interests, in addition to our shared group events, to make our conferencec uniquely their own.</p>
                                <p>However, after reading our feedback form, I noticed that we got numerous comments indicating that they were disappointed that they didn’t get the selections they initially picked during our online registration. Since we have delegates, who come from as far as British Columbia to experience our conference, having to pay both the ticket price and travel expenses not to get the experience they thought they were going to get would be devasting.</p>
                        </Element>
                        <Takeaway 
                            type="OBSERVATION"
                            details="Selections made during registration aren’t always indicative of what delegates will attend which makes registering for our conference feel like a slot machine."
                            color={this.state.color}
                        />
                        <Element 
                            name="Define"
                            className="project__block">
                                <Step 
                                    step="Define"
                                    color={this.state.color}
                                />
                                <h2>Distilling Delegate Feedback</h2>
                                <p>Before making any changes, I conducted some exploratory research where comments and ratings from delegates over the past five years were synthesized to understand pain points and areas of opportunity within our current conference experience from a delegate perspective.</p>
                                <p>I also consulted the full executive team to ensure specific team and stakeholder goals would be maintained and to determine the inherent constraints from a conference perspective.</p>
                        </Element>
                        <Takeaway 
                            type="HOW MIGHT WE"
                            details="Enable our team to consistently deliver on a conference experience that our delegates can feel confident about at each stage of their journey?"
                            color={this.state.color}
                        />
                        <Element 
                            name="Research"
                            className="project__block">
                                <Step 
                                    step="Research"
                                    color={this.state.color}
                                />
                                <h2>Outlining our Service</h2>
                                <p>After talking with our full team and reading every transition manual I could find, I was able to construct an approximate Service Blueprint (below) for our 2016 conference.</p>
                                <p>The main takeaway was a delegate's selection was only used after the fact to inform, not guarantee, where they might be slotted, based on our room capacity, equipment, and time constraints for our conference on a first-come-first-serve basis. This process was largely behind the line of visibility, over an extended period after they have paid, which could be causing our registration process to feel like a slot machine.</p>
                                <img 
                                    className="project__deliverable" 
                                    src={Blueprint}
                                    alt=""
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Compiling Delegate Feedback</h2>
                                <p>Digging deeper, I compiled our quantitative "ratings" and qualitative "comments" from our feedback forms to understand our experience from the perspective of our delegates. In doing so, I uncovered that while this feeling of uncertainty was present during our registration process, it wasn't isolated to it. In-fact delegates felt that the amount of information on our experience and the way it was communicated throughout their end-to-end journey was inadequate, which led to this feeling of uncertainty.</p>
                                <Quotes
                                    size={this.state.quotes.cucoh.length} 
                                    quotes={this.state.quotes.cucoh}
                                    color={this.state.color}
                                />
                                <p>Furthermore, our delegates felt that elements of our experience weren't engaging enough, given their expectations that were formed based on the price-point and the way we marketed our conference. Some of the comments that led to these two themes are as follows:</p>
                                <Quotes 
                                    size={this.state.quotes.cucoh2.length}
                                    quotes={this.state.quotes.cucoh2}
                                    color={this.state.color}
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Refining Delegate Types</h2>
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
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Mapping the Delegate Journey</h2>
                                <p>With this information in mind, I focused on our Rachel persona as the primary focus of this case study as she must overcome the most barriers when it comes to first overcoming a lack of information to attend our conference and deciding whether to recommend our conference to others based on her expectations.</p>
                                <p>Using Rachel as a lens for reference, and comments from our feedback form, I constructed the following Journey Map to outline what a new delegate's experience might have been like at CUCOH 2016 as they interact with each stage of our service.</p>
                                <img 
                                    className="project__deliverable" 
                                    src={Journey}
                                    alt=""
                                />
                        </Element>
                        <Takeaway 
                            type="ROOT ISSUE"
                            details="Our annually rotating team lacks an efficient and repeatable way to process and communicate information about our conference experience to delegates at each stage of their journey. Our inability to provide concrete details in a timely and accessible manner results in CUCOH feeling confusing, disorganized, and risky, which impacts overall confidence in our brand."
                            color={this.state.color}
                        />
                        <Element 
                            name="Ideation"
                            className="project__block">
                                <Step 
                                    step="Ideation"
                                    color={this.state.color}
                                />
                                <h2>Ensuring a Consistent Experience</h2>
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
                                <Step 
                                    step="Constraints"
                                    color={this.state.color}
                                />
                                <h2>Accessible & Measurable</h2>
                                <p>The hurdle here, aside from figuring out how to implement this slotting logic, was figuring out how to build a solution within my own capabilities and those of our current and future teams. If current and future teams were unable to replicate the experience delegates had come to expect, it would ultimately hurt our delegates more in the long-run. This meant that whatever was introduced to our conference had to be easily learnable and accessible to anyone on the team.</p>
                                <p>There is also the big question of how will we know that these new systems would be worth the time commitment to implement. As outlined by our personas, two metrics worth measuring would be registration conversion rate and NPS Score as it would allow our team to determine how well our conference is living up to delegate expectations and how well we communicate our value proposition.</p>
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Tech Stack</h2>
                                <p>With these constraints as guiding principles, I sought to find technology that would allow me to automate as many processes as possible, create reusable templates, and limit the amount of new technology added to reduce the chances of “skill” being a limiting factor in enabling our team to provide important information for our delegates.</p>
                                <p>What I landed on was Squarespace, Zapier and TicketSpice which would help fill in the gaps in our experience and bring cohesion to how we organize our conference:</p>
                        </Element>
                        <Element 
                            name="Design"
                            className="project__block">
                                <Step 
                                    step="Design"
                                    color={this.state.color}
                                />
                                <h2>Synergy & Flow</h2>
                                <p>Based on my research, the limitations of our tools were impacting how information could effectively be passed between delegates and our team. In designing a new framework with the new tools I outlined above, my goal was to reshape what infrastructure we had, without scrapping what worked, to allow for more information to be effectively shared between both parties.</p>
                                <p>At a high-level the changes between the former (2016) and proposed (2019) frameworks were focused on the relationship in how information flowed between delegate and team touchpoints.</p>
                                <h4 
                                    className="project__title"
                                    style={{color: this.state.color}}>
                                    2016 Framework
                                
                                </h4>
                                <img 
                                    className="project__image" 
                                    src={OldFramework} 
                                    alt=""
                                />
                                <h4 
                                    className="project__title"
                                    style={{color: this.state.color}}>
                                    2019 Framework
                                </h4>
                                <img 
                                    className="project__image" 
                                    src={NewFramework} 
                                    alt=""
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Delegate Touchpoints</h2>
                                <p>Our delegates desired to be constantly in the loop from the moment they learned about our conference to the moment our conference ended. Using this, my goal was to create clear progression through each stage of the delegate journey with more information on what to expect, how to get help, and what to do next so that they could feel comfortable in their $150+ dollar purchase. To demonstrate this, I’ll be using the Rachel persona as a lens to guide through the high-level flow I aimed for:</p>
                                <Screen 
                                    screens={this.state.frontend}
                                />
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Team Touchpoints</h2>
                                <p>The word that comes to mind when looking at our team’s tools is “disjointed”, as different team members were in-charge of completing different actions along the delegate journey. In a way, our team was in-of itself a blocker when it came to getting information back to delegates in a timely manner. This issue was only exacerbated by the yearly rotating team which would result in members having to first learn the tools before being able to complete actions.</p>
                                <p>Due to this, the infrastructure I added was structured around automation (where possible) to allow for a constant experience each year, and consolidation, to reduce the amount of barriers needed to get information back to our audience . How these new systems work in context of the delegate journey is as follows:</p>
                                <Screen 
                                    screens={this.state.backend}
                                />
                        </Element>
                        <Element 
                            name="Impact"
                            className="project__block">
                                <Step 
                                    step="Impact"
                                    color={this.state.color}
                                />
                                <h2>Marketing Loop</h2>
                                <p>By building our conference systems and processes around our delegates for each step, we are not only creating a conference that more closely aligns to what our delegates want, but we are simultaneously influencing that word of mouth channel we don’t directly control when people hear about our conference from their friends.</p>
                                <img className="project__image" src={FullFramework} alt=""/>
                        </Element>
                        <Element 
                            className="project__block">
                                <h2>Building a Foundation</h2>
                                <p>While all the systems and processes outlined above were not able to be completed in full, a strong foundation has been set for our future teams in continuing to optimize our conference and have show promise with the following metrics:</p>
                                <Metrics />
                        </Element>
                        <Redirect 
                            link="/about"
                            cta="About Me"
                        />
                    </section>
                </div>
            </main>
            </>
        );

    }
};

export default CUCOH;