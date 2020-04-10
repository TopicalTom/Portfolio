import React, { Component } from 'react';

import ProjectCard from "../ProjectCard/ProjectCard";
import DegreeCard from "../DegreeCard/DegreeCard";
import PersonalCard from "../PersonalCard/PersonalCard";

import "./DynamicCards.scss"

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import SharedSpacePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";

import UX from "../../assets/images/UXCertificate.png";
import PM from "../../assets/images/ProductManagementCertificate.png";
import iOS from "../../assets/images/iOSDevCertificate.png";



export default class DynamicCards extends Component {


    render(){

        console.log(window.location.href)

        if (window.location.href === "http://localhost:3000/about") {
            return (
                <div className="dynamic">
                    <div className="dynamic__container dynamic__container--column">
                        <PersonalCard />
                    </div>
                </div>
            )
        } else if (window.location.href == "http://localhost:3000/project" || window.location.href == "http://localhost:3000/project/rally" ) {
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
        } else if (window.location.href == "http://localhost:3000/project/touch-base") {
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
        } else if (window.location.href == "http://localhost:3000/project/shared-space" ) {
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
                    <div className="dynamic__container dynamic__container--row">
                        <DegreeCard 
                            degree={UX}
                            course={"https://brainstation.io/course-package/user-experience-immersive/toronto"}
                        />
                        <DegreeCard 
                            degree={UX}
                            course={"https://brainstation.io/course-package/web-development-immersive/toronto"}
                        />
                        <DegreeCard 
                            degree={iOS}
                            course={"https://brainstation.io/course-package/intro-to-ios-development/toronto"}
                        />
                        <DegreeCard 
                            degree={PM}
                            course={"https://brainstation.io/course-package/product-management/toronto"}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dynamic">

                </div>
            )
        }

        /*
        return (
            <>
                <ContactCard/>
            </>
        );
        */
    }
};