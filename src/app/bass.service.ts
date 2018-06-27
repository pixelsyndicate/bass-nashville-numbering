import { Injectable, Input } from '@angular/core';
import { BassString } from './BassString';

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
  
  constructor() { }

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

    return [this.bstring, this.estring, this.astring, this.dstring, this.gstring, this.cstring];
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

}



import {MajorScale, MajorPentatonicScale, MinorScale, MinorPentatonicScale, BluesScale } from './Scales';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  private majorScale: MajorScale;
  private majorPentatonicScale: MajorPentatonicScale;
  private minorScale: MinorScale;
  private minorPentatonicScale: MinorPentatonicScale;
  private bluesScale: BluesScale;

  getScales():any{
    this.majorScale = new MajorScale();
    this.majorPentatonicScale = new MajorPentatonicScale();
    this.minorScale = new MinorScale();
    this.minorPentatonicScale = new MinorPentatonicScale();
    this.bluesScale = new BluesScale();
    return [this.majorScale, this.majorPentatonicScale, this.minorScale, this.minorPentatonicScale, this.bluesScale];

  }
}
