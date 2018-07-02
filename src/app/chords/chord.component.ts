import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { FretBoard } from '../FretBoard';

import { Chord } from '../Chord';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.css']
})
export class ChordComponent {

    @Input() chord: Chord;
    @Input() p: AppComponent;
    @Input() fretboard: FretBoard;
    
 
    constructor() { }
}
