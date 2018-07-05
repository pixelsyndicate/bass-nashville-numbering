import { BassString } from "./BassString";
import { FretMarker } from "./FretMarker";


export class FretBoard {

  strings: Array<BassString>;
  stringCount: number;
  markers: Array<FretMarker>;

  constructor() {
    this.markers = new Array<FretMarker>();
    this.markers.push(
      { index: 0, marker: ".." },
      { index: 1, marker: "" },
      { index: 2, marker: "" },
      { index: 3, marker: "." },
      { index: 4, marker: "" },
      { index: 5, marker: "." },
      { index: 6, marker: "" },
      { index: 7, marker: "." },
      { index: 8, marker: "" },
      { index: 9, marker: "." },
      { index: 10, marker: "" },
      { index: 11, marker: "" },
      { index: 12, marker: ".." },
      { index: 13, marker: "" },
      { index: 14, marker: "" },
      { index: 15, marker: "." },
      { index: 16, marker: "" },
      { index: 17, marker: "." },
      { index: 18, marker: "" },
      { index: 19, marker: "." },
      { index: 20, marker: "" },
      { index: 21, marker: "." },
      { index: 22, marker: "" },
      { index: 23, marker: "" },
      { index: 24, marker: ".." },
      { index: 25, marker: "" });

    this.strings = new Array<BassString>();
  }

  addStrings(strArray: BassString[]): number {
    if (this.strings == null)
      this.strings = new Array<BassString>();

    strArray.forEach(str => {
      this.strings.push(str);
    });

    // update the stringCount
    return this.stringCount = this.strings.length;
  }
}

