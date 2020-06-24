import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Layers from "../../assets/layers/TouchBaseLayer.png";
import Hero from "../../components/Hero/Hero";

import TouchBasePreview from "../../assets/videos/TouchBasePromo.mp4";

class TouchBase extends Component {

    state = {
        links: [
            "Coming Soon"
        ],
        preview: TouchBasePreview      
    }
    
    render() {
        return (
            <>
            <Hero 
                project="touch-base"
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
                                <h1 className="project__heading">TouchBase</h1>
                                <p className="project__paragraph">TouchBase is a project I did as a one-week design challenge that aims to help people who are either looking for employment or are currently employed, manage their professional networking.</p>
                                <p className="project__paragraph">The goal is to get people to follow-up more with the people they meet and create more meaningful interactions that are akin to relationships rather than just being a +1 to their LinkedIn network count.</p>
                                <img className="project__image" src={Layers} alt=""/>
                                <p className="project__paragraph">The TouchBase experience is composed of two ecosystems. The first is the Wallet Pass Card with the Apple Wallet, which serves as an e-business card, where users can quickly add people they meet to their TouchBase network. The second, the standalone app experience, is where users can adjust their profiles, make plans, and search for potential connections without having to meet someone in person first.</p>
                                <p className="project__paragraph">Given more time, I am looking to expand on the app experience where users can find connections as there is an opportunity for mentorship in this space without having to be in the same geographical location as one-another.</p>
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

export default TouchBase;