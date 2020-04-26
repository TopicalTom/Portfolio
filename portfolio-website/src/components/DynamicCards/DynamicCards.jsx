import React, { Component } from 'react';

import ProjectCard from "../ProjectCard/ProjectCard";
import ResumeCard from "../ResumeCard/ResumeCard";
import PersonalCard from "../PersonalCard/PersonalCard";
import Map from "../Map/Map";

import "./DynamicCards.scss"

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import SharedSpacePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";

export default class DynamicCards extends Component {

    render(){

        if (window.location.href === "http://localhost:3000/about") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <PersonalCard />
                    </div>
                </div>
            )
        } else if (window.location.href === "http://localhost:3000/project" || window.location.href == "http://localhost:3000/project/rally" ) {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--row">
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Wallet Pass"}
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
                </div>
            )
        } else if (window.location.href === "http://localhost:3000/project/touch-base") {
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
                </div>
            )
        } else if (window.location.href === "http://localhost:3000/project/shared-space" ) {
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
                        type={"Wallet Pass"}
                        preview={TouchBasePreview}
                        link={"touch-base"}
                    />
                    </div>
                </div>
            )
        } else if (window.location.href === "http://localhost:3000/skills") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <ResumeCard />
                    </div>
                </div>
            )
        } else if (window.location.href === "http://localhost:3000/contact") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <Map />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dynamic">

                </div>
            )
        }
    }
};