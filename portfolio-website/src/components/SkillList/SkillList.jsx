import React from 'react';

import SkillCard from "../SkillCard/SkillCard";

const SkillList = (props) => {

    return (
        <>
            {props.tools.map(content => {
    
                const { logo, tool, description, status } = content
    
                return (
                    <SkillCard 
                        icon={logo}
                        tool={tool}
                        description={description}
                        status={status}
                    /> 
                )
            })}
        </>
    )
};

export default SkillList;