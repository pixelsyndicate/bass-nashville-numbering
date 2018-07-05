import { ScaleBlock } from "./ScaleBlock";

export class Scale {

  blocks: ScaleBlock[][];
  name: string;
  rows = 3;
  columns = 4;
  root: number[];

  constructor(n: string) {
    this.name = n;
    this.blocks = [];
  }

  tagOctiveRoot(): any {

    const octRootIndex = this.octiveRoot();
    const octBlock = this.getScaleBlock(octRootIndex[0] - 1, octRootIndex[1] - 1);
    octBlock.isRoot = true;
  }

  octiveRoot(): number[] {
    return [this.root[0], this.root[1] + 2];
  }

  getScaleBlock(row: number, column: number): ScaleBlock {

    return this.blocks[row][column];
  }
}
