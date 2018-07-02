import { Injectable, Input } from '@angular/core';
import { BassString } from '../BassString';

@Injectable({
  providedIn: 'root'
})
export class BassService {

 constructor(){
   this.bassStrings = [];
 }
  private bstring: BassString;
  private estring: BassString;
  private astring: BassString;
  private dstring: BassString;
  private gstring: BassString;
  private cstring: BassString;
  private bassStrings: BassString[];


  getStrings(): BassString[] {
    this.bstring = {
      open: 'B',
      index: 5, stringType: 5,
      notes: ['B',"C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",]
    };
    this.estring= {
      open: 'E',
      index: 4, stringType: 4,
      notes: ['E',"F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E",]
    };
    this.astring = {
      open: 'A',
      index: 3, stringType: 4,
      notes: ['A',"Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A",]
    };
    this.dstring = {
      open: 'D',
      index: 2, stringType: 4,
      notes: ['D',"Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D",]
    };
    this.gstring = {
      open: 'G',
      index: 1, stringType: 4,
      notes: ['G',"Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G",]
    };
    this.cstring = {
      open: 'C',
      index: 0, stringType: 6,
      notes: ['C',"Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C",]
    };
    if(this.bassStrings.length< 1)
    this.bassStrings.push(this.bstring, this.estring, this.astring, this.dstring, this.gstring, this.cstring);
    return this.bassStrings;
  }

 private getNotes():string[]{
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

  getNotesStartingWith(note:string):string[]{
    let allNotes = this.getNotes();
    let indexOfNote = allNotes.indexOf(note);
    let toReturn = allNotes.slice(indexOfNote, allNotes.length-1);
    return toReturn;
  }


   // only return those BassString objects that have stringType = strType
   filterStrings(stringObjs:BassString[], strType: number):BassString[] {
     if(this.bassStrings!=stringObjs)
     this.bassStrings = stringObjs;
    let toReturn = [];
    this.bassStrings.forEach(e => {
      if (e.stringType as number <= strType)
        toReturn.push(e);
    });
    return toReturn;
  }

}



