import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Quotes.scss";

import chevron from "../../assets/icons/chevron.svg";
import quotation from "../../assets/icons/quotation.svg";

const Quotes = props => {

    const {quotes, size, color} = props

    return (
        <CarouselProvider
            naturalSlideWidth={12000}
            isIntrinsicHeight={true}
            totalSlides={size}
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
                {quotes.map(item => {

                    const {quote, takeaway, category, order} = item

                    return (
                        <Slide className="quotes__slide" index={order}>
                            <div className="quotes__content">
                                <svg 
                                    className="quotes__octicons" 
                                    viewBox="0 0 56 48"
                                    style={{fill: color}}>
                                    <path d="M25.9,28.2 L25.9,40.9 C25.9,42.7 25.3,44.2 24,45.4 C22.8,46.6 21.3,47.3 19.5,47.3 L6.8,47.3 C5,47.3 3.5,46.7 2.3,45.4 C1.1,44.2 0.4,42.7 0.4,40.9 L0.4,17.7 C0.4,15.4 0.8,13.2 1.7,11.1 C2.6,9 3.8,7.2 5.3,5.7 C6.8,4.2 8.6,3 10.7,2.1 C12.8,1.2 15,0.8 17.3,0.8 L19.4,0.8 C20,0.8 20.5,1 20.9,1.4 C21.3,1.8 21.5,2.3 21.5,2.9 L21.5,7.1 C21.5,7.7 21.3,8.2 20.9,8.6 C20.5,9 20,9.2 19.4,9.2 L17.3,9.2 C15,9.2 13,10 11.3,11.7 C9.6,13.4 8.8,15.3 8.8,17.7 L8.8,18.8 C8.8,19.7 9.1,20.4 9.7,21 C10.3,21.6 11.1,21.9 11.9,21.9 L19.3,21.9 C21.1,21.9 22.6,22.5 23.8,23.8 C25.3,25 25.9,26.5 25.9,28.2 Z M55.5,28.2 L55.5,40.9 C55.5,42.7 54.9,44.2 53.6,45.4 C52.4,46.6 50.9,47.3 49.1,47.3 L36.5,47.3 C34.7,47.3 33.2,46.7 32,45.4 C30.8,44.2 30.1,42.7 30.1,40.9 L30.1,17.7 C30.1,15.4 30.5,13.2 31.4,11.1 C32.3,9 33.5,7.2 35,5.7 C36.5,4.2 38.3,3 40.4,2.1 C42.5,1.2 44.7,0.8 47,0.8 L49.1,0.8 C49.7,0.8 50.2,1 50.6,1.4 C51,1.8 51.2,2.3 51.2,2.9 L51.2,7.1 C51.2,7.7 51,8.2 50.6,8.6 C50.2,9 49.7,9.2 49.1,9.2 L47,9.2 C44.7,9.2 42.7,10 41,11.7 C39.3,13.4 38.5,15.3 38.5,17.7 L38.5,18.8 C38.5,19.7 38.8,20.4 39.4,21 C40,21.6 40.8,21.9 41.6,21.9 L49,21.9 C50.8,21.9 52.3,22.5 53.5,23.8 C54.9,25 55.5,26.5 55.5,28.2 Z" fill-rule="nonzero"></path>
                                </svg>
                                <h3 className="quotes__takeaway">{takeaway}</h3>
                                <h4 className="quotes__caption">{quote}</h4>
                                <h4 
                                    className="quotes__category" 
                                    style={{color: color}}>
                                    {category}
                                </h4>
                            </div>
                        </Slide>
                    )
                })}
            </Slider>
        </CarouselProvider>
    );
};

export default Quotes;