import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./PersonaCarousel.scss";

import chevron from "../../assets/icons/chevron.svg";
import persona1 from "../../assets/images/RallyPersona.png";
import persona2 from "../../assets/images/RallyPersona2.png";
import persona3 from "../../assets/images/RallyPersona3.png";
import Persona from "../../components/Persona/Persona";

const PersonaCarousel = () => {

    return (
        <CarouselProvider
            naturalSlideWidth={3000}
            isIntrinsicHeight={true}
            totalSlides={3}
        >
            <div className="persona-carousel">
                <ButtonNext className="persona-carousel__button">
                    <img className="persona-carousel__icon--flip" src={chevron} />
                </ButtonNext>
                <ButtonBack className="persona-carousel__button">
                    <img src={chevron} />
                </ButtonBack>
            </div>
            <Slider className="persona-carousel__slider" classNameAnimation="persona-carousel__slider--animation">
                <Slide className="persona-carousel__slide" index={0}>
                <img className="persona-carousel__image" src={persona1} />
                </Slide>
                <Slide className="persona-carousel__slide" index={1}>
                    <img className="persona-carousel__image" src={persona2} />
                </Slide>
                <Slide className="persona-carousel__slide" index={2}>
                    <img className="persona-carousel__image" src={persona3} />
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};

export default PersonaCarousel;