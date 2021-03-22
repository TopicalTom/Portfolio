import React from 'react';
import "./DynamicCards.scss";

import App from "../App/App";

//import preview from "../../assets/videos/ShopFeatureOverview.mp4";

const DynamicCards = (props) => {

    const {preview, color} = props

    return (
        <section className="dynamic">
            <div className="dynamic__container">
                <a
                    className="dynamic__web"
                    aria-label="Interactive Prototype Link"
                    href={`https://framer.com/share/Shop--ju55T5OIS0sVE1NZSjdV/t1lB5JvSL?fullscreen=1&highlights=0`}> 
                    <article 
                        className="dynamic__card"
                        style={{background: color}}>
                        <div className="dynamic__card-section--details">
                            <h2 
                                className="dynamic__card-header">
                                Try it Yourself
                            </h2>
                            <p 
                                className="dynamic__card-description">
                                Click to try out an interactive prototype!
                            </p>
                            <svg className="dynamic__card-arrow" viewBox="0 0 642 344" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-435.000000, 0.000000)" fill="#ffffff">
                                    <path d="M443.708095,151.728571 C432.528095,162.908571 432.528095,181.050476 443.708095,192.271429 L587.041429,335.604762 C598.221429,346.784762 616.363333,346.784762 627.584286,335.604762 C638.764286,324.424762 638.764286,306.282857 627.584286,295.061905 L533.189048,200.666667 L1047.97952,200.666667 C1063.8281,200.666667 1076.64619,187.848571 1076.64619,172 C1076.64619,156.151429 1063.8281,143.333333 1047.97952,143.333333 L533.189048,143.333333 L627.584286,48.9380952 C633.194762,43.327619 635.979524,35.9971429 635.979524,28.6666667 C635.979524,21.3361905 633.194762,14.0057143 627.584286,8.3952381 C616.404286,-2.7847619 598.221429,-2.7847619 587.041429,8.3952381 L443.708095,151.728571 Z" transform="translate(755.984643, 172.000000) scale(-1, 1) translate(-755.984643, -172.000000) "></path>
                                </g>
                            </svg>
                        </div>
                        <div className="dynamic__card-section--preview">
                            <App 
                                project={preview}
                                preview={preview}
                                autoPlay
                                loop
                            />
                        </div>
                    </article>
                </a>
                <div
                    className="dynamic__mobile"> 
                    <article 
                        className="dynamic__card"
                        style={{background: color}}>
                        <h3 
                            className="dynamic__card-header">
                            Try it Yourself
                        </h3>
                        <p 
                            className="dynamic__card-description">
                            Visit on web to view an interactive prototype 
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default DynamicCards;

/*
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
*/