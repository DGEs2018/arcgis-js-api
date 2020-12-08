let topomap;
let satellitemap;
let streetsmap;
let mapview;
let viewparams;
let sceneview;
require([ 'esri/Map', 'esri/views/MapView', 'esri/views/SceneView' ], function(Map, MapView, SceneView) {
	topomap = new Map({ basemap: 'topo' });
	satellitemap = new Map({ basemap: 'satellite' });
	streetsmap = new Map({ basemap: 'streets' });
	// viewparams = {
	// 	container: 'mapview',
	// 	map: topomap,
	// 	zoom: 6,
	// 	center: [ 40.367292874678256, 15.381944892225548 ]
	// };
	mapview = new MapView({
		container: 'mapview',
		map: topomap,
		zoom: 6,
		center: [ 40.367292874678256, 15.381944892225548 ]
	});
	sceneview = new SceneView(viewparams);
});

document.getElementById('topo').addEventListener('click', function(e) {
	mapview.map = topomap;
});

document.getElementById('satellite').addEventListener('click', function(e) {
	mapview.map = satellitemap;
});

document.getElementById('streets').addEventListener('click', function(e) {
	mapview.map = streetsmap;
});
