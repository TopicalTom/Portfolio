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
            style: "mapbox://styles/mapbox/dark-v9"
        };
    }
    
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: this.state.style,
            //style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
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