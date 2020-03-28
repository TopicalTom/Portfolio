import React from 'react';
import "./Footer.scss";

import ProjectCard from "../ProjectCard/ProjectCard";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__cards">
                    <ProjectCard
                        project={"TouchBase"}
                        type={"Wallet Pass"}
                        color={"blue"}
                    />
                    <ProjectCard
                        project={"SharedSpace"}
                        type={"iMessage App"}
                        color={"green"}
                    />
                </div>
                <div className="footer__links">

                </div>
            </div>
        </footer>
    );
};

export default Footer;