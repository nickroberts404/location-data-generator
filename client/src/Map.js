import React, {Component} from 'react';
import { mapboxKey, mapboxStyle } from '../../config';
const mapbox = require('mapbox-gl/dist/mapbox-gl.js');
mapbox.accessToken = mapboxKey;

export default class Map extends Component {
	
	componentDidMount() {
		new mapbox.Map({
			container: 'map',
			style: mapboxStyle,
			center: [-97.7431, 30.2672],
			zoom: 3,
		});
	}

	render() {
		return <div id="map" className="map"></div>
	}
}