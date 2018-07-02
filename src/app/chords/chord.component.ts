import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { FretBoard } from '../FretBoard';

import { Chord } from '../Chord';
import { BassString } from '../BassString';
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
    @Input() fretboard: FretBoard;
    @Input() strings: BassString[];
 
    
    @Input() bs: BassService;

     constructor() {
      
     }
    
}
