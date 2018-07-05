
import { Injectable } from "@angular/core";

import { Chord } from "../Models/Chord";
import { ChordBlock } from "../Models/ChordBlock";

@Injectable({
  providedIn: "root"
})
export class ChordService {

  private closedVoices: Array<Chord>;
  private openVoices: Array<Chord>;

  constructor() {
    this.openVoices = new Array<Chord>(
      new Chord("C Major 7th (1,3,7)"),
      new Chord("C dominant 7th (1,3,b7)"),
      new Chord("C minor 7th (1,b3,b7)"),
      new Chord("C minor 7th flat 5 (1,b3,b5,b7)"),
      new Chord("C minor 7th flat 5 (1,b5,b7) - version 2"));

    this.closedVoices = new Array<Chord>(
      new Chord("C Major 7th (1,3,7)"),
      new Chord("C dominant 7th (1,3,b7)"),
      new Chord("C dominant 7th (1,3,b7) - alternate fingering"),
      new Chord("C minor 7th (1,b3,b7)"),
      new Chord("C minor 7th flat 5 (1,b5,b7)"));

    this.getChords();
  }

  private getChords(): void {


    this.openVoices[0].blocks.push(
      { fret: 8, bassString: "E", finger: 1, note: "R" },
      { fret: 9, bassString: "D", finger: 3, note: "VII" },
      { fret: 9, bassString: "G", finger: 4, note: "III" });
    this.openVoices[1].blocks.push(
      { fret: 8, bassString: "E", finger: 1, note: "R" },
      { fret: 8, bassString: "D", finger: 2, note: "bVII" },
      { fret: 9, bassString: "G", finger: 4, note: "III" }
    );
    this.openVoices[2].blocks.push(
      { fret: 8, bassString: "E", finger: 1, note: "R" },
      { fret: 8, bassString: "D", finger: 2, note: "bVII" },
      { fret: 8, bassString: "G", finger: 3, note: "bIII" }
    );
    this.openVoices[3].blocks.push(
      { fret: 8, bassString: "E", finger: 1, note: "R" },
      { fret: 9, bassString: "A", finger: 2, note: "bV" },
      { fret: 8, bassString: "D", finger: 1, note: "bVII" },
      { fret: 8, bassString: "G", finger: 1, note: "bIII" }
    );
    this.openVoices[4].blocks.push(
      { fret: 8, bassString: "E", finger: 1, note: "R" },
      { fret: 8, bassString: "D", finger: 1, note: "bVII" },
      { fret: 11, bassString: "G", finger: 4, note: "bV" }
    );



    this.closedVoices[0].blocks.push(
      { fret: 14, bassString: "D", finger: 1, note: "III" },
      { fret: 15, bassString: "A", finger: 2, note: "R" },
      { fret: 16, bassString: "G", finger: 4, note: "VII" }
    );

    this.closedVoices[1].blocks.push(
      { fret: 14, bassString: "D", finger: 1, note: "III" },
      { fret: 15, bassString: "A", finger: 2, note: "R" },
      { fret: 16, bassString: "G", finger: 3, note: "bVII" }
    );

    this.closedVoices[2].blocks.push(
      { fret: 14, bassString: "D", finger: 2, note: "III" },
      { fret: 15, bassString: "A", finger: 3, note: "R" },
      { fret: 16, bassString: "G", finger: 4, note: "bVII" }
    );

    this.closedVoices[3].blocks.push(
      { fret: 13, bassString: "D", finger: 1, note: "bIII" },
      { fret: 15, bassString: "A", finger: 3, note: "R" },
      { fret: 15, bassString: "G", finger: 4, note: "bVII" }
    );

    this.closedVoices[4].blocks.push(
      { fret: 15, bassString: "D", finger: 1, note: "R" },
      { fret: 16, bassString: "A", finger: 2, note: "bV" },
      { fret: 15, bassString: "G", finger: 1, note: "bVII" }
    );

  }

  getOpenChords(): Chord[] {

    return this.openVoices;
  }

  getClosedChords(): Chord[] {

    return this.closedVoices;
  }

  isChordNote(chord: Chord, str: string, note: number): any {
    let theBlock = this.getChordBlock(chord, str, note);
    return theBlock != null;
  }

  getChordBlock(chord: Chord, str: string, note: number): ChordBlock {
    let theBlock = chord.blocks.find(x => x.bassString == str && x.fret == note);
    return theBlock;
  }

  getChordBlockClass(block: ChordBlock) {

    switch (block.finger) {
      case 1:
        return 'btn-light';
      case 2:
        return 'btn-info';
      case 3:
        return 'btn-success';
      case 4:
        return 'btn-warning';
      default:
        return '';
    }
  }
}
