declare module "node_detour" {
  export class NodeDetour {
    constructor();

    public loadBin(path:string):any;
    public findRandomPoint():float[];
    public findPath(p1:float[], p2:float[]):float[];
    public findPath2d(p1:float[], p2:float[]):float[][];
  }
}
