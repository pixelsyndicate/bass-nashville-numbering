import { Component, Input } from '@angular/core';

import { BassString } from '../Models/BassString';
import { FretboardComponent } from './fretboard.component';
import { BassService } from '../Services/bass.service';

@Component({
  selector: 'app-fretboard-fret',
  template: `<button type="button" style="min-width: 50px;" class="btn "
(click)="bs.selectRoot($event,s,note);"
[ngClass]="bs.getNashNumberClass(note)">
{{note}}
<span [ngClass]="bs.getNashNumberBadgeClass(note)"
[hidden]="!bs.isNashNumber(note)">
{{bs.nashNumbers.getNumber(note)}}
</span></button>`
})
export class FretComponent {

  @Input() i: number;
  @Input() s: BassString;
  @Input() note: string;
  @Input() fbc: FretboardComponent;
  bs: BassService;

  constructor(private bassService: BassService) {
    this.bs = bassService;
   }

}
