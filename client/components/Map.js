import React, {Component} from 'react';
import 'whatwg-fetch';
import { mapboxKey, mapboxStyle } from '../../config';
const mapbox = require('mapbox-gl/dist/mapbox-gl.js');
mapbox.accessToken = mapboxKey;

export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {map: null}
	}

	componentDidMount() {
		const map = new mapbox.Map({
			container: 'map',
			style: mapboxStyle,
			center: [-97.7431, 30.2672],
			zoom: 3,
		});
		fetch('/api')
			.then(res => res.json())
			.then(res => this.addPoints(res, map))
		this.setState({map});
	}

	addPoints(points, map) {
		const geoJSON = getGeoJSON(points, i => [i.lng, i.lat]);
		map.on('load', () => {
			const circleRadius = {stops: [[8, 3], [11, 7], [16, 15]]};
			map.addSource('points', {
				type: 'geojson',
				data: geoJSON,
			});
			map.addLayer({
				id: 'points',
				type: 'circle',
				source: 'points',
				paint: {
					'circle-radius': circleRadius,
					'circle-color': '#1eaedb',
				}
			})
		})
	}

	render() {
		return <div id="map" className="map"></div>
	}
}

const getGeoJSON = (items, getCoordinates) => {
	let geo = {
		type: "FeatureCollection"
	}
	geo.features = items.map(i => ({
		type: "Feature",
		geometry: {
			type: "Point",
			coordinates: getCoordinates(i),
		}
	}))
	return geo;
}