class NodeDetour {
  constructor() {
    var addon = require('bindings')('addon');
    this.pathfinder = new addon.Pathfinder();
  }

  loadBin(path) {
    let full_path = require('path').resolve(path);
    let result = this.pathfinder.LoadBin(full_path);
    switch(result) {
      case 1: return { error: false };
      case 2: return { error: true, message: "Could not open file" };
      case 3: return { error: true, message: "Could not read header" };
      case 4: return { error: true, message: "Header magic value incorrect" };
      case 5: return { error: true, message: "Header version incorrect" };
      case 6: return { error: true, message: "Could not allocate mesh object" };
      case 7: return { error: true, message: "Could not initialize mesh" };
      case 8: return { error: true, message: "Could not open tile header" };
      case 9: return { error: true, message: "Could not read tile header data" };
    }
  }

  findPath(p1, p2) {
    var result = this.pathfinder.FindPath(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
    if(result == 0) {
      throw "An error occurred finding a path. Make sure you have loaded a valid binary navmesh.";
      return;
    }
    return result;
  }

  findPath2d(p1, p2) {
    var array = this.pathfinder.FindPath(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
    if(array == 0) {
      throw "An error occurred finding a path. Make sure you have loaded a valid binary navmesh.";
      return;
    }
    var result = [];
    for(var i = 0; i < array.length; i+= 3) {
      result.push([array[i], array[i+1], array[i+2]]);
    }
    return result;
  }

  findRandomPoint() {
    var result = this.pathfinder.FindRandomPoint();
    if(result == 0) {
      throw "An error occurred finding a random point. Make sure you have loaded a valid binary navmesh.";
      return;
    }
    return result;
  }
}

module.exports = NodeDetour;
