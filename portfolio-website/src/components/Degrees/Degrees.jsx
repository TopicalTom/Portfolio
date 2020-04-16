import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./Degrees.scss";

import UX from "../../assets/images/UXCertificate.png";
import Web from "../../assets/images/WebDevDiploma.png";
import PM from "../../assets/images/ProductManagementCertificate.png";
import iOS from "../../assets/images/iOSDevCertificate.png";
import chevron from "../../assets/icons/chevron.svg";

const Degrees = () => {

    return (
        <CarouselProvider
            naturalSlideWidth={352}
            isIntrinsicHeight={true}
            totalSlides={2}
        >
            <div className="degrees">
                <ButtonNext className="degrees__button">
                    <img className="degrees__icon--flip" src={chevron} />
                </ButtonNext>
                <ButtonBack className="degrees__button">
                    <img src={chevron} />
                </ButtonBack>
            </div>
            <Slider className="degrees__slider" classNameAnimation="degrees__slider--animation">
                <Slide className="degrees__slide" index={0}>
                    <a 
                        href="https://brainstation.io/course-package/user-experience-immersive/toronto">
                        <img src={UX} className="degrees__certificate" />
                    </a>
                    <a
                        href="https://brainstation.io/course-package/web-development-immersive/toronto">
                        <img src={Web} className="degrees__certificate" />
                    </a>
                </Slide>
                <Slide className="degrees__slide" index={1}>
                    <a
                        href="https://brainstation.io/course-package/intro-to-ios-development/toronto">
                        <img src={iOS} className="degrees__certificate" />
                    </a>
                    <a
                        href="https://brainstation.io/course-package/product-management/toronto">
                        <img src={PM} className="degrees__certificate" />
                    </a>
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};

export default Degrees;