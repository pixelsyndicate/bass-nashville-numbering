import { Component, Input, OnInit } from '@angular/core';
import { FretBoard } from '../FretBoard';
import { BassService } from '../bass.service';
import { AppComponent } from '../app.component';

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

  closedVoice = {
    cmaj7: [{ fret: 14, bassString: 'D', finger: 1, note: 'III' }, { fret: 15, bassString: 'A', finger: 2, note: 'R' }, { fret: 16, bassString: 'G', finger: 4, note: 'VII' }],
    cdom7: [{ fret: 14, bassString: 'D', finger: 1, note: 'III' }, { fret: 15, bassString: 'A', finger: 2, note: 'R' }, { fret: 16, bassString: 'G', finger: 3, note: 'bVII' }],
    cdom7alt: [{ fret: 14, bassString: 'D', finger: 2, note: 'III' }, { fret: 15, bassString: 'A', finger: 3, note: 'R' }, { fret: 16, bassString: 'G', finger: 4, note: 'bVII' }],
    cmin7: [{ fret: 13, bassString: 'D', finger: 1, note: 'bIII' }, { fret: 15, bassString: 'A', finger: 3, note: 'R' }, { fret: 15, bassString: 'G', finger: 4, note: 'bVII' }],
    cmin7flat: [{ fret: 15, bassString: 'D', finger: 1, note: 'R' }, { fret: 16, bassString: 'A', finger: 2, note: 'bV' }, { fret: 15, bassString: 'G', finger: 1, note: 'bVII' }],
  };
  openVoice = {
    cmaj7: [{ fret: 8, bassString: 'E', finger: 1, note: 'R' }, { fret: 9, bassString: 'D', finger: 3, note: 'VII' }, { fret: 9, bassString: 'G', finger: 4, note: 'III' }],
    cdom7: [{ fret: 8, bassString: 'E', finger: 1, note: 'R' }, { fret: 8, bassString: 'D', finger: 2, note: 'bVII' }, { fret: 9, bassString: 'G', finger: 4, note: 'III' }],
    cmin7: [{ fret: 8, bassString: 'E', finger: 1, note: 'R' }, { fret: 8, bassString: 'D', finger: 2, note: 'bVII' }, { fret: 8, bassString: 'G', finger: 3, note: 'bIII' }],
    cmin7flat5: [{ fret: 8, bassString: 'E', finger: 1, note: 'R' }, { fret: 8, bassString: 'A', finger: 2, note: 'bV' },
    { fret: 8, bassString: 'D', finger: 1, note: 'bVII' }, { fret: 8, bassString: 'G', finger: 1, note: 'bIII' }],
    cmin7flat5alt: [{ fret: 8, bassString: 'E', finger: 1, note: 'R' }, { fret: 8, bassString: 'D', finger: 1, note: 'bVII' }, { fret: 9, bassString: 'G', finger: 4, note: 'bV' }],
  };


  constructor(bassService: BassService) {
    this.strings = bassService.getStrings();
  }

  ngOnInit() {

    // instantiate a fretboard
    this.fretboard = new FretBoard();
    this.fretboard.addStrings(this.strings);

  }

}
