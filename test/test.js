var NodeDetour = require('../');
var detour = new NodeDetour();

var file = 'test/does_not_exist.bin';
var result = detour.loadBin(file);

if ( result.error == true ) {
  console.log('Testing bad binary file: Passed');
}

try {
  detour.findRandomPoint();
} catch (e) {
  console.log('Testing bad findRandomPoint: Passed');
}

try {
  detour.findPath([0,0,0], [0,0,0]);
} catch(e) {
  console.log('Testing bad findPath: Passed');
}

try {
  detour.findPath2d([0,0,0], [0,0,0]);
} catch(e) {
  console.log('Testing bad findPath2d: Passed');
}

file = 'test/tutorial.bin'

result = detour.loadBin(file);

if( result.error == true) {
  console.log('Loading the binary file: failed');
  console.log('Error:', result.message);

  var fs = require('fs');
  var path = require('path');

  resolved = path.resolve(file);

  if(fs.existsSync(resolved)) {
    console.log('File', resolved, ': exists');
  } else {
    consoel.log('File', resolved, ': not found');
  }

} else {
  console.log('Loaded the binary file: success ');

  var p1 = detour.findRandomPoint();
  var p2 = detour.findRandomPoint();

  console.log('FindRandomPoint:', p1, p2);

  var path1 = detour.findPath(p1, p2);

  console.log('Path Results Length:', path1.length);

  var path2 = detour.findPath2d(p1, p2);

  console.log('Path Results Length:', path2.length);

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
  console.log('Average Path Length:', path_length / 10000);

  console.time('10000-findPath2d');
  try {
    path_length = 0;
    for(var i = 0; i < 10000; i++) {
      p1 = detour.findRandomPoint();
      p2 = detour.findRandomPoint();
      result = detour.findPath2d(p1, p2);
      path_length += result.length;
    }
  } catch (e) {
    console.log("Finding Path 2d Had an Error, p1:", p1, "p2:", p2, "result:", result)
  }

  console.timeEnd('10000-findPath2d');
  console.log('Average Path Length:', path_length / 10000);
}
