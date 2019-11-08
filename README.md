#Node Detour

A JavaScript library for pathfinding on a [Recast & Detour c++ library](https::/github.com/memononen/recastnavigation) generated binary file.

This libary finds a Smooth Path across a navigation mesh.

#Install
npm install node_detour

#Usage
The workflow for using this is to create a [Recast & Detour](https::/github.com/memononen/recastnavigation) navigation mesh and export it using the .bin format.

My workflow involves building the RecastDemo application and using that to build my mesh and then exporting it using the save function. This will result in a new bin file being created in the RecastDemo folder which can be used in your nodejs application.

``` js
var NodeDetour = require('node_detour');
var detour = new NodeDetour();

var loadResult = detour.load('/full/path/to/mymap.bin');
// Returns a 0 on failure a 1 on success

var p1 = detour.findRandomPoint();
// Returns an array with 3 values for x, y, z position

var p2 = detour.findRandomPoint();
//Returns an array with 3 values for x, y, z position

var path = detour.findPath(p1, p2);
//returns a 1-dimensional array representing a series of [x,y,z,x,y,z...] points

var path = detour.findPath2d(p1, p2);
//returns a 2-dimensional array of of points [ [x,y,z], [x,y,z] ]
```

#Test
npm run test

The test results will also show benchmarks results for how long pathfinding takes. On an i5-7200U @ 2.50 GHz with 8 GB of ram it takes approximately 0.7 milliseconds to return a smooth path for paths averaging 400 waypoints.
