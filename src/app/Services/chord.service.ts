import { Injectable, Input } from '@angular/core';

import { Chord } from '../Chord';
@Injectable({
  providedIn: 'root'
})
export class ChordService{

  private  closedVoices: Chord[];
  private  openVoices: Chord[];

  constructor() { 
    this.openVoices = [];
  this.closedVoices = [];

  this.getChords();
}

 private getChords() : void{

    this.openVoices = [
      new Chord('C Major 7th (1,3,7)'),
      new Chord('C dominant 7th (1,3,b7)'),
      new Chord('C minor 7th (1,b3,b7)'),
      new Chord('C minor 7th flat 5 (1,b3,b5,b7)'),
      new Chord('C minor 7th flat 5 (1,b5,b7) - version 2')];
      this.openVoices[0].blocks.push(
        { fret: 8, bassString: 'E', finger: 1, note: 'R' },
        { fret: 9, bassString: 'D', finger: 3, note: 'VII' },
        { fret: 9, bassString: 'G', finger: 4, note: 'III' });
      this.openVoices[1].blocks.push(
        { fret: 8, bassString: 'E', finger: 1, note: 'R' },
        { fret: 8, bassString: 'D', finger: 2, note: 'bVII' },
        { fret: 9, bassString: 'G', finger: 4, note: 'III' }
      );
      this.openVoices[2].blocks.push(
        { fret: 8, bassString: 'E', finger: 1, note: 'R' },
        { fret: 8, bassString: 'D', finger: 2, note: 'bVII' },
        { fret: 8, bassString: 'G', finger: 3, note: 'bIII' }
     );
      this.openVoices[3].blocks.push(
        { fret: 8, bassString: 'E', finger: 1, note: 'R' },
        { fret: 9, bassString: 'A', finger: 2, note: 'bV' },
        { fret: 8, bassString: 'D', finger: 1, note: 'bVII' },
        { fret: 8, bassString: 'G', finger: 1, note: 'bIII' }
      );
      this.openVoices[4].blocks.push(
        { fret: 8, bassString: 'E', finger: 1, note: 'R' },
        { fret: 8, bassString: 'D', finger: 1, note: 'bVII' },
        { fret: 11, bassString: 'G', finger: 4, note: 'bV' }
      );

      this.closedVoices = [
        new Chord('C Major 7th (1,3,7)'),
        new Chord('C dominant 7th (1,3,b7)'),
        new Chord('C dominant 7th (1,3,b7) - alternate fingering'),
        new Chord('C minor 7th (1,b3,b7)'),
        new Chord('C minor 7th flat 5 (1,b5,b7)'),
      ];

     
      this.closedVoices[0].blocks.push(
        { fret: 14, bassString: 'D', finger: 1, note: 'III' },
        { fret: 15, bassString: 'A', finger: 2, note: 'R' },
        { fret: 16, bassString: 'G', finger: 4, note: 'VII' }
      );
     
      this.closedVoices[1].blocks.push(
        { fret: 14, bassString: 'D', finger: 1, note: 'III' },
        { fret: 15, bassString: 'A', finger: 2, note: 'R' },
        { fret: 16, bassString: 'G', finger: 3, note: 'bVII' }
      );
      
      this.closedVoices[2].blocks.push(
        { fret: 14, bassString: 'D', finger: 2, note: 'III' },
        { fret: 15, bassString: 'A', finger: 3, note: 'R' },
        { fret: 16, bassString: 'G', finger: 4, note: 'bVII' }
      );
     
      this.closedVoices[3].blocks.push(
        { fret: 13, bassString: 'D', finger: 1, note: 'bIII' },
        { fret: 15, bassString: 'A', finger: 3, note: 'R' },
        { fret: 15, bassString: 'G', finger: 4, note: 'bVII' }
      );
     
      this.closedVoices[4].blocks.push(
        { fret: 15, bassString: 'D', finger: 1, note: 'R' },
        { fret: 16, bassString: 'A', finger: 2, note: 'bV' },
        { fret: 15, bassString: 'G', finger: 1, note: 'bVII' }
      );

  } 

 public getOpenChords(): Chord[]{

    return this.openVoices;
  }

  public getClosedChords(): Chord[] {
   
    return this.closedVoices;
  }
}