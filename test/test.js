var Pathfinder = require('../index.js');
var pathfinder = new Pathfinder();

var result;

result = pathfinder.loadBin('C:/Users/Currand/Desktop/node_detour/test/tutorial.bin');

console.log('Loaded the Bin. Return code: ', result);

result = pathfinder.findPath(0, 0, 0, 1, 0, 0);

console.log('FindPath: ', result);

result = pathfinder.findRandomPoint();

console.log('FindRandomPoint: ', result);

console.time('10000-randPoints');
for(var i = 0; i < 10000; i++) {
  p1 = pathfinder.findRandomPoint();
  //console.log('Path: ', "x1:", p1[0], "y1:", p1[1], "z1:", p1[2], "x2:", p2[0], "y2", p2[1], "z2", p2[2], "Length:", result.length);
}
console.timeEnd('10000-randPoints')


console.time('10000-findingPaths');

for(var i = 0; i < 10000; i++) {
  p1 = pathfinder.findRandomPoint();
  p2 = pathfinder.findRandomPoint();
  result = pathfinder.findPath(p1[0],p1[1],p1[2],p2[0],p2[1],p2[2]);
  //console.log('Path: ', "x1:", p1[0], "y1:", p1[1], "z1:", p1[2], "x2:", p2[0], "y2", p2[1], "z2", p2[2], "Length:", result.length);
}

console.timeEnd('10000-findingPaths');
