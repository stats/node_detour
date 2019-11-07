'use strict';

function Pathfinder() {
  this.addon = require('bindings')('addon');
  console.log(this.addon);
  this.pathfinder = new this.addon.Pathfinder();

}

Pathfinder.prototype.loadBin = function(path) {
  this.pathfinder.LoadBin(path);
}

Pathfinder.prototype.findPath = function(x1, y1, z1, x2, y2, z2) {

}

Pathfinder.prototype.getPath = function() {
  return this.pathfinder.getPath();
}

module.exports = Pathfinder;
