import { Injectable, Input } from '@angular/core';
import { BassString } from '../Models/BassString';
import { NashvilleNumbers } from '../Models/NashvilleNumbers';

@Injectable({
  providedIn: 'root'
})
export class BassService {

  private bstring: BassString;
  private estring: BassString;
  private astring: BassString;
  private dstring: BassString;
  private gstring: BassString;
  private cstring: BassString;
  private bassStrings: Array<BassString>;
  stringCount: number;


  // migrated from fretboard.component.ts
  // exposed model for the Nashville Numbers based on the user's selection
  nashNumbers: NashvilleNumbers;
// migrated from fretboard.component.ts
  selectRoot(e: Event, str: any, note: any): void {
    this.nashNumbers.set(str, note);
  }
// migrated from fretboard.component.ts
  clearRoot(e: Event) {
    this.nashNumbers.unset();
  }




  constructor() {
    this.bassStrings = [];// = new Array<BassString>();
    this.bstring = {
      open: 'B',
      index: 5, stringType: 5,
      notes: ['B', "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",]
    };
    this.estring = {
      open: 'E',
      index: 4, stringType: 4,
      notes: ['E', "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E",]
    };
    this.astring = {
      open: 'A',
      index: 3, stringType: 4,
      notes: ['A', "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A",]
    };
    this.dstring = {
      open: 'D',
      index: 2, stringType: 4,
      notes: ['D', "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D",]
    };
    this.gstring = {
      open: 'G',
      index: 1, stringType: 4,
      notes: ['G', "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G",]
    };
    this.cstring = {
      open: 'C',
      index: 0, stringType: 6,
      notes: ['C', "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C",]
    };
    this.stringCount = 5;
  }

  isNashNumber(n: string): boolean {
    for (let i = 1; i < 8; i++) {
      if (this.nashNumbers[i].note == n) {
        return true;
      }
    }
  }

  getNashNumberClass(n: string): any {
    let toReturn = "btn-dark";
    if (!this.isNashNumber(n))
      return " btn-dark";
    else {
      if (this.nashNumbers['1'].note == n)
        return " btn-primary";
      if (this.nashNumbers['2'].note == n)
        return "  btn-outline-secondary";
      if (this.nashNumbers['3'].note == n)
        return " btn-outline-info";
      if (this.nashNumbers['4'].note == n)
        return " btn-outline-success";
      if (this.nashNumbers['5'].note == n)
        return " btn-outline-warning";
      if (this.nashNumbers['6'].note == n)
        return " btn-outline-danger";
      if (this.nashNumbers['7'].note == n)
        return " btn-outline-light";
    }
    return toReturn;
  }

  getStrings(): Array<BassString> {

    if (this.bassStrings.length < 1)
      this.bassStrings.push(this.bstring, this.estring, this.astring, this.dstring, this.gstring, this.cstring);
    return this.bassStrings;
  }

  private getNotes(): string[] {
    return [
      "Ab", "A", "Bb", "B", "C", "Db",
      "D", "Eb", "E", "F", "Gb", "G",
      "Ab", "A", "Bb", "B", "C", "Db",
      "D", "Eb", "E", "F", "Gb", "G",
      "Ab", "A", "Bb", "B", "C", "Db",
      "D", "Eb", "E", "F", "Gb", "G",
      "Ab", "A", "Bb", "B", "C", "Db",
      "D", "Eb", "E", "F", "Gb", "G"];
  }

  getNotesStartingWith(note: string): string[] {
    let allNotes = this.getNotes();
    let indexOfNote = allNotes.indexOf(note);
    let toReturn = allNotes.slice(indexOfNote, allNotes.length - 1);
    return toReturn;
  }

  // only return those BassString objects that have stringType = strType
  filterStrings(stringObjs: BassString[], strType: number): BassString[] {
    if (this.bassStrings != stringObjs)
      this.bassStrings = stringObjs;
    let toReturn = [];
    this.bassStrings.forEach(e => {
      if (e.stringType as number <= strType)
        toReturn.push(e);
    });
    return toReturn;
  }

  getNashNumberBadgeClass(n: string): string {
    let toReturn = "hidden";
    let isNashNumber = this.isNashNumber(n);
    if (!isNashNumber)
      return "badge  badge-dark";
    else {
      if (this.nashNumbers['1'].note == n)
        return "badge badge-light";
      if (this.nashNumbers['2'].note == n)
        return " badge badge-secondary";
      if (this.nashNumbers['3'].note == n)
        return "badge badge-info";
      if (this.nashNumbers['4'].note == n)
        return "badge badge-success";
      if (this.nashNumbers['5'].note == n)
        return "badge badge-warning";
      if (this.nashNumbers['6'].note == n)
        return "badge badge-danger";
      if (this.nashNumbers['7'].note == n)
        return "badge badge-light";
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
  
  isNashRootSelected(): boolean {
    return !this.nashNumbers.getNote(1) || this.nashNumbers.getNote(1) === '';
  }
}