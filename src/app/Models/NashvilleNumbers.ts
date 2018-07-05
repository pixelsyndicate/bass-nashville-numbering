import { NashvilleNumber } from "./NashvilleNumber";
import { $ } from "protractor";


export class NashvilleNumbers {

  "1": NashvilleNumber;// { str: string; note: string };
  "2": NashvilleNumber;
  "3": NashvilleNumber;
  "4": NashvilleNumber;
  "5": NashvilleNumber;
  "6": NashvilleNumber;
  "7": NashvilleNumber;


  unset() {

    for (let i = 1; i < 8; i++) {
      this[i] = new NashvilleNumber();
    }
    //this["1"] = new NashvilleNumber();
    //this["2"] = new NashvilleNumber();
    //this["3"] = new NashvilleNumber();
    //this["4"] = new NashvilleNumber();
    //this["5"] = new NashvilleNumber();
    //this["6"] = new NashvilleNumber();
    //this["7"] = new NashvilleNumber();

  }
  set(str: any, rootNote: any): void {

    let rNIndex: number = str.notes.indexOf(rootNote);
    let i = str.notes[rNIndex];
    let ii = str.notes[rNIndex + 2];
    let iii = str.notes[rNIndex + 4];
    let iv = str.notes[rNIndex + 5];
    let v = str.notes[rNIndex + 7];
    let vi = str.notes[rNIndex + 9];
    let vii = str.notes[rNIndex + 11];
    this["1"] = { str: str.open, note: i };
    this["2"] = { str: str.open, note: ii };
    this["3"] = { str: str.open, note: iii };
    this["4"] = { str: str.open, note: iv };
    this["5"] = { str: str.open, note: v };
    this["6"] = { str: str.open, note: vi };
    this["7"] = { str: str.open, note: vii };

  }

  constructor() {
    this.unset();
  }

  getNote(num: number): string {
    // console.log('num:' + num + ' this[num].note:' + this[num].note);
    return this[num].note;
  }

  getNumber(note: string): number {

    for (let x = 1; x < 8; x++) {
      if (this[x].note == note)
        return x;
    }
    return 0;
  }

}
