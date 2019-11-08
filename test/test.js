var Pathfinder = require('../index.js');

console.log(Pathfinder);

var pathfinder = new Pathfinder();

console.log(pathfinder);

var result = pathfinder.loadBin('C:/Users/Currand/Desktop/node_detour/test/tutorial.bin');

console.log('Loaded the Bin. Return code: ', result);
