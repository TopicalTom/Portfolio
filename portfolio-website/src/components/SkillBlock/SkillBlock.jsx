import React from 'react';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../../pages/Skills/Skills.scss";

import SkillCategory from "../SkillCategory/SkillCategory";

const SkillBlock = props => {

    const {allSkills, filter, filterBy} = props

    return (
        <>
            {allSkills.map(data => {

                const { discipline, caption, altCaption, skills } = data
    
                return (
    
                    <Element 
                        name={discipline}
                        className="skills__block">
                        <h2>{discipline}</h2>
                        <p>{filter ? altCaption : caption}</p>
                        <SkillCategory 
                            skills={skills}
                            filterBy={filterBy}
                            filter={filter}
                        />
                    </Element>
                )                
            })}
        </>
    )
};

export default SkillBlock;