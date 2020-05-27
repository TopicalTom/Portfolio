import React from 'react';
import "./Metrics.scss";

const Metrics = () => {

    return (
        <article className="metrics">
            <div className="metrics__container metrics__container--first">
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">8.4</h2>
                    <span className="metrics__details">CUCOH Website Rating (2019)</span>
                    <span className="metrics__previous">No Data (2016)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">9.1</h2>
                    <span className="metrics__details">Online Registration Rating (2018) </span>
                    <span className="metrics__previous">Prev: 8.3 (2016)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">8.4</h2>
                    <span className="metrics__details">Coat Check Rating (2019)</span>
                    <span className="metrics__previous">Prev: 6.9 (2017)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">8.6</h2>
                    <span className="metrics__details">Theme Discussion Rating (2019)</span>
                    <span className="metrics__previous">Prev: 6.5 (2016)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">8.6</h2>
                    <span className="metrics__details">Breakout Sessions Rating (2019)</span>
                    <span className="metrics__previous">Prev: 8.1 (2016)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">35K</h2>
                    <span className="metrics__details">Unique Visitors on website between 2017 - 2019</span>
                    <span className="metrics__previous">No Data (2016)</span>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">130K</h2>
                    <span className="metrics__details">Pages Viewed on website between 2017 - 2019</span>
                    <h5 className="metrics__previous">No Data (2016)</h5>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">5.2%</h2>
                    <span className="metrics__details">Registration Mailing List Opt-In Rate</span>
                    <h5 className="metrics__previous">No Data (2016)</h5>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">68</h2>
                    <span className="metrics__details"># of Mailing List Leads who became a Delegate (2019)</span>
                    <h5 className="metrics__previous">No Data (2016)</h5>
                </div>
                <div className="metrics__card metrics__card--normal">
                    <h2 className="metrics__metric">60%</h2>
                    <span className="metrics__details">Online Registration Conversion Rate (2019)</span>
                    <h5 className="metrics__previous">Prev: 22.7% (2017)</h5>
                </div>
                <div className="metrics__card metrics__card--overall">
                    <h2 className="metrics__metric metrics__metric--overall">8.1</h2>
                    <span className="metrics__details metrics__details--overall">CUCOH Overall Experience Rating (2019)</span>
                    <h5 className="metrics__previous metrics__previous--overall">Prev: 7.8 (2016)</h5>
                </div>
                <div className="metrics__card metrics__card--overall">
                    <h2 className="metrics__metric metrics__metric--overall">+38</h2>
                    <span className="metrics__details metrics__details--overall">Net Promoter Score (NPS) for CUCOH (2019)</span>
                    <h5 className="metrics__previous metrics__previous--overall">No Data (2016)</h5>
                </div>
            </div>
        </article>
    );
};

export default Metrics;