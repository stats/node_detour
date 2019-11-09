export declare class NodeDetour {
  constructor();

  loadBin(path:string):any;
  findRandomPoint():float[];
  findPath(float[] p1, float[] p2):float[];
  findPath2d(float[] p1, float[] p2):float[][];
}
