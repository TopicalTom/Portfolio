import React, { Component } from 'react';

import ProjectCard from "../ProjectCard/ProjectCard";
import ContactCard from "../ContactCard/ContactCard";

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import SharedSpacePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";
import DegreeCard from '../DegreeCard/DegreeCard';

export default class DynamicCards extends Component {


    render(){

        return (
            <>
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
                {/*
                <ProjectCard
                    project={"Rally"}
                    type={"Standalone App"}
                    preview={RallyPreview}
                    link={"rally"}
                />
                */}
            </>
        );

        /*
        return (
            <>
                <ContactCard/>
            </>
        );
        */
    }
};