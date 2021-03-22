import React from 'react';
import uuid from "react-uuid";
import "./Stats.scss";

const Stats = (props) => {

    const {stats} = props

    return (
        <article className="stats">
            {stats.map(stat => {
                const {metric, qualifier, source} = stat
                return (
                    <div 
                        className="stats__box"
                        key={uuid()}>
                        <div className="stats__card">
                            <h2 
                                className="stats__metric">
                                {metric}
                            </h2>
                            <span 
                                className="stats__qualifier">
                                {qualifier}
                            </span>
                        </div>
                        <a 
                            className="stats__source"
                            href={source}>
                            View Source
                        </a>
                    </div>
                )
            })}
        </article>
    );
};

export default Stats;