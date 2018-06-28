import { Component, Input, OnInit } from '@angular/core';
import { FretBoard } from '../FretBoard';
import { BassService } from '../bass.service';
import { AppComponent } from '../app.component';
import { ChordBlock } from '../ScaleBlock';
import { Chord } from '../Scale';
@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  @Input() p: AppComponent;
  @Input() bassStrings: number;
  fretboard: FretBoard;
  strings: any;

  closedVoice: Chord[];
  openVoice: Chord[];


  constructor(bassService: BassService) {
    this.strings = bassService.getStrings();
    this.closedVoice = [];
    this.openVoice = [];
  }

  ngOnInit() {

    // instantiate a fretboard
    this.fretboard = new FretBoard();
    this.fretboard.addStrings(this.strings);


    this.closedVoice[0] = new Chord('cmaj7');
    this.closedVoice[0].blocks.push(
      { fret: 14, bassString: 'D', finger: 1, note: 'III' },
      { fret: 15, bassString: 'A', finger: 2, note: 'R' },
      { fret: 16, bassString: 'G', finger: 4, note: 'VII' }
    );
    this.closedVoice[1] = new Chord('cdom7');
    this.closedVoice[1].blocks.push(
      { fret: 14, bassString: 'D', finger: 1, note: 'III' },
      { fret: 15, bassString: 'A', finger: 2, note: 'R' },
      { fret: 16, bassString: 'G', finger: 3, note: 'bVII' }
    );
    this.closedVoice[2] = new Chord('cdom7alt');
    this.closedVoice[2].blocks.push(
      { fret: 14, bassString: 'D', finger: 2, note: 'III' },
      { fret: 15, bassString: 'A', finger: 3, note: 'R' },
      { fret: 16, bassString: 'G', finger: 4, note: 'bVII' }
    );
    this.closedVoice[3] = new Chord('cmin7');
    this.closedVoice[3].blocks.push(
      { fret: 13, bassString: 'D', finger: 1, note: 'bIII' },
      { fret: 15, bassString: 'A', finger: 3, note: 'R' },
      { fret: 15, bassString: 'G', finger: 4, note: 'bVII' }
    );
    this.closedVoice[4] = new Chord('cmin7flat');
    this.closedVoice[4].blocks.push(
      { fret: 15, bassString: 'D', finger: 1, note: 'R' },
      { fret: 16, bassString: 'A', finger: 2, note: 'bV' },
      { fret: 15, bassString: 'G', finger: 1, note: 'bVII' }
    );


    this.openVoice = [
      new Chord('cmaj7'),
      new Chord('cdom7'),
      new Chord('cmin7'),
      new Chord('cmin7flat5'),
      new Chord('cmin7flat5alt')];
    this.openVoice[0].blocks.push(
      { fret: 8, bassString: 'E', finger: 1, note: 'R' },
      { fret: 9, bassString: 'D', finger: 3, note: 'VII' },
      { fret: 9, bassString: 'G', finger: 4, note: 'III' });
    this.openVoice[1].blocks.push(
      { fret: 8, bassString: 'E', finger: 1, note: 'R' },
      { fret: 8, bassString: 'D', finger: 2, note: 'bVII' },
      { fret: 9, bassString: 'G', finger: 4, note: 'III' }
    );
    this.openVoice[2].blocks.push(
      { fret: 8, bassString: 'E', finger: 1, note: 'R' },
      { fret: 8, bassString: 'D', finger: 2, note: 'bVII' },
      { fret: 8, bassString: 'G', finger: 3, note: 'bIII' }
   );
    this.openVoice[3].blocks.push(
      { fret: 8, bassString: 'E', finger: 1, note: 'R' },
      { fret: 9, bassString: 'A', finger: 2, note: 'bV' },
      { fret: 8, bassString: 'D', finger: 1, note: 'bVII' },
      { fret: 8, bassString: 'G', finger: 1, note: 'bIII' }
    );
    this.openVoice[4].blocks.push(
      { fret: 8, bassString: 'E', finger: 1, note: 'R' },
      { fret: 8, bassString: 'D', finger: 1, note: 'bVII' },
      { fret: 11, bassString: 'G', finger: 4, note: 'bV' }
    );

  }

}
