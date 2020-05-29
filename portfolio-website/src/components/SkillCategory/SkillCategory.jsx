import React from 'react';

import SkillList from "../SkillList/SkillList";
import "../../pages/Skills/Skills.scss";

const SkillCategory = (props) => {

    const {skills, filter, filterBy} = props

    if (filter !== true) {
        return (
            <>
                {skills.map(data => {
                    const {tools, category} = data
                    return (
                        <>
                            <h4 
                                className="skills__category">
                                {category}
                            </h4>
                            <div className="skills__box">
                                <SkillList 
                                    tools={tools}
                                    filterBy={filterBy}
                                    filter={filter}
                                />
                            </div>
                        </>
                    )
                })}
            </>
        )
    } else {

        return (
            <>
                <h4 className="skills__category">
                    {filterBy}
                </h4>
                <div className="skills__box">
                {skills.map(data => {
                    const {tools} = data
            
                    return (
                        <SkillList 
                            tools={tools}
                            filterBy={filterBy}
                            filter={filter}
                        />
                    )
                })}
                </div>
            </>
        )
    }
};

export default SkillCategory;