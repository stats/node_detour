export = NodeDetour;

declare class NodeDetour {
  constructor();

  loadBin(path:string):any;
  findRandomPoint():float[];
  findPath():float[];
  findPath2d():float[][];
}
