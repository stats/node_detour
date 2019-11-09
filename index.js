'use strict';

function NodeDetour() {
   var addon = require('bindings')('addon');
  this.pathfinder = new addon.Pathfinder();

}

NodeDetour.prototype.loadBin = function(p) {
  const path = require('path');
  var full_path = path.resolve(p);
  var result = this.pathfinder.LoadBin(full_path);
  switch(result) {
    case 1: return 1;
    case 2: return "Error: Could not open file";
    case 3: return "Error: Could not read header";
    case 4: return "Error: Header magic value incorrect";
    case 5: return "Error: Header version incorrect";
    case 6: return "Error: Could not allocate mesh object";
    case 7: return "Error: Could not initialize mesh";
    case 8: return "Error: Could not open tile header";
    case 9: return "Error: Could not read tile header data";
  }
}

NodeDetour.prototype.findPath = function(p1, p2) {
  return this.pathfinder.FindPath(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
}

NodeDetour.prototype.findRandomPoint = function() {
  return this.pathfinder.FindRandomPoint();
}

NodeDetour.prototype.findPath2d = function(p1, p2) {
  var array = this.pathfinder.FindPath(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
  var result = [];
  for(var i = 0; i < array.length; i+= 3) {
    result.push([array[i], array[i+1], array[i+2]]);
  }
  return result;
}

module.exports = NodeDetour;
