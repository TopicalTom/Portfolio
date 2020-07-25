import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Layers from "../../assets/layers/HomediateLayer.png";
import Hero from "../../components/Hero/Hero";
import Tag from "../../components/Tag/Tag";

import HomediatePreview from "../../assets/videos/HomediatePromo.mp4";

class Homediate extends Component {

    state = {
        links: [
            "Coming Soon"
        ],
        color: "#5ECB84",
        preview: HomediatePreview      
    }
    
    render() {

        const {color} = this.state

        return (
            <>
            <Hero 
                project="homediate"
                preview={this.state.preview}
                type="app"
            />
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
                                <h1 className="project__heading">Homediate</h1>
                                <Tag 
                                    type="iMessage App"
                                    role="Independent"
                                    duration="Upcoming"
                                    color={color}
                                />
                                <p className="project__paragraph">Homediate is a design challenge I did for a job application that aims to help people mediate household tasks and utility costs within a shared space.</p>
                                <p className="project__paragraph">The goal is to get people to be accountable for contributing their part to a household, be it chores or otherwise, which is achieved by tying the percent calculation of variable utility costs to the completion of daily, weekly, and even monthly assigned tasks.</p>
                                <img className="project__image" src={Layers} alt=""/>
                                <p className="project__paragraph">The Homediate experience is built as an iMessage App to leverage a pre-existing chat infrastructure since households typically have a group chat for communicating important household events and needs.</p>
                                <p className="project__paragraph">Given more time, I am interested in exploring how this app experience could utilize Apple business chat to connect with landlords to allow users to request fixes or pay their percentage of the rent with the adjusted utility costs factored in.</p>
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

export default Homediate;