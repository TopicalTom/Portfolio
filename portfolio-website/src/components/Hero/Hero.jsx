import React, {Component} from 'react';
import "./Hero.scss";

import hangoutlayer from "../../assets/layers/HangoutLayer.png";
import grabdrinkslayer from "../../assets/layers/GrabDrinksLayer.png";
import getfoodlayer from "../../assets/layers/GetFoodLayer.png";
import beactivelayer from "../../assets/layers/BeActiveLayer.png";
import explorelayer from "../../assets/layers/ExploreLayer.png";
import gooutlayer from "../../assets/layers/GoOutLayer.png";
import beproductivelayer from "../../assets/layers/BeProductiveLayer.png";

let layers = [
    hangoutlayer,
    grabdrinkslayer,
    getfoodlayer,
    beactivelayer,
    explorelayer,
    gooutlayer,
    beproductivelayer
]

let colors = [
    "hangout",
    "grabdrinks",
    "getfood",
    "beactive",
    "explore",
    "goout",
    "beproductive"
]

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            layerPath: layers[0],
            colors: colors[0]
        };
    }

    componentDidMount() {

        for (let i=0; i < layers.length; i++) {

            setTimeout(() => {
                this.setState({ 
                    layerPath: layers[i],
                    colors: colors[i]
                })
            }, i*8000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <section className="hero">
                <div className="hero__container">
                    <img 
                        className="hero__layer"
                        src={this.state.layerPath} 
                    />
                </div>
                <div className={`hero__background hero__background-${this.state.colors}`}/>
            </section>
        );
    }
};

export default Hero;