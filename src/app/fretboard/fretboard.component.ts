import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  rootNote: { str: any, note: any };
  bassStrings = 5;
  nashNumbers: {
    1: { str: any, note: any },
    2: { str: any, note: any },
    3: { str: any, note: any },
    4: { str: any, note: any },
    5: { str: any, note: any },
    6: { str: any, note: any },
    7: { str: any, note: any }
  };

  fretBoard: {
    strings: {
      open: string;
      index: number;
      stringType: number;
      notes: Array<string>;
    }[];
  };

  notes: any;
  allNotes: string[];

  constructor() {

  }

  ngOnInit() {
    this.nashNumbers = {
      1: { str: "", note: "" },
      2: { str: "", note: "" },
      3: { str: "", note: "" },
      4: { str: "", note: "" },
      5: { str: "", note: "" },
      6: { str: "", note: "" },
      7: { str: "", note: "" }
    }
    this.rootNote = {str:"",note:""};
    let bstring = {
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
    this.fretBoard = { strings: [bstring, estring, astring, dstring, gstring, cstring ]};

    this.allNotes = [];

    // fill the allNotes array;
    ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"].forEach(n => {
      this.allNotes.push(n);
    });

    if (this.fretBoard.strings.length !== 6)
      console.log("not enough fretBoard.strings (only " + this.fretBoard.strings.length + ")");

    this.fretBoard.strings.forEach((str) => {
      if (str.notes.length !== 24)
        console.log("not enough notes in fretBoard.strings " + str);
    });

    // test filterStrings // return correct items

    // let fourCnt = 4;
    // let fs = this.filterStrings(
    //   this.fretBoard.strings,
    //   fourCnt);
    // if (fs.length != fourCnt)
    //   console.log("didn't filter by stringType " + fourCnt);

    // let fiveCnt = 5;
    // fs = this.filterStrings(this.fretBoard.strings,
    //   fiveCnt);
    // if (fs.length != fiveCnt)
    //   console.log("didn't filter by stringType " + fiveCnt);

    // let sixCnt = 6;
    // fs = this.filterStrings(this.fretBoard.strings, sixCnt);
    // if (fs.length != sixCnt)
    //   console.log("didn't filter by stringType " + sixCnt);


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
    this.rootNote = {str,note};
    
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
    let _3rd = aboveString.notes[rNIndex - 1];
    let _4th = aboveString.notes[rNIndex];
    let _5th = aboveString.notes[rNIndex + 2];
    let _6th = aboveString.notes[rNIndex + 4];
    let _7th = aboveString.notes[rNIndex + 4];
    this.nashNumbers["1"] = { str:str.open, note:_1st };
    this.nashNumbers["2"] = { str:str.open, note:_2nd };
    this.nashNumbers["3"] = { str:aboveString.open, note:_3rd };
    this.nashNumbers["4"] = { str:aboveString.open, note:_4th };
    this.nashNumbers["5"] = { str:aboveString.open, note:_5th };
    this.nashNumbers["6"] = { str:aboveString.open, note:_6th };
    this.nashNumbers["7"] = { str:aboveString.open,note: _7th };

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