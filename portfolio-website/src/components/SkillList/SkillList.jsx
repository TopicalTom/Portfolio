import React from 'react';

import SkillCard from "../SkillCard/SkillCard";
import "../../pages/Skills/Skills.scss";

const SkillList = (props) => {

    const {tools, filter, filterBy} = props

    return (
        <>
            {tools.map(content => {
                const { logo, tool, description, status } = content
                return (
                    <SkillCard 
                        icon={logo}
                        tool={tool}
                        description={description}
                        status={status}
                        filter={filter}
                        filterBy={filterBy}
                    /> 
                )
            })}
        </>
    )
};

export default SkillList;