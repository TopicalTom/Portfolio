import React, { Component } from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import ProjectCard from "../ProjectCard/ProjectCard";
import ResumeCard from "../ResumeCard/ResumeCard";
import Map from "../Map/Map";

import "./DynamicCards.scss"

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import SharedSpacePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";

export default class DynamicCards extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render(){

        if (window.location.href === "https://topicaltom.netlify.app/about") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <Map />
                    </div>
                    <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/project" || window.location.href === "https://topicaltom.netlify.app/project/rally" ) {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Wallet Pass & App"}
                        preview={TouchBasePreview}
                        link={"touch-base"}
                    />
                    <ProjectCard
                        project={"Homediate"}
                        type={"iMessage App"}
                        preview={SharedSpacePreview}
                        link={"shared-space"}
                    />    
                    </div>
                    <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/project/touch-base") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"Homediate"}
                        type={"iMessage App"}
                        preview={SharedSpacePreview}
                        link={"shared-space"}
                    />
                    <ProjectCard
                        project={"Rally"}
                        type={"Standalone App"}
                        preview={RallyPreview}
                        link={"rally"}
                    />    
                    </div>
                    <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/project/shared-space" ) {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"Rally"}
                        type={"Standalone App"}
                        preview={RallyPreview}
                        link={"rally"}
                    />
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Wallet Pass & App"}
                        preview={TouchBasePreview}
                        link={"touch-base"}
                    />
                    </div>
                    <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/skills") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <ResumeCard />
                        <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dynamic"> 
                    <span className="dynamic__scroll" onClick={ () => this.scrollToTop()}>Back to top</span>
                </div>
            )
        }
    }
};