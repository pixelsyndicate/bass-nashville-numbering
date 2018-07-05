import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { FretBoard } from '../Models/FretBoard';

import { Chord } from '../Models/Chord';
import { BassString } from '../Models/BassString';
import { BassService } from '../Services/bass.service';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.css']
})
export class ChordComponent {

  @Input() voice: Chord[];
  @Input() chord: Chord;
  @Input() p: AppComponent;

  @Input() strings: BassString[];

  fretboard: FretBoard;
  bs: BassService;

  constructor(private bassService: BassService) {
    this.bs = bassService;
    this.fretboard = new FretBoard();
  }

  filterStrings(stringObjs: BassString[], strType: number): BassString[] {
    return this.bs.filterStrings(stringObjs, strType);
  }

}
