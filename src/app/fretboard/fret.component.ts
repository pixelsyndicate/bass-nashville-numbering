import { Component, Input } from '@angular/core';

import { BassString } from '../Models/BassString';
import { BassService } from '../Services/bass.service';

@Component({
  selector: 'app-fretboard-fret',
  templateUrl:'./fret.component.html'
})
export class FretComponent {

  @Input() s: BassString;
  @Input() note: string;
 
  bs: BassService;

  constructor(private bassService: BassService) {
    this.bs = bassService;
   }

}
