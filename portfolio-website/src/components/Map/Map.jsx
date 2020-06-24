import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.scss";

import Marker from "../../assets/icons/MapMarker.svg";

mapboxgl.accessToken = "pk.eyJ1Ijoic2hhbWFsMWFtYSIsImEiOiJjam1idG5uaGQwOGdlM3BwZXptODNzbDJhIn0.pGrvcOHqycGAtH7ji2K6MQ";

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -79.3984,
            lat: 43.6466,
            zoom: 2,
            style: "mapbox://styles/mapbox/dark-v9"
            //style: "mapbox://styles/shamal1ama/ck6eo9e4j2ejk1inxvfh9p4au"
        };
    }
    
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: this.state.style,
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.once("load", function () {
            /* Image: An image is loaded and added to the map. */
            map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
                if (error) throw error;
                map.addImage("custom-marker", image);
                /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
                map.addLayer({
                id: "markers",
                type: "symbol",
                    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
                    source: {
                        type: "geojson",
                        data: {
                            type: 'FeatureCollection',
                            features: [
                                {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: "Point",
                                    coordinates: [-79.3984, 43.6466]
                                }
                                }
                            ]
                        }
                    },
                    layout: {
                        "icon-image": "custom-marker",
                    }
                });
            });
            map.flyTo({
                lng: this.lng,
                lat: this.lat,
                zoom: 12,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });
    }

    render() {
        return (
                <div 
                    ref={el => this.mapContainer = el}
                    className="mapContainer"
                />
        )
    }
}