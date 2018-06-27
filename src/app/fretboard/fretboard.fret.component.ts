import { Component, Input } from '@angular/core';

import { BassString } from '../BassString';
import { FretboardComponent } from './fretboard.component';

@Component({selector:'app-fretboard-fret',template:`
<button type="button" style="min-width: 50px;" class="btn " (click)="fbc.selectRoot($event,s,note);" [ngClass]="fbc.getNashNumberClass(note)">
{{note}}
<span [ngClass]="fbc.getNashNumberBadgeClass(note)" [hidden]="!fbc.isNashNumber(note)">{{fbc.nashNumbers.getNumber(note)}}</span>
</button>`})
export class FretComponent  {

  @Input() i:number;
    @Input() s:BassString;
    @Input() note:string;
    @Input() fbc:FretboardComponent;

  constructor(){}

}
