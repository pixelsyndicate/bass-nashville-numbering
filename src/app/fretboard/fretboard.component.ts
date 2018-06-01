import { Component, OnInit } from '@angular/core';

import { FretBoard } from '../FretBoard';
import { NashvilleNumbers } from '../NashvilleNumbers';
import { BassString } from '../BassString';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  fretBoard: FretBoard;
  bassStrings = 5;
  nashNumbers: NashvilleNumbers;
  allNotes: string[];

  constructor() {
    this.fretBoard = new FretBoard();
    this.fretBoard.stringCount = this.bassStrings;
    this.nashNumbers = new NashvilleNumbers();
  }

  getNashNumberClass(n: string): string {
    let toReturn = "btn-dark";
    let isNashNumber = this.isNashNumber(n);
    if (!isNashNumber)
      return " btn-dark";
    else {
      if (this.nashNumbers['1'].note == n)
        toReturn = " btn-primary";
      if (this.nashNumbers['2'].note == n)
        toReturn = "  btn-outline-secondary";
      if (this.nashNumbers['3'].note == n)
        toReturn = " btn-outline-info";
      if (this.nashNumbers['4'].note == n)
        toReturn = " btn-outline-success";
      if (this.nashNumbers['5'].note == n)
        toReturn = " btn-outline-warning";
      if (this.nashNumbers['6'].note == n)
        toReturn = " btn-outline-danger";
      if (this.nashNumbers['7'].note == n)
        toReturn = " btn-outline-light";
    }
    return toReturn;

  }

  isNashNumber(n:string):Boolean{
    for (let i = 1; i < 7; i++) {
    if (this.nashNumbers[i].note == n) {
      return true;
    }
  }}


  isNotNashNumber(n: string): Boolean {

    let toReturn: Boolean = true;
    toReturn =
      (this.nashNumbers["1"].note != n) &&
      (this.nashNumbers["2"].note != n) &&
      (this.nashNumbers["3"].note != n) &&
      (this.nashNumbers["4"].note != n) &&
      (this.nashNumbers["5"].note != n) &&
      (this.nashNumbers["6"].note != n) &&
      (this.nashNumbers["7"].note != n);
    return toReturn;
  }

  ngOnInit() {

    let bstring: BassString = {
      open: 'B',
      index: 5,
      stringType: 5,
      notes: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",]
    };
    let estring = {
      open: 'E', index: 4, stringType: 4,
      notes: ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E",]
    };
    let astring = {
      open: 'A', index: 3, stringType: 4,
      notes: ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A",]
    };
    let dstring = {
      open: 'D', index: 2, stringType: 4,
      notes: ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D",]
    };
    let gstring = {
      open: 'G', index: 1, stringType: 4,
      notes: ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G",]
    };
    let cstring = {
      open: 'C', index: 0, stringType: 6,
      notes: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C",]
    };

    this.bassStrings = this.fretBoard.addStrings([bstring, estring, astring, dstring, gstring, cstring]);

    this.bassStrings = 4;

    //this.fretBoard.strings =  [bstring, estring, astring, dstring, gstring, cstring] ;

    this.allNotes = [];

    // fill the allNotes array;
    ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"].forEach(n => {
      this.allNotes.push(n);
    });


  }

  filterStrings(stringObjs: any[], strType: number) {
    let toReturn = [];
    stringObjs.forEach(e => {
      if (e.stringType as number <= strType)
        toReturn.push(e);
    });
    return toReturn;
  }

  selectRoot(e: Event, str: any, note: any): void {
    console.log(note + " was selected as rootNote for string " + str.open);
    let sIndx = str.index;
    this.setNashNumbers(str, note);
  }

  setNashNumbers(str: any, rootNote: any): void {

    let upStrIdx = this.fretBoard.strings.findIndex(idx => idx.index == str.index - 1);
    let dnStrIdx = this.fretBoard.strings.findIndex(idx => idx.index == str.index + 1);
    let aboveString = this.fretBoard.strings[upStrIdx];
    let belowString = this.fretBoard.strings[dnStrIdx];
    if (aboveString)
      console.log('above string found');
    if (belowString)
      console.log('below string found');

    // get the index of the rootNote
    let rNIndex: number = str.notes.indexOf(rootNote);

    let _1st = str.notes[rNIndex];
    let _2nd = str.notes[rNIndex + 2];
    let _3rd = str.notes[rNIndex + 4];
    let _4th = str.notes[rNIndex + 5];//aboveString.notes[rNIndex];
    let _5th = str.notes[rNIndex + 7];//aboveString.notes[rNIndex + 2];
    let _6th = str.notes[rNIndex + 9];//aboveString.notes[rNIndex + 4];
    let _7th = str.notes[rNIndex + 11];//aboveString.notes[rNIndex + 6];
    this.nashNumbers["1"] = { str: str.open, note: _1st };
    this.nashNumbers["2"] = { str: str.open, note: _2nd };
    this.nashNumbers["3"] = { str: aboveString.open, note: _3rd };
    this.nashNumbers["4"] = { str: aboveString.open, note: _4th };
    this.nashNumbers["5"] = { str: aboveString.open, note: _5th };
    this.nashNumbers["6"] = { str: aboveString.open, note: _6th };
    this.nashNumbers["7"] = { str: aboveString.open, note: _7th };

    //   console.log('nashville numbers are:'
    //     + str.nashNumbers["1"].str.open + " | " + str.nashNumbers["1"].note
    //     + str.nashNumbers["2"].str.open + " | " + str.nashNumbers["2"].note
    //     + str.nashNumbers["3"].str.open + " | " + str.nashNumbers["3"].note
    //     + str.nashNumbers["4"].str.open + " | " + str.nashNumbers["4"].note
    //     + str.nashNumbers["5"].str.open + " | " + str.nashNumbers["5"].note
    //     + str.nashNumbers["6"].str.open + " | " + str.nashNumbers["6"].note
    //     + str.nashNumbers["7"].str.open + " | " + str.nashNumbers["7"].note);
    // }

  }
}