import { Injectable, Input } from '@angular/core';
import { BassString } from './BassString';

import {MajorScale, MajorPentatonicScale, MinorScale, MinorPentatonicScale, BluesScale } from './Scale';

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  private majorScale: MajorScale;
  private majorPentatonicScale: MajorPentatonicScale;
  private minorScale: MinorScale;
  private minorPentatonicScale: MinorPentatonicScale;
  private bluesScale: BluesScale;
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
      notes: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",]
    };
    this.estring= {
      open: 'E',
      index: 4, stringType: 4,
      notes: ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E",]
    };
    this.astring = {
      open: 'A',
      index: 3, stringType: 4,
      notes: ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A",]
    };
    this.dstring = {
      open: 'D',
      index: 2, stringType: 4,
      notes: ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D",]
    };
    this.gstring = {
      open: 'G',
      index: 1, stringType: 4,
      notes: ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G",]
    };
    this.cstring = {
      open: 'C',
      index: 0, stringType: 6,
      notes: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C",]
    };

    return [this.bstring, this.estring, this.astring, this.dstring, this.gstring, this.cstring];
  }

  getNotes():string[]{
    return ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
  }

  getScales():any{
    this.majorScale = new MajorScale();
    this.majorPentatonicScale = new MajorPentatonicScale();
    this.minorScale = new MinorScale();
    this.minorPentatonicScale = new MinorPentatonicScale();
    this.bluesScale = new BluesScale();
    return [this.majorScale, this.majorPentatonicScale, this.minorScale, this.minorPentatonicScale, this.bluesScale];

  }
}
