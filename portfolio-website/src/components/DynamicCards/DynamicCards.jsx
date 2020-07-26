import React, { Component } from 'react';

import ProjectCard from "../ProjectCard/ProjectCard";
import ResumeCard from "../ResumeCard/ResumeCard";

import "./DynamicCards.scss"

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import HomediatePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";

export default class DynamicCards extends Component {

    render(){

        if (window.location.href === "https://topicaltom.netlify.app/project" || window.location.href === "https://topicaltom.netlify.app/project/rally") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Mobile App"}
                        preview={TouchBasePreview}
                        link={"touch-base"}
                    />
                    <ProjectCard
                        project={"Homediate"}
                        type={"iMessage App"}
                        preview={HomediatePreview}
                        link={"homediate"}
                    />    
                    </div>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/project/touch-base") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"Homediate"}
                        type={"iMessage App"}
                        preview={HomediatePreview}
                        link={"homediate"}
                    />
                    <ProjectCard
                        project={"Rally"}
                        type={"Mobile App"}
                        preview={RallyPreview}
                        link={"rally"}
                    />    
                    </div>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/project/homediate" || window.location.href === "https://topicaltom.netlify.app/project/cucoh" ) {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"Rally"}
                        type={"Mobile App"}
                        preview={RallyPreview}
                        link={"rally"}
                    />
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Mobile App"}
                        preview={TouchBasePreview}
                        link={"touch-base"}
                    />
                    </div>
                </div>
            )
        } else if (window.location.href === "https://topicaltom.netlify.app/skills" || window.location.href === "https://topicaltom.netlify.app/about") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <ResumeCard />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dynamic"/> 
            )
        }
    }
};