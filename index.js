'use strict';

function Pathfinder() {
  this.addon = require('bindings')('addon');
  console.log(this.addon);
  this.pathfinder = new this.addon.Pathfinder();

}

Pathfinder.prototype.loadBin = function(path) {
  return this.pathfinder.LoadBin(path);
}

Pathfinder.prototype.findPath = function(x1, y1, z1, x2, y2, z2) {
  return this.pathfinder.FindPath(x1, y1, z1, x2, y2, z2);
}

Pathfinder.prototype.findRandomPoint = function() {
  return this.pathfinder.FindRandomPoint();
}

module.exports = Pathfinder;
