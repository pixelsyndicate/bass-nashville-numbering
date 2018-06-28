
import { ScaleBlock } from './ScaleBlock';

export class Scale {

    tagOctiveRoot(): any {

        let octRootIndex = this.octiveRoot();
        let octBlock = this.getScaleBlock(octRootIndex[0] - 1, octRootIndex[1] - 1);
        octBlock.isRoot = true;
    }

    constructor(n: string) {
        this.name = n;
        this.blocks = [];
    }

    blocks: ScaleBlock[][];
    name: string;
    rows: number = 3;
    columns: number = 4;
    root: number[];

    octiveRoot(): number[] {
        return [this.root[0], this.root[1] + 2];
    }

    getScaleBlock(row: number, column: number): ScaleBlock {

        return this.blocks[row][column];
    }
}



import { ChordBlock } from './ScaleBlock';

export class Chord {

    
    constructor(n: string) {
        this.name = n;
        this.blocks = [];
    }

    blocks: ChordBlock[][];
    name: string;
    rows: number = 4;
    columns: number = 4;
    root: number[];

    getChordBlock(row: number, column: number): ChordBlock {
        return this.blocks[row][column];
    }
}
