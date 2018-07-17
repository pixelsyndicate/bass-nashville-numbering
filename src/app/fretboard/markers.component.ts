import { Component, Input } from '@angular/core';
import { FretMarker } from '../Models/FretMarker';
@Component({
    selector: 'app-fretboard-marker',
    template: `
        <span *ngIf="i == 0">OPEN</span>
        <i class="fa fa-circle" style="font-size: .8em;" *ngIf="i > 0 && m.marker=='.'"></i>            
        <i class="fa fa-circle" style="font-size: .8em;" *ngIf="i > 0 &&  m.marker=='..'"></i>
        <i class="fa fa-circle" style="font-size: .8em;" *ngIf="i > 0 &&  m.marker=='..'"></i>`})
export class MarkersComponent {
    @Input() m: FretMarker;
    @Input() i: number;

    constructor() { }

}

