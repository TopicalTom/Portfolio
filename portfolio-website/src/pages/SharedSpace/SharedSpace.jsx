import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

// Components
import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Hero from "../../components/Hero/Hero";
import Tag from "../../components/Tag/Tag";
import Prototype from '../../components/Prototype/Prototype';
import DynamicCards from '../../components/DynamicCards/DynamicCards';

// Data
import projectsData from "../../data/projectsData";

class Homediate extends Component {

    state = {
        links: [
            "Coming Soon"
        ],
        color: projectsData[3].color,
        preview: projectsData[3].preview,
        assets: projectsData[3].assets    
    }
    
    render() {

        const {links, color, preview, assets} = this.state

        return (
            <>
            <Hero 
                project="homediate"
                preview={preview}
                type="app"
            />
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Homediate"
                            links={links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Coming Soon"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <h1>Homediate</h1>
                                <Tag 
                                    type="iMessage App"
                                    role="Independent"
                                    duration="Upcoming"
                                    color={color}
                                />
                                <p>Homediate is a design challenge I did for a job application that aims to help people mediate household tasks and utility costs within a shared space.</p>
                                <p>The goal is to get people to be accountable for contributing their part to a household, be it chores or otherwise, which is achieved by tying the percent calculation of variable utility costs to the completion of daily, weekly, and even monthly assigned tasks.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <Prototype 
                                    video={preview}
                                />   
                            </div>
                            <div 
                                className="project__sub-block">
                                <p>The Homediate experience is built as an iMessage App to leverage a pre-existing chat infrastructure since households typically have a group chat for communicating important household events and needs.</p>
                                <p>Given more time, I am interested in exploring how this app experience could utilize Apple business chat to connect with landlords to allow users to request fixes or pay their percentage of the rent with the adjusted utility costs factored in.</p>
                                <Redirect 
                                    link="/project/rally"
                                    cta="Next Project: Rally"
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

export default Homediate;