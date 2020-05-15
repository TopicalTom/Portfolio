import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.scss";

mapboxgl.accessToken = "pk.eyJ1Ijoic2hhbWFsMWFtYSIsImEiOiJjam1idG5uaGQwOGdlM3BwZXptODNzbDJhIn0.pGrvcOHqycGAtH7ji2K6MQ";

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -79.3832,
            lat: 43.6532,
            zoom: 11,
            //style: "mapbox://styles/mapbox/dark-v9"
            style: "mapbox://styles/shamal1ama/ck6eo9e4j2ejk1inxvfh9p4au"
        };
    }
    
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: this.state.style,
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

            if (window.localStorage.getItem("global-theme") == "light") {
                this.setState({
                    style: "mapbox://styles/shamal1ama/ck6eo9e4j2ejk1inxvfh9p4au"
                })
            } else if (window.localStorage.getItem("global-theme") == "dark") {
                this.setState({
                    style: "mapbox://styles/mapbox/dark-v9"
                })
            }
    }

    render() {
        return (
            <div>
                <div 
                    ref={el => this.mapContainer = el}
                    className="mapContainer"
                />
            </div>
        )
    }
}