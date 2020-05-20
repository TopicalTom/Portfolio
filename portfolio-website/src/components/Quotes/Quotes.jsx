import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Quotes.scss";

import chevron from "../../assets/icons/chevron.svg";
import quotation from "../../assets/icons/quotation.svg";

const Quotes = props => {

    return (
        <CarouselProvider
            naturalSlideWidth={12000}
            isIntrinsicHeight={true}
            totalSlides={13}
        >
            <div className="quotes">
                <ButtonNext className="quotes__button">
                    <img className="quotes__icon--flip" src={chevron} alt=""/>
                </ButtonNext>
                <ButtonBack className="quotes__button">
                    <img src={chevron} alt=""/>
                </ButtonBack>
            </div>
            <Slider className="quotes__slider" classNameAnimation="quotes__slider--animation">
                {props.quotes.map(item => {

                    const {quote, takeaway, category, order} = item

                    return (
                        <Slide className="quotes__slide" index={order}>
                            <div className="quotes__content">
                                <img className="quotes__octicons" src={quotation} alt=""/>
                                <h3 className="quotes__takeaway">{takeaway}</h3>
                                <h4 className="quotes__caption">{quote}</h4>
                                <h4 className="quotes__category">{category}</h4>
                            </div>
                        </Slide>
                    )
                })}
            </Slider>
        </CarouselProvider>
    );
};

export default Quotes;