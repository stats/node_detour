'use strict';

function NodeDetour() {
  this.addon = require('bindings')('addon');
  console.log(this.addon);
  this.pathfinder = new this.addon.Pathfinder();

}

NodeDetour.prototype.loadBin = function(path) {
  return this.pathfinder.LoadBin(path);
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
