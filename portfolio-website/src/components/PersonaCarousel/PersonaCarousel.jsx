import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./PersonaCarousel.scss";

import chevron from "../../assets/icons/chevron.svg";

const PersonaCarousel = (props) => {

    const {persona, size} = props

    return (
        <CarouselProvider
            naturalSlideWidth={3000}
            isIntrinsicHeight={true}
            totalSlides={size}
        >
            <div className="persona-carousel">
                <ButtonNext className="persona-carousel__button">
                    <img className="persona-carousel__icon--flip" src={chevron} alt=""/>
                </ButtonNext>
                <ButtonBack className="persona-carousel__button">
                    <img src={chevron} alt=""/>
                </ButtonBack>
            </div>
            <Slider className="persona-carousel__slider" classNameAnimation="persona-carousel__slider--animation">
            {persona.map(item => {

                const {deliverable, order} = item

                return (
                    <Slide className="persona-carousel__slide" index={order}>
                        <img className="persona-carousel__image" src={deliverable} alt=""/>
                    </Slide>
                )
            })}
            </Slider>
        </CarouselProvider>
    );
};

export default PersonaCarousel;