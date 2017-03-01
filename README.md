# Mirage
Mirage is a JavaScript library for mocking populations. It exposes methods that can be used to generate random location data, 
in the form of lat/lng objects. (`{lat: -13.667, lng: 48.956}`)

You can also limit the extent of your population by bounding box or bounding polygons.

### `conjure(options)`
```js
import { conjure } from 'mirage';
options = {
	bound: null, // A box, or a geoJson polygon. Defaults to whole planet,
	count: 100 // The amount of points to return
};
var population = conjure(objects); // [{lat: -13.667, lng: 48.956}, ...]
```

### Future Plans
I'd like to create a stateful mirage object as well, and allow it to alter its state periodically to create motion. Users could subscribe to an event, or poll the object when they need to. This would mimick the movement of people/ships/anything.

I also have plans for mirage-server, which would spin a small local server to serve the results over http, and even a map interface to draw the bounds/visualize the populations.
