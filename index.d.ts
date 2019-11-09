declare module "node_detour" {
  export declare class NodeDetour {
    constructor();

    loadBin(path:string):any;
    findRandomPoint():float[];
    findPath(p1:float[], p2:float[]):float[];
    findPath2d(p1:float[], p2:float[]):float[][];
  }
}
