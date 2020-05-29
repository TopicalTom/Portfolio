import React from 'react';
import "./Screen.scss";

const Screen = (props) => {

    const {screens} = props
    return (
    <>
    {screens.map(item => {

        const {preview, caption, touchpoint, success, kpi, type} = item

        return (
            <article className="screen">
                <img
                    className={`screen__preview screen__preview--${type}`} 
                    src={preview}
                />
                <div className="screen__content">
                    <h4 
                        className="screen__caption">
                        {caption}
                    </h4> 
                    <h4 
                        className="screen__metric">
                        <strong>Touch Point: </strong>{touchpoint}
                    </h4>
                    <h4 
                        className="screen__metric">
                        <strong>Success: </strong>{success}
                    </h4>
                    <h4 
                        className="screen__metric">
                        <strong>KPI: </strong>{kpi}
                    </h4>
                </div>
            </article>
        )
    })}
    </>
    )
};

export default Screen;