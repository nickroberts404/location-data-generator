# Mirageo
Mirageo is a JavaScript library for mocking populations. It exposes methods that can be used to generate random location data, 
in the form of lat/lng objects. (`{lat: -13.667, lng: 48.956}`)

You can also limit the extent of your population by bounding box or bounding polygon.

[mirageo-server](https://github.com/nickroberts404/mirageo-server) is a tiny local server that serves data created with Mirageo, and is a good tool if you plan on eventually requesting data from a server. It also creates a single source of data that can be shared between apps/instances.

mirageo-server provides an interface for manipulating/visualizing the data.
![demo of mirageo-server](http://g.recordit.co/tUtfJRloAj.gif)

### `conjure(options)`
```js
import { conjure } from 'mirageo';
options = {
	bound: [-180, -90, 180, 90], // A WSEN bounding box, or a geoJSON polygon. Defaults to whole planet,
	count: 100, // The amount of points to return
	geojson: false // Return points as a geojson features.
};
var population = conjure(options); // [{lat: -13.667, lng: 48.956}, ...]
```

### Future Plans
I'd like to create a stateful Mirageo object as well, and allow it to alter its state periodically to create motion. Users could subscribe to an event, or poll the object when they need to. This would mimick the movement of people/ships/anything.
