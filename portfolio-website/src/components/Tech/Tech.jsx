import React from 'react';
import "./Tech.scss";

const Tech = (props) => {

    const {tech, type} = props

        return (
            <article className="tech">
                {tech.map(content => {
                const { link, logo, name } = content
                return (
                    <a 
                        className={`tech__container tech__container--${name}`}
                        href={link}>
                    <img className="tech__logo" src={logo} alt=""/>
                </a>
                )
            })}
            </article>
        );
};

export default Tech;