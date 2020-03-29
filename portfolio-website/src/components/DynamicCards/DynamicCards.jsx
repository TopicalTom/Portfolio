import React, { Component } from 'react';

import ProjectCard from "../ProjectCard/ProjectCard";

import TouchBasePreview from "../../assets/images/TouchBasePreview.png";
import SharedSpacePreview from "../../assets/images/SharedSpacePreview.png";
import RallyPreview from "../../assets/images/RallyPreview.png";

export default class DynamicCards extends Component {

    render(){

        return (
            <>
                <ProjectCard
                    project={"TouchBase"}
                    type={"Wallet Pass"}
                    color={"#4D7FFF"}
                    preview={TouchBasePreview}
                    link={"touch-base"}
                />
                <ProjectCard
                    project={"Homediate"}
                    type={"iMessage App"}
                    color={"#2CB977"}
                    preview={SharedSpacePreview}
                    link={"shared-space"}
                />
                {/*
                <ProjectCard
                    project={"Rally"}
                    type={"Standalone App"}
                    color={"#FD2D55"}
                    preview={RallyPreview}
                    link={" "}
                />
                */}
            </>
        );
    }
};