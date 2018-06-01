import { BassString } from "./BassString";
export class FretBoard {


    stringCount: number;
    strings: Array<BassString>;



    addStrings(strArray: BassString[]): number {
      if(this.strings==null)
      this.strings = new Array<BassString>();

      strArray.forEach(str => {
          this.strings.push(str);          
      });

      // update the stringCount
      return this.stringCount = this.strings.length;
  }
  }



