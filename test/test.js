var NodeDetour = require('../index.js');
var detour = new NodeDetour();

var result;

result = detour.loadBin('C:/Users/Currand/Desktop/node_detour/test/tutorial.bin');

console.log('Loaded the Bin. Return code: ', result);

var p1 = detour.findRandomPoint();
var p2 = detour.findRandomPoint();

console.log('FindRandomPoint: ', p1, p2);

var path1 = detour.findPath(p1, p2);

console.log('Path Results Length', path1.length);

var path2 = detour.findPath2d(p1, p2);

console.log('Path Results Length', path2.length);

console.time('10000-randPoints');
for(var i = 0; i < 1000; i++) {
  p1 = detour.findRandomPoint();
}
console.timeEnd('10000-randPoints')


console.time('10000-findPath');
var path_length = 0;
for(var i = 0; i < 10000; i++) {
  p1 = detour.findRandomPoint();
  p2 = detour.findRandomPoint();
  result = detour.findPath(p1, p2);
  path_length += result.length;
}

console.timeEnd('10000-findPath');
console.log('Average Path Length: ', path_length / 10000);

console.time('10000-findPath2d');

path_length = 0;
for(var i = 0; i < 10000; i++) {
  p1 = detour.findRandomPoint();
  p2 = detour.findRandomPoint();
  result = detour.findPath2d(p1, p2);
  path_length += result.length;
}

console.timeEnd('10000-findPath2d');
console.log('Average Path Length: ', path_length / 10000);
