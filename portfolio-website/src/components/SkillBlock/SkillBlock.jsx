import React from 'react';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../../pages/Skills/Skills.scss";

import SkillCategory from "../SkillCategory/SkillCategory";

const SkillBlock = props => {

    return (
        <>
            {props.allSkills.map(data => {

                const {discipline, caption, skills} = data
    
                return (
    
                    <Element 
                        name={discipline}
                        className="skills__block">
                        <h2>{discipline}</h2>
                        <p>{caption}</p>
                        <SkillCategory skills={skills}/>
                    </Element>
                )
            })}
        </>
    )
};

export default SkillBlock;