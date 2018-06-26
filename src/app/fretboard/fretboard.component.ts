import { Component, OnInit, Input} from '@angular/core';

import { FretBoard } from '../FretBoard';
import { NashvilleNumbers } from '../NashvilleNumbers';
import { BassString } from '../BassString';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  @Input() bassStrings: number;

 // showLegend:boolean = false;
  fretBoard: FretBoard;
  nashNumbers: NashvilleNumbers;
  allNotes: string[];

  // toggleLegend():void {
  //   this.showLegend = !this.showLegend;
  // }
 

  constructor() {
    this.fretBoard = new FretBoard();
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

  getNashNumberBadgeClass(n: string): string {
    let toReturn = "hidden";
    let isNashNumber = this.isNashNumber(n);
    if (!isNashNumber)
      return "badge  badge-dark";
    else {
      if (this.nashNumbers['1'].note == n)
        toReturn = "badge badge-light";
      if (this.nashNumbers['2'].note == n)
        toReturn = " badge badge-secondary";
      if (this.nashNumbers['3'].note == n)
        toReturn = "badge badge-info";
      if (this.nashNumbers['4'].note == n)
        toReturn = "badge badge-success";
      if (this.nashNumbers['5'].note == n)
        toReturn = "badge badge-warning";
      if (this.nashNumbers['6'].note == n)
        toReturn = "badge badge-danger";
      if (this.nashNumbers['7'].note == n)
        toReturn = "badge badge-light";
    }
    return toReturn;

  }

  getNashNumberBadgeClassByNum(n: number): string {
    let toReturn = "badge badge-dark";

    if (n == 1)
      return "badge badge-light";
    if (n == 2)
      return " badge badge-secondary";
    if (n == 3)
      return "badge badge-info";
    if (n == 4)
      return "badge badge-success";
    if (n == 5)
      return "badge badge-warning";
    if (n == 6)
      return "badge badge-danger";
    if (n == 7)
      return "badge badge-dark";


    return toReturn;

  }

  isNashNumber(n: string): Boolean {
    for (let i = 1; i < 8; i++) {
      if (this.nashNumbers[i].note == n) {
        return true;
      }
    }
  }

  ngOnInit() {

    
    this.fretBoard.stringCount = this.bassStrings;
    let bstring: BassString = {
      open: 'B',
      index: 5, stringType: 5,
      notes: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",]
    };
    let estring: BassString = {
      open: 'E',
      index: 4, stringType: 4,
      notes: ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E",]
    };
    let astring: BassString = {
      open: 'A',
      index: 3, stringType: 4,
      notes: ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A",]
    };
    let dstring: BassString = {
      open: 'D',
      index: 2, stringType: 4,
      notes: ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D",]
    };
    let gstring: BassString = {
      open: 'G',
      index: 1, stringType: 4,
      notes: ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G",]
    };
    let cstring: BassString = {
      open: 'C',
      index: 0, stringType: 6,
      notes: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C",]
    };

    let initialStrings = this.fretBoard.addStrings([bstring, estring, astring, dstring, gstring, cstring]);

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

    this.nashNumbers.set(str, note);
  }

}