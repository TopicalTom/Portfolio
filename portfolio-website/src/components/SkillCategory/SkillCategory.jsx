import React from 'react';

import SkillList from "../SkillList/SkillList";

const SkillCategory = (props) => {

    return (
        <>
            {props.skills.map(data => {
    
                const {tools, category} = data

                return (
                    <>
                        <h4>{category}</h4>
                        <SkillList tools={tools}/>
                    </>
                )
            })}
        </>
    )
};

export default SkillCategory;