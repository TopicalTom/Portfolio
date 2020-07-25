import React from 'react';
import "./Stats.scss";

const Stats = (props) => {

    const {statistic} = props

    return (
        <article className="stats">
            <div className="stats__card">
                <h2 className="stats__metric">85%</h2>
                <span className="stats__qualifier">Of positions are filled through networking</span>
            </div>
            <div className="stats__card">
                <h2 className="stats__metric">49%</h2>
                <span className="stats__qualifier">Don't maintain professional relationships</span>
            </div>
            <div className="stats__card">
                <h2 className="stats__metric">25%</h2>
                <span className="stats__qualifier">Don't invest any time in networking</span>
            </div>
        </article>
    );
};

export default Stats;