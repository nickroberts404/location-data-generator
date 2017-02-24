import React, {Component, PropTypes} from 'react';
import { mapboxKey, mapboxStyle } from '../../config';
import equal from 'deep-equal';
const mapbox = require('mapbox-gl/dist/mapbox-gl.js');
const MapboxDraw = require('@mapbox/mapbox-gl-draw');
mapbox.accessToken = mapboxKey;

export default class MainMap extends Component {

	constructor(props) {
		super(props);
		this.state = {map: null, nodes: props.nodes}
	}

	componentDidMount() {
		this._mapLoaded = false;
		const draw = new MapboxDraw({
			displayControlsDefault: false,
		    controls: {
		        polygon: true,
		        trash: true
		    }
		});
		const map = new mapbox.Map({
			container: 'map',
			style: mapboxStyle,
			center: [-97.7431, 30.2672],
			zoom: 3,
		});
		map.addControl(draw);
		map.on('draw.create', () => {
			var allFeatures = draw.getAll().features
			if(allFeatures.length > 1) draw.delete(allFeatures[0].id);
			this.updateBoundingFeature(draw);
		});
		map.on('draw.delete', () => {
			this.updateBoundingFeature(draw);
		});
		map.on('draw.update', () => {
			this.updateBoundingFeature(draw);
		});
		map.on('load', ()=> this._mapLoaded = true);
		this.setState({map});
	}

	updateBoundingFeature(draw) {
		var polygon = draw.getAll().features[0] || null;
		this.props.updateSettings({boundingFeature: polygon})
	}

	componentWillReceiveProps(nextProps) {
		const { map, nodes } = this.state;
		// If the server did not send different nodes than the ones we had before, do not update.
		if(!equal(nextProps.nodes, nodes)) {
			if(!this._mapLoaded) map.on('load', ()=> addPoints(nextProps.nodes, map))
			else addPoints(nextProps.nodes, map);
			this.setState({nodes: nextProps.nodes});
		}
	}

	render() {
		return <div id="map" className="map"></div>
	}
}

MainMap.propTypes = {
	nodes: PropTypes.object.isRequired,
	updateSettings: PropTypes.func
}

const addPoints = (points, map) => {
	if(!points) return false;
	// Remove old layers
	if(map.getSource('points')) map.removeSource('points');
	if(map.getLayer('points')) map.removeLayer('points');

	const circleRadius = {stops: [[8, 3], [11, 7], [16, 15]]};
	map.addSource('points', {
		type: 'geojson',
		data: points,
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
}