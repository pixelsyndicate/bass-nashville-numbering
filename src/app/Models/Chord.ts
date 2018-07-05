import { ChordBlock } from './ChordBlock';

export class Chord {
    
  constructor(n: string) {
    this.name = n;
    this.blocks = [];
  }

  blocks: ChordBlock[];
  name: string;
  rows: number = 4;
  columns: number = 4;
  root: number[];
}
